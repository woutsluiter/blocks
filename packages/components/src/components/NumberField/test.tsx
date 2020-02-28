import React, { FC } from 'react';
import NumberField from '.';
import { mountWithTheme } from '../../utility/styled/testing';
import MosTheme from '../../themes/MosTheme';
import { mount } from 'enzyme';

describe(NumberField.name, () => {
    it('should handle change', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(<NumberField name="" value={19} onChange={changeMock} />);

        component.find('input').simulate('change', { target: { value: '20' } });

        expect(changeMock).toHaveBeenCalledWith(20);
    });

    it('should restore the savedValue on blur when the input is not numeric', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(<NumberField name="" value={123} onChange={changeMock} />);

        component.find('input').simulate('change', { target: { value: 'abcd' } });
        component.find('input').simulate('blur');

        expect(component.find('input').prop('value')).toEqual('123');
    });

    it('should not allow negative numbers when negativeDisabled is true', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(<NumberField name="" value={19} disableNegative onChange={changeMock} />);

        component.find('input').simulate('change', { target: { value: '-5' } });
        component.find('input').simulate('blur');

        expect(changeMock).toHaveBeenCalledWith(0);
    });

    it('should be able to handle localized float values', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(
            <NumberField name="" value={10} allowDecimals locale="nl_NL" onChange={changeMock} />,
        );

        component.find('input').simulate('change', { target: { value: '12,34' } });
        component.find('input').simulate('blur');

        expect(changeMock).toHaveBeenCalledWith(12.34);
        expect(component.find('input').prop('value')).toBe('12,34');
    });

    it('should not allow float values when allowDecimals is false', () => {
        const changeMock = jest.fn();
        const component = mountWithTheme(
            <NumberField name="" value={10} allowDecimals={false} onChange={changeMock} />,
        );

        component.find('input').simulate('change', { target: { value: '12,34' } });
        component.find('input').simulate('blur');

        expect(changeMock).toHaveBeenCalledWith(12);
        expect(component.find('input').prop('value')).toBe('12');
    });

    it('should render the value with a minimum amount of decimals', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(
            <NumberField
                name=""
                value={10}
                allowDecimals
                minimumFractionDigits={2}
                locale="nl_NL"
                onChange={changeMock}
            />,
        );

        expect(component.find('input').prop('value')).toBe('10,00');

        component.find('input').simulate('change', { target: { value: '11' } });
        component.find('input').simulate('blur');

        expect(changeMock).toHaveBeenCalledWith(11);
        expect(component.find('input').prop('value')).toBe('11,00');
    });

    it('should render the value with a maximum amount of decimals', () => {
        const changeMock = jest.fn();

        const component = mountWithTheme(
            <NumberField
                name=""
                value={10}
                allowDecimals
                maximumFractionDigits={2}
                locale="nl_NL"
                onChange={changeMock}
            />,
        );

        component.find('input').simulate('change', { target: { value: '12,34567' } });
        component.find('input').simulate('blur');

        expect(changeMock).toHaveBeenCalledWith(12.35);
        expect(component.find('input').prop('value')).toBe('12,35');
    });

    it('should be testable with a test-id', () => {
        const component = mountWithTheme(<NumberField data-testid="foo" value={0} name="foo" onChange={jest.fn()} />);

        expect(component.find('[data-testid="foo"]').hostNodes().length).toBe(1);
    });

    it('should apply changes when props change', () => {
        /**
         * setProps can only be called on a mounted root, because the TextField requires
         * a theme to be present, we wrap it and pass all props onto the actual TextField
         */
        const Wrapper: FC<{
            'data-testid': string;
            value: number;
            name: string;
            onChange(): void;
        }> = props => {
            return (
                <MosTheme>
                    <NumberField {...props} />
                </MosTheme>
            );
        };

        const changeMock = jest.fn();
        const component = mount(<Wrapper data-testid="foo" name="foo" value={10} onChange={changeMock} />);

        component.setProps({
            value: 20,
        });

        component.update();

        expect(
            component
                .find('[data-testid="foo"]')
                .hostNodes()
                .prop('value'),
        ).toBe('20');
    });
});
