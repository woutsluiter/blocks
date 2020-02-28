import React, { FC } from 'react';
import { Box } from '@woutsluiter/blocks';

const Sidebar: FC = props => (
    <Box padding={[36, 0]} direction="column" width="200px">
        {props.children}
    </Box>
);

export default Sidebar;
