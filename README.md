# Blocks

Blocks is an open source component library built by [Wout](https://www.woutsluiter.com). It uses React, TypeScript (optional) and [styled-components](https://www.styled-components.com/).

Some nice features:
- Flexible theming
- Fully tested
- Fully typed
- Testable via `data-testid` attributes

## Installation

Install Blocks using: `npm install @woutsluiter/blocks`.

## Usage
#### Basic usage
All components are named exports. For instance:

```typescript
import { Button } from '@woutsluiter/blocks';

<Button title="Click me!" variant="primary" />
```

#### ThemeProvider

Blocks uses styled-components to make it flexible in theming. This requires your application to have a ThemeProvider somewhere up in the component tree. Blocks comes with our own `MosTheme` or you can create your own custom theme.

**MosTheme**
```typescript
import { MosTheme } from '@woutsluiter/blocks';
import YourApp from './App';

<MosTheme>
    <YourApp />
</MosTheme>
```
 
**Custom Theme**
```typescript
import { CustomTheme, ThemeType } from '@woutsluiter/blocks';
import YourApp from './App';

const themeObject: ThemeType = {
    // See ThemeType for all theme options
    // Example: https://github.com/WoutSluiter/blocks/blob/master/src/themes/MosTheme/MosTheme.theme.ts
}

<CustomTheme theme={themeObject}>
    <YourApp />
</CustomTheme>
```

## Contributing

Feel free to help us develop Blocks! If you have a new feature suggestion please create an issue with the label `RFC` so we can discuss the desired solution. For more info please read our 
[guidelines](https://github.com/WoutSluiter/blocks/blob/master/CONTRIBUTING.md).

## Development
- Clone the repo
- Run `npm install`
- Run either `npm run dev:components` to start the dev-server running on `localhost:9001` or run `npm run build` to build a dist 
to be used with `npm link`

## License

[GPL-3.0](https://opensource.org/licenses/GPL-3.0/)
