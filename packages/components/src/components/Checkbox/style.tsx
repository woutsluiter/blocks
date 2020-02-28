import styled from '../../utility/styled';
import ThemeTools from '../../themes/CustomTheme/ThemeTools';
import chroma from 'chroma-js';

type StyledCheckboxSkinType = {
    checkedState: boolean | 'indeterminate';
    elementFocus: boolean;
    disabled?: boolean;
    error?: boolean;
};

type CheckboxThemeType = {
    idle: {
        backgroundColor: string;
        borderColor: string;
        borderRadius: string;
    };
    focus: {
        boxShadow: string;
    };
    checked: {
        checkmarkColor: string;
        backgroundColor: string;
        borderColor: string;
    };
    idleDisabled: {
        background: string;
    };
    checkedDisabled: {
        background: string;
    };
    error: {
        borderColor: string;
    };
};

const StyledCheckbox = styled.input`
    opacity: 0;
    height: 0;
    width: 0;
`;

const StyledCheckboxSkin = styled.div<StyledCheckboxSkinType>`
    width: 16px;
    height: 16px;
    border-radius: ${({ theme }): string => theme.Checkbox.idle.borderRadius};
    position: relative;
    outline: none;
    transition: box-shadow 100ms, border 100ms, background-color 100ms;

    svg {
        fill: ${({ theme }): string => theme.Checkbox.checked.checkmarkColor};
    }

    ${({ theme, elementFocus }): string => (elementFocus ? `box-shadow: ${theme.Checkbox.focus.boxShadow};` : '')}

    ${({ theme, disabled, checkedState }): string => {
        if (checkedState === 'indeterminate' || checkedState) {
            if (disabled && checkedState) {
                return `background: ${theme.Checkbox.checkedDisabled.background};`;
            }

            return `background-color: ${theme.Checkbox.checked.backgroundColor};`;
        }

        if (disabled) {
            return `background: ${theme.Checkbox.idleDisabled.background};`;
        }

        return `
                background-color: ${theme.Checkbox.idle.backgroundColor};
        `;
    }}

    border: 1px solid ${({ theme, checkedState, error }): string =>
        error
            ? theme.Checkbox.error.borderColor
            : checkedState
            ? theme.Checkbox.checked.borderColor
            : theme.Checkbox.idle.borderColor};
`;

const composeCheckboxTheme = (themeTools: ThemeTools): CheckboxThemeType => {
    const { colors, forms } = themeTools.themeSettings;
    const chromaActiveColor = chroma(forms.activeColor);

    return {
        idle: {
            borderColor: forms.borderColor,
            backgroundColor: forms.background,
            borderRadius: themeTools.calculateRoundness(5),
        },
        focus: {
            boxShadow: `0 0 0 4px ${chromaActiveColor.alpha(0.4)}`,
        },
        checked: {
            checkmarkColor: themeTools.calculateContrastColor(
                forms.activeColor,
                colors.grey.darker1,
                colors.silver.lighter1,
            ),
            borderColor: forms.activeBorderColor,
            backgroundColor: forms.activeColor,
        },
        idleDisabled: {
            background: `repeating-linear-gradient( -45deg,${forms.background},${forms.background} 5px,${
                forms.background
            } 5px,${colors.silver.darker1} 10px )`,
        },
        checkedDisabled: {
            background: `repeating-linear-gradient( -45deg,${chromaActiveColor.alpha(0.6)},${chromaActiveColor.alpha(
                0.6,
            )} 5px,${chromaActiveColor.alpha(0.5)} 5px,${chromaActiveColor.alpha(0.5)} 10px )`,
        },
        error: {
            borderColor: colors.severity.error,
        },
    };
};

export { StyledCheckbox, StyledCheckboxSkin, CheckboxThemeType, composeCheckboxTheme };
