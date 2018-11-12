# Web Drum Sequencer

A browser-based drum machine and sequencer built with the Web Audio API, React, and Redux.

## Demo

https://wds-1.com

## Features
 * Swap drum samples
 * Pattern selector to save up to 8 patterns per drum kit
 * BPM and swing control
 * Sample hit buttons
 * Gain and pan
 * Reverb
 * Mute and solo
 * Pitch shift
 * Preset system for saving and loading drum kits
 * Works offline with service worker and caching
 * Installable as PWA
 * Drag to reorder channels

## Circle CI status

[![CircleCI](https://circleci.com/gh/stufreen/web-drum-sequencer.svg?style=svg)](https://circleci.com/gh/stufreen/web-drum-sequencer)

## Installation

To run a local development server:
```
npm install
npm run start
```

To build a production version: `npm run build`

## Tests

```
npm run test
```

## Thank You
 * [React-Select](https://github.com/JedWatson/react-select)
 * [Webaudio-Controls](https://github.com/g200kg/webaudio-controls)
 * Chris Wilson's article [here](https://www.html5rocks.com/en/tutorials/audio/scheduling/)
 * [Voxengo impluse response](https://www.voxengo.com/impulses/)
