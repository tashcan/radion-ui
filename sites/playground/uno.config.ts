import { myPreset } from './my-preset'
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetWind from '@unocss/preset-wind';

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */}),
    presetUno(),
    presetWind(),
    myPreset // your own preset
  ],
});
