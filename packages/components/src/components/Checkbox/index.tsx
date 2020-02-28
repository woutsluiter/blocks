import React, { Component, MouseEvent } from 'react';
import Icon from '../Icon';
import { StyledCheckbox, StyledCheckboxSkin } from './style';
import Box from '../Box';
import { CheckmarkSmallIcon, MinusIcon } from '@woutsluiter/blocks-assets';
import Text from '../Text';

type StateType = {
    focus: boolean;
};

type PropsType = {
    checked: boolean | 'indeterminate';
    disabled?: boolean;
    error?: boolean;
    value: string;
    name: string;
    label?: string;
    id?: string;
    'data-testid'?: string;
    onChange(change: { checked: boolean | 'indeterminate'; event: MouseEvent<HTMLDivElement> }): void;
};

class Checkbox extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);
        this.state = {
            focus: false,
        };
    }

    private changeHandler = (event: MouseEvent<HTMLDivElement>): void => {
        if (!this.props.disabled) {
            this.props.onChange({
                checked: !(this.props.checked === true),
                event,
            });
        }
    };

    public toggleFocus = (): void => {
        this.setState({ focus: !this.state.focus });
    };

    public render(): JSX.Element {
        const htmlChecked = this.props.checked === true;

        return (
            <Box onClick={this.changeHandler} data-testid={this.props['data-testid']}>
                <Box shrink={0}>
                    <StyledCheckboxSkin
                        checkedState={this.props.checked}
                        elementFocus={this.state.focus}
                        disabled={this.props.disabled}
                        error={this.props.error}
                    >
                        <Box justifyContent="center" alignItems="center" height="100%">
                            {this.props.checked === true && (
                                <Icon size="small" color="#fff" icon={<CheckmarkSmallIcon />} />
                            )}
                            {this.props.checked === 'indeterminate' && (
                                <Icon size="small" color="#fff" icon={<MinusIcon />} />
                            )}
                        </Box>
                        <StyledCheckbox
                            onFocus={this.toggleFocus}
                            onBlur={this.toggleFocus}
                            readOnly
                            name={this.props.name}
                            value={this.props.value}
                            id={this.props.id}
                            checked={htmlChecked}
                            type="checkbox"
                        />
                    </StyledCheckboxSkin>
                </Box>
                {this.props.label !== undefined && (
                    <Box margin={[-3, 0, 0, 12]}>
                        <Text>
                            <label htmlFor={this.props.name}>{this.props.label}</label>
                        </Text>
                    </Box>
                )}
            </Box>
        );
    }
}

export default Checkbox;
export { PropsType, StateType };
