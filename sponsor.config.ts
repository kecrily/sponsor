import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  github: { login: 'kecrily' },
  opencollective: { slug: 'kecrily', type: 'person' },
  width: 800,
  formats: ['png', 'svg'],
  tiers: [{
    title: 'Who Supports Percy',
    preset: presets.base,
    monthlyDollars: 0
  }]
})
