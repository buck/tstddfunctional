/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testEnvironment: 'node',
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  "watchPlugins": [
    // '/old/projects/tddts/watchAudioResultsPlugin.ts',
    // 'jest-watch-random'
  ],
  "reporters": [
    "default", // using default reporter
    "jest-audio-reporter",
    // Adjust volume 0 (silent) - 1 (normal)
    // ["jest-audio-reporter", { volume: 1, onStartVolume: 1, onCompleteVolume: 1 }]
    // disable it
    // ["jest-audio-reporter", { disable: true }]
    // to enable debug mode to see why no tune is playing
    // ["jest-audio-reporter", { debug: true }]
  ]
};
