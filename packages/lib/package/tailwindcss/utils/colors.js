/* eslint-disable unicorn/prefer-module */
const COLORS_CONFIG = require('../variables/colors')

exports.colors = () => {
  const baseColors = COLORS_CONFIG['base-colors']
  const variations = COLORS_CONFIG.variations
  const variatingColors = COLORS_CONFIG['variating-colors']

  const colors = {
    ...baseColors,
  }

  for (const [color, variate] of Object.entries(variatingColors)) {
    const variationsForColor = Array.isArray(variate) ? variate : variations

    colors[color] = variationsForColor.reduce((colorVariations, variation) => {
      colorVariations[variation] =
        variation === 'DEFAULT'
          ? `var(--maz-color-${color})`
          : `var(--maz-color-${color}-${variation})`
      return colorVariations
    }, {})
  }

  return colors
}
