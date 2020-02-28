import { boolean, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { FC, useState } from 'react';
import Popover, { PlacementType } from '.';
import Box from '../Box';
import Button from '../Button';
import Text from '../Text';

type PropsType = {
    placement: PlacementType;
    fixed: boolean;
    overflow: boolean;
    offset: number;
    distance: number;
};

const DemoContent: FC = () => (
    <Box margin={[24]}>
        <Text>
            Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis
            interdum. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
            mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </Text>
    </Box>
);

const Demo: FC<PropsType> = props => {
    const [isOpen, setOpen] = useState(false);

    const toggle = (): void => setOpen(!isOpen);

    return (
        <Box height="90vh" justifyContent="center" alignItems="center">
            <Box margin={[48]}>
                <Popover
                    show={isOpen}
                    onClickOutside={toggle}
                    placement={props.placement}
                    preventOverflow={props.overflow}
                    fixed={props.fixed}
                    offset={props.offset}
                    distance={props.distance}
                    renderContent={() => <DemoContent />}
                >
                    <Button variant="primary" title="Toggle" onClick={toggle} />
                </Popover>
            </Box>
        </Box>
    );
};

storiesOf('Popover', module)
    .add('External state', () => (
        <Demo
            placement={
                select(
                    'placement',
                    [
                        'auto-start',
                        'auto',
                        'auto-end',
                        'top-start',
                        'top',
                        'top-end',
                        'right-start',
                        'right',
                        'right-end',
                        'bottom-end',
                        'bottom',
                        'bottom-start',
                        'left-end',
                        'left',
                        'left-start',
                    ],
                    'bottom',
                ) as PlacementType
            }
            fixed={boolean('fixed', false)}
            overflow={boolean('preventOverflow', false)}
            distance={number('distance', 16)}
            offset={number('offset', 0)}
        />
    ))
    .add('Internal state on hover', () => (
        <Box height="90vh" justifyContent="center" alignItems="center">
            <Popover
                triggerOn={'hover'}
                renderContent={() => <DemoContent />}
                placement={
                    select(
                        'placement',
                        [
                            'auto-start',
                            'auto',
                            'auto-end',
                            'top-start',
                            'top',
                            'top-end',
                            'right-start',
                            'right',
                            'right-end',
                            'bottom-end',
                            'bottom',
                            'bottom-start',
                            'left-end',
                            'left',
                            'left-start',
                        ],
                        'bottom',
                    ) as PlacementType
                }
                fixed={boolean('fixed', false)}
                preventOverflow={boolean('preventOverflow', false)}
                offset={number('offset', 0)}
                distance={number('distance', 16)}
            >
                <Button variant="primary" title="Hover over me" />
            </Popover>
        </Box>
    ))
    .add('Internal state on click', () => (
        <Box height="90vh" justifyContent="center" alignItems="center">
            <Box margin={[48]}>
                <Popover
                    triggerOn={'click'}
                    renderContent={() => <DemoContent />}
                    placement={
                        select(
                            'placement',
                            [
                                'auto-start',
                                'auto',
                                'auto-end',
                                'top-start',
                                'top',
                                'top-end',
                                'right-start',
                                'right',
                                'right-end',
                                'bottom-end',
                                'bottom',
                                'bottom-start',
                                'left-end',
                                'left',
                                'left-start',
                            ],
                            'bottom',
                        ) as PlacementType
                    }
                    fixed={boolean('fixed', false)}
                    preventOverflow={boolean('preventOverflow', false)}
                    offset={number('offset', 0)}
                    distance={number('distance', 16)}
                >
                    <Button variant="primary" title="Toggle" />
                </Popover>
            </Box>
        </Box>
    ));
