const preset = require('@ensofinance/ui/tailwind-preset')

module.exports = {
  presets: [preset],
  content: [
    './stories/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
}
