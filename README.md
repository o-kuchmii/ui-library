# UI Component Library

A React TypeScript UI component library built with Tailwind CSS, bundled with tsup, and documented with Storybook.

## Features

- 🎨 **Tailwind CSS** - Utility-first CSS framework with custom preset
- 📦 **tsup** - Fast TypeScript bundler with ESM/CJS/DTS outputs
- 📚 **Storybook** - Interactive component documentation
- 🎯 **TypeScript** - Full type safety and IntelliSense
- 🔧 **Monorepo** - pnpm workspaces for organized development
- 🚀 **CI/CD** - GitHub Actions for automated testing and publishing

## Package Structure

```
root/
├── packages/ui/          # Main UI component library
│   ├── src/
│   ├── dist/
│   └── tailwind-preset.js
├── apps/storybook/       # Storybook documentation
│   ├── .storybook/
│   └── stories/
└── .github/workflows/    # CI/CD configuration
```

## Development

### Install dependencies

```bash
pnpm install
```

### Build the UI package

```bash
pnpm run build
```

### Start Storybook

```bash
pnpm run storybook
```

### Run linting

```bash
pnpm run lint
```

### Type checking

```bash
pnpm run type-check
```

## Usage in Your Project

### Installation

```bash
npm install @ensofinance/ui
```

### Configure Tailwind CSS

```javascript
// tailwind.config.js
const preset = require('@ensofinance/ui/tailwind-preset')

module.exports = {
  presets: [preset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@ensofinance/ui/dist/**/*.js',
  ],
}
```

### Use Components

```tsx
import { Button } from '@ensofinance/ui/button'

function App() {
  return (
    <Button variant="primary" size="lg">
      Hello World
    </Button>
  )
}
```

## Available Components

- **Button** - Versatile button component with multiple variants and sizes

## Development Scripts

| Command                    | Description                        |
| -------------------------- | ---------------------------------- |
| `pnpm run build`           | Build the UI package               |
| `pnpm run dev`             | Start Storybook development server |
| `pnpm run storybook`       | Start Storybook                    |
| `pnpm run storybook:build` | Build Storybook for production     |
| `pnpm run lint`            | Run ESLint                         |
| `pnpm run type-check`      | Run TypeScript type checking       |

## Publishing

The package is automatically published to npm when changes are pushed to the main branch via GitHub Actions.

## License

MIT
