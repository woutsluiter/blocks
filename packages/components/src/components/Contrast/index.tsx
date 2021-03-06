import deepmerge from 'deepmerge';
import React, { FunctionComponent } from 'react';
import ThemeType from '../../types/ThemeType';
import { ThemeProvider } from '../../utility/styled';
import StyledContrast from './style';

type PropsType = {
    enable?: boolean;
    className?: string;
};

const contrastTheme = (theme: ThemeType): ThemeType => {
    return deepmerge(theme, theme.Contrast.overides as Partial<ThemeType>);
};

const ContrastThemeProvider: FunctionComponent<{ enable?: boolean }> = ({ enable, children }): JSX.Element => (
    <ThemeProvider theme={!enable ? (theme): ThemeType => theme : contrastTheme}>
        <>{children}</>
    </ThemeProvider>
);

const Contrast: FunctionComponent<PropsType> = (props): JSX.Element => (
    <StyledContrast className={props.className}>
        <ContrastThemeProvider enable={props.enable !== false}>{props.children}</ContrastThemeProvider>
    </StyledContrast>
);

export default Contrast;
export { ContrastThemeProvider, PropsType };
