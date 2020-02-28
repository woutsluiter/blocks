import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';

type StyledToggleType = {
    checked: boolean;
    disabled: boolean;
    error: boolean;
};

type StyledToggleSkinType = {
    checked: boolean;
    error: boolean;
    disabled?: boolean;
    elementFocus: boolean;
};

type ToggleThemeType = {
    general: {
        background: string;
    };
    idle: {
        background: string;
        border: string;
    };
    focus: {
        boxShadow: string;
    };
    checked: {
        background: string;
        border: string;
    };
    idleDisabled: {
        background: string;
    };
    checkedDisabled: {
        background: string;
    };
    error: {
        border: string;
    };
};

const StyledToggle = styled.input<StyledToggleType>`
    opacity: 0;
    height: 0;
    width: 0;
`;

const StyledToggleSkin = styled.div<StyledToggleSkinType>`
    width: 48px;
    height: 18px;
    border-radius: 10px;
    position: relative;
    transition: all 100ms;
    box-sizing: border-box;
    cursor: pointer;
    ${({ theme, elementFocus }): string => (elementFocus ? `box-shadow: ${theme.Toggle.focus.boxShadow};` : '')}

    background: ${({ theme, checked, disabled }): string => {
        if (!disabled && checked) {
            return theme.Toggle.checked.background;
        }
        if (disabled && checked) {
            return theme.Toggle.checkedDisabled.background;
        }
        if (disabled && !checked) {
            return theme.Toggle.idleDisabled.background;
        }

        return theme.Toggle.idle.background;
    }};

    border: ${({ theme, error, checked }): string => {
        if (error) {
            return theme.Toggle.error.border;
        }
        if (checked) {
            return theme.Toggle.checked.border;
        }

        return theme.Toggle.idle.border;
    }};

    &::after {
        transition: background 100ms, transform 100ms, border 100ms;
        content: "";
        width: 24px;
        height: 24px;
        box-sizing: border-box;
        top: 50%;
        margin-top: -12px;
        left: 50%;
        margin-left: -12px;
        position: absolute;
        border-radius: 100%;
        background-color: ${({ theme }): string => theme.Toggle.general.background};
        transform: ${({ checked }): string => (checked ? 'translateX(13px)' : 'translateX(-13px)')};
        border: ${({ theme, error }): string => (error ? theme.Toggle.error.border : theme.Toggle.idle.border)};
    }
    `;

const composeToggleTheme = (themeTools: ThemeTools): ToggleThemeType => {
    const { colors, forms } = themeTools.themeSettings;

    return {
        general: {
            background: forms.background,
        },
        idle: {
            border: `1px solid ${forms.borderColor}`,
            background: forms.background,
        },
        focus: {
            boxShadow: `0 0 0 4px ${chroma(forms.focusBorderColor).alpha(0.4)}`,
        },
        checked: {
            border: `1px solid ${forms.activeBorderColor}`,
            background: forms.activeColor,
        },
        idleDisabled: {
            background: `repeating-linear-gradient( -45deg,${colors.silver.base},${colors.silver.base} 5px,${
                colors.silver.darker1
            } 5px,${colors.silver.darker1} 10px )`,
        },
        checkedDisabled: {
            background: `repeating-linear-gradient( -45deg,${chroma(colors.primary.darker2).alpha(0.6)},${chroma(
                colors.primary.darker2,
            ).alpha(0.6)} 5px,${chroma(colors.primary.base).alpha(0.5)} 5px,${chroma(colors.primary.base).alpha(
                0.5,
            )} 10px )`,
        },
        error: {
            border: `1px solid ${colors.severity.error}`,
        },
    };
};

export default StyledToggle;
export { ToggleThemeType, StyledToggleSkin, composeToggleTheme };
