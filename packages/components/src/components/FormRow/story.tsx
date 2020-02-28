import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Checkbox from '../Checkbox';
import FormRow from '.';
import RadioButton from '../RadioButton';
import Text from '../Text';
import Box from '../Box';
import TextField from '../TextField';
import Toggle from '../Toggle';
import trbl from '../../utility/trbl';
import Separated from '../Separated';
import { text } from '@storybook/addon-knobs';
import { Skeleton } from '../..';

type PropsType = {
    descriptions: boolean;
};

type StateType = {
    selected: string;
    initials: string;
    firstname: string;
    surname: string;
    city: string;
    country: string;
    toggled: boolean;
    cheese: boolean;
    checked: boolean;
    bacon: boolean;
};

class DemoComponent extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            selected: '1',
            initials: '',
            firstname: '',
            surname: '',
            city: '',
            country: '',
            toggled: false,
            bacon: false,
            cheese: true,
            checked: false,
        };
    }

    public render(): JSX.Element {
        if (this.props.descriptions) {
            return (
                <form>
                    <FormRow
                        label={
                            <label>
                                <Box>
                                    <Text>What is your name?</Text>
                                </Box>
                                <Text variant="descriptive">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi
                                    similique sint quae exercitationem molestiae aspernatur cum. Necessitatibus,
                                    corrupti veritatis. Placeat, tempora! Vitae rem, nobis rerum natus odit debitis.
                                </Text>
                            </label>
                        }
                        field={
                            <Box wrap width="100%">
                                <Box>
                                    <Box margin={trbl(0, 9, 18, 0)} justifyContent="stretch" grow={1} width="40%">
                                        <TextField
                                            prefix="Initials"
                                            name="Initials"
                                            value={this.state.initials}
                                            onChange={(initials: string): void => this.setState({ initials })}
                                        />
                                    </Box>
                                    <Box margin={trbl(0, 9, 18, 0)} justifyContent="stretch" grow={1} width="60%">
                                        <TextField
                                            prefix="First name"
                                            name="First name"
                                            value={this.state.firstname}
                                            onChange={(firstname: string): void => this.setState({ firstname })}
                                        />
                                    </Box>
                                </Box>
                                <Box margin={trbl(0, 9, 18, 0)} justifyContent="stretch" grow={1}>
                                    <TextField
                                        prefix="Surname"
                                        name="Surname"
                                        value={this.state.surname}
                                        onChange={(surname: string): void => this.setState({ surname })}
                                    />
                                </Box>
                            </Box>
                        }
                    />
                    <FormRow
                        label={
                            <label>
                                <Box>
                                    <Text>Where do you live?</Text>
                                </Box>
                                <Text variant="descriptive">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi
                                    similique sint quae exercitationem molestiae aspernatur cum. Necessitatibus,
                                    corrupti veritatis. Placeat, tempora! Vitae rem, nobis rerum natus odit debitis.
                                </Text>
                            </label>
                        }
                        field={
                            <Box wrap width="100%">
                                <Box margin={trbl(0, 9, 18, 0)} justifyContent="stretch" grow={1}>
                                    <TextField
                                        name="Country"
                                        prefix="Country"
                                        value={this.state.country}
                                        onChange={(country: string): void => this.setState({ country })}
                                    />
                                </Box>
                                <Box margin={trbl(0, 9, 18, 0)} justifyContent="stretch" grow={1}>
                                    <TextField
                                        name="City"
                                        prefix="City"
                                        value={this.state.city}
                                        onChange={(city: string): void => this.setState({ city })}
                                    />
                                </Box>
                            </Box>
                        }
                    />
                    <FormRow
                        label={
                            <label>
                                <Box>
                                    <Text>Can a boolean only be either true or false?</Text>
                                </Box>
                                <Text variant="descriptive">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi
                                    similique sint quae exercitationem molestiae aspernatur cum. Necessitatibus,
                                    corrupti veritatis. Placeat, tempora! Vitae rem, nobis rerum natus odit debitis.
                                </Text>
                            </label>
                        }
                        field={
                            <Separated before after>
                                <RadioButton
                                    name="bool"
                                    label="True"
                                    value="1"
                                    checked={this.state.selected === '1'}
                                    onChange={({ value }): void => {
                                        this.setState({ selected: value });
                                    }}
                                />
                                <RadioButton
                                    name="bool"
                                    label="False"
                                    value="2"
                                    checked={this.state.selected === '2'}
                                    onChange={({ value }): void => {
                                        this.setState({ selected: value });
                                    }}
                                />
                                <RadioButton
                                    name="bool"
                                    label="Sometimes"
                                    value="3"
                                    checked={this.state.selected === '3'}
                                    onChange={({ value }): void => {
                                        this.setState({ selected: value });
                                    }}
                                />
                            </Separated>
                        }
                    />
                    <FormRow
                        label={
                            <>
                                <Text>Options</Text>
                                <Text variant="descriptive">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non quasi
                                    similique sint quae exercitationem molestiae aspernatur cum. Necessitatibus,
                                    corrupti veritatis. Placeat, tempora! Vitae rem, nobis rerum natus odit debitis.
                                </Text>
                            </>
                        }
                        field={
                            <Separated before after>
                                <Checkbox
                                    name="cheese"
                                    value="cheese"
                                    label="Extra cheese"
                                    checked={this.state.cheese}
                                    onChange={({ checked }): void => this.setState({ cheese: checked as boolean })}
                                />
                                <Checkbox
                                    name="bacon"
                                    value="bacon"
                                    label="Extra bacon"
                                    checked={this.state.bacon}
                                    onChange={({ checked }): void => this.setState({ bacon: checked as boolean })}
                                />
                            </Separated>
                        }
                    />
                </form>
            );
        } else {
            return (
                <form>
                    <FormRow
                        label={
                            <label>
                                <Text>What is your name?</Text>
                            </label>
                        }
                        field={
                            <Box wrap width="100%">
                                <Box margin={trbl(0, 9, 0, 0)} width="100%" justifyContent="stretch" grow={1}>
                                    <TextField
                                        prefix="Name"
                                        name="Name"
                                        value={this.state.firstname}
                                        onChange={(firstname: string): void => this.setState({ firstname })}
                                    />
                                </Box>
                            </Box>
                        }
                    />
                    <FormRow
                        label={
                            <label>
                                <Text>Where do you live?</Text>
                            </label>
                        }
                        field={
                            <Box wrap width="100%">
                                <Box margin={trbl(0, 9, 0, 0)} width="100%" justifyContent="stretch" grow={1}>
                                    <TextField
                                        name="Country"
                                        prefix="Country"
                                        value={this.state.country}
                                        onChange={(country: string): void => this.setState({ country })}
                                    />
                                </Box>
                            </Box>
                        }
                    />
                    <FormRow
                        label={
                            <label>
                                <Text>Can a boolean only be true or false?</Text>
                            </label>
                        }
                        field={
                            <Separated before after>
                                <RadioButton
                                    name="bool"
                                    label="True"
                                    value="1"
                                    checked={this.state.selected === '1'}
                                    onChange={({ value }): void => {
                                        this.setState({ selected: value });
                                    }}
                                />
                                <RadioButton
                                    name="bool"
                                    label="False"
                                    value="2"
                                    checked={this.state.selected === '2'}
                                    onChange={({ value }): void => {
                                        this.setState({ selected: value });
                                    }}
                                />
                                <RadioButton
                                    name="bool"
                                    label="Sometimes"
                                    value="3"
                                    checked={this.state.selected === '3'}
                                    onChange={({ value }): void => {
                                        this.setState({ selected: value });
                                    }}
                                />
                            </Separated>
                        }
                    />
                    <FormRow
                        label={
                            <label>
                                <Text>Do you like toggles?</Text>
                            </label>
                        }
                        field={
                            <Toggle
                                name="toggle"
                                value="toggle"
                                id="toggle"
                                label={'Toggle to indicate your preference!'}
                                checked={this.state.toggled}
                                onChange={({ checked }): void => this.setState({ toggled: checked })}
                            />
                        }
                    />
                    <FormRow
                        label={
                            <label>
                                <Text>Do you like checkboxes</Text>
                            </label>
                        }
                        field={
                            <Separated before after>
                                <Checkbox
                                    onChange={(): void =>
                                        this.setState({
                                            checked: !this.state.checked,
                                        })
                                    }
                                    value="bar"
                                    checked={this.state.checked}
                                    name="foo"
                                />
                            </Separated>
                        }
                    />
                </form>
            );
        }
    }
}

storiesOf('FormRow', module)
    .add('Default', () => <DemoComponent descriptions={true} />)
    .add('No Descriptions', () => <DemoComponent descriptions={false} />)
    .add('With badge', () => (
        <FormRow
            label={<Text>{text('label', 'Label text')}</Text>}
            badge={
                <Text size="small" variant="success">
                    {text('badge', 'PRO')}
                </Text>
            }
            field={
                <Box direction="row" alignItems="center">
                    <Toggle checked={true} name="storyToggle" value={'true'} onChange={(): string => 'void'} />
                </Box>
            }
        />
    ))
    .add('With Skeletons', () => (
        <FormRow
            label={<Skeleton.Text lines={1} baseWidth={180} />}
            // 38px is the height of an TextField field
            field={<Skeleton.Rect width="100%" height="38px" />}
        />
    ));
