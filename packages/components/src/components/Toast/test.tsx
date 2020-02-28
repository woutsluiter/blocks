import React from 'react';
import { mountWithTheme } from '../../utility/styled/testing';
import Toast from './';
import IconButton from '../IconButton';
import Button from '../Button';

jest.useFakeTimers();

describe('Toast', () => {
    it('should be possible to close the Toast using the close button', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(
            <Toast show severity="success" buttonTitle="Bar?" title="Foo" onClose={clickMock} />,
        );

        const closeButton = component.find(IconButton);

        closeButton.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });

    it('should automatically close when autoDismiss is true', () => {
        const closeMock = jest.fn();

        mountWithTheme(
            <Toast autoDismiss show severity="success" buttonTitle="Bar?" title="Foo" onClose={closeMock} />,
        );

        jest.advanceTimersByTime(5999);
        expect(closeMock).not.toHaveBeenCalled();
        jest.advanceTimersByTime(1);
        expect(closeMock).toHaveBeenCalled();
    });

    it('should not break when no close is provided', () => {
        const component = mountWithTheme(<Toast show severity={'info'} title="Foo" />);
        const closeButton = component.find(IconButton);

        const fn = (): void => {
            closeButton.simulate('click');
        };

        expect(component.find(IconButton).length).toBe(1);
        expect(fn).not.toThrow();
    });

    it('should not break when no action is provided', () => {
        const component = mountWithTheme(
            <Toast
                show
                severity={'warning'}
                buttonSeverity={'destructive'}
                buttonTitle="Bar"
                secondaryButtonTitle="Baz"
                onClose={undefined}
                title="Foo"
            />,
        );

        const closeButton = component.find(IconButton);

        const fn = (): void => {
            closeButton.simulate('click');
        };

        expect(fn).not.toThrow();
    });

    it('should be possible to trigger the button', () => {
        const clickMock = jest.fn();
        const clickMockSecondary = jest.fn();

        const component = mountWithTheme(
            <Toast
                show
                severity="warning"
                title="Foo"
                buttonTitle="Bar"
                secondaryButtonTitle="Baz"
                onClose={undefined}
                onClick={clickMock}
                onClickSecondary={clickMockSecondary}
            />,
        );

        const buttons = component.find(Button);

        buttons.forEach(button => {
            button.simulate('click');
        });

        expect(clickMock).toHaveBeenCalled();
        expect(clickMockSecondary).toHaveBeenCalled();
    });

    it('should not have a closebutton when persistent is true', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(
            <Toast show persistent severity="success" buttonTitle="Bar" title="Foo" onClose={clickMock} />,
        );

        const closeButton = component.find(IconButton);

        expect(closeButton).toHaveLength(0);
    });

    it('should render two buttons if a second button title is provided', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(
            <Toast
                show
                persistent
                severity="success"
                buttonTitle="Bar"
                secondaryButtonTitle="Baz"
                title="Foo"
                onClose={clickMock}
            />,
        );

        const buttons = component.find(Button);

        expect(buttons).toHaveLength(2);
    });

    it('should be testable with a data-testid', () => {
        const component = mountWithTheme(<Toast data-testid="foo" show severity="success" title="Foo" />);

        expect(component.find('[data-testid="foo"]').hostNodes().length).toBe(1);
    });
});
