import React, { FunctionComponent } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import StyledCell from './style';

type PropsType = {
    align: 'start' | 'center' | 'end';
    width?: string;
    dragHandler?: boolean;
    provided?: DraggableProvided['dragHandleProps'];
    onFocus?(): void;
    onBlur?(): void;
};

const Cell: FunctionComponent<PropsType> = ({ align, provided, width, onFocus, onBlur, children }): JSX.Element => {
    const extraProps = provided !== undefined ? provided : {};

    return (
        <StyledCell
            cellAlign={align}
            {...extraProps}
            elementWidth={width}
            onFocus={onFocus}
            onBlur={onBlur}
            role="cell"
        >
            {children}
        </StyledCell>
    );
};

export default Cell;
export { PropsType };
