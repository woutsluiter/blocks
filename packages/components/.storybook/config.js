import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming';
import themeDecorator from '../src/__fixtures__/themeDecorator';
import { bodyFont } from '../src/themes/MosTheme/MosTheme.theme';
import { colors } from '../src/themes/MosTheme/colors';

const checkerSize = 24;

addParameters({
    options: {
        url: '#',
        name: 'Blocks',
        panelPosition: 'right',
        theme: create({
            base: 'dark',
            colorPrimary: colors.green500,
            colorSecondary: colors.green500,
            appBg: colors.grey800,
            appContentBg: colors.grey800,
            appBorderColor: colors.grey800,
            appBorderRadius: 4,
            fontBase: bodyFont,
            fontCode: 'monospace',
            textColor: colors.grey300,
            textInverseColor: colors.grey800,
            barTextColor: colors.grey300,
            barSelectedColor: colors.green500,
            barBg: colors.grey900,
            inputBg: colors.white,
            inputBorder: colors.grey300,
            inputTextColor: colors.grey800,
            inputBorderRadius: 3,
            brandTitle: 'Blocks',
            brandUrl: 'https://woutsluiter.github.io/blocks',
            brandImage: '/logo_en_white.svg',
        }),
    },
    backgrounds: [
        { name: 'white', value: '#fff', default: true },
        {
            name: 'transparent',
            // no backticks because IE
            value:
                '#fff url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="' +
                checkerSize +
                '" height="' +
                checkerSize +
                '" viewBox="0 0 ' +
                checkerSize +
                ' ' +
                checkerSize +
                '"%3E%3Cg fill="%23eaebed" fill-opacity="0.4"%3E%3Cpath fill-rule="evenodd" d="M0 0h' +
                checkerSize / 2 +
                'v' +
                checkerSize / 2 +
                'H0V0zm' +
                checkerSize / 2 +
                ' ' +
                checkerSize / 2 +
                'h' +
                checkerSize / 2 +
                'v' +
                checkerSize / 2 +
                'H' +
                checkerSize / 2 +
                'V' +
                checkerSize / 2 +
                'z"/%3E%3C/g%3E%3C/svg%3E\')',
        },
    ],
});

addDecorator(themeDecorator);
addDecorator(withKnobs);

const req = require.context('../src', true, /story.tsx$/);

function loadStories() {
    req.keys().forEach(function(filename) {
        return req(filename);
    });
}

configure(loadStories, module);
