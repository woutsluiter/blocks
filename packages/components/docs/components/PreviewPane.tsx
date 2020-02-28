import React, { FC, useState, ReactNode } from 'react';
import { Box, Contrast, NativeSelect, Heading, colors } from '@woutsluiter/blocks';
import styled from 'styled-components';

export type OptionType = {
    value: string;
    label: string;
};

export type ExamplesType = {
    value: string;
    component: ReactNode;
};

type PropsType = {
    options: Array<OptionType>;
    examples: Array<ExamplesType>;
};

const StyledContrast = styled(Contrast)`
    margin-top: 36px;
    margin-bottom: 36px;
    border-radius: 9px;
`;

const StyledSelectBox = styled(Box)`
    width: 282px;
    margin-left: 36px;
`;

const StyledContentBox = styled(Box)`
    border-radius: 9px;
    background: ${colors.white};
    padding: 36px;
    align-items: center;
`;

const PreviewPane: FC<PropsType> = props => {
    const [selectedExample, setSelectedExample] = useState(props.options[0].value);

    return (
        <StyledContrast>
            <Box padding={[36]} direction="column" width="100%">
                <Box>
                    <Box padding={[0, 0, 36, 0]} alignItems="center">
                        <Heading hierarchy={5} as="h5">
                            Examples
                        </Heading>
                        <StyledSelectBox>
                            <NativeSelect
                                value={selectedExample}
                                onChange={setSelectedExample}
                                options={props.options}
                            />
                        </StyledSelectBox>
                    </Box>
                </Box>

                <StyledContentBox>
                    {props.examples.find(example => example.value === selectedExample)?.component}
                </StyledContentBox>
            </Box>
        </StyledContrast>
    );
};

export default PreviewPane;
