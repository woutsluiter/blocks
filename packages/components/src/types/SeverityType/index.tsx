import React from 'react';
import { InfoCircleIcon, DangerCircleIcon, CheckmarkCircleIcon } from '@woutsluiter/blocks-assets';

type SeverityType = 'error' | 'warning' | 'success' | 'info';

const SeverityIcons = {
    error: <DangerCircleIcon />,
    warning: <DangerCircleIcon />,
    info: <InfoCircleIcon />,
    success: <CheckmarkCircleIcon />,
};

export default SeverityType;
export { SeverityIcons };
