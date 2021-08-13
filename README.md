# rn-progress

A progress indicator component for React Native (both Android and iOS)

## Installation

Install component by running following command

```sh
npm i rn-progress
or
yarn add rn-progress
```

This componnet is based o React Native basic components. So, linking is not required.

## Usage

```js
import { ProgressBar } from "rn-progress";

// ...

<ProgressBar width={'80%'} height={'20'} />
```

## Props

Following are props to use this component

| Prop | Type | Description |
| ------ | ------ | ------ |
| width | number \| string | Width of ProgressBar in numbers or percentage |
| height | number \| string | Height of ProgressBar in numbers or percentage |
| strokeWidth | number | Width of outer border or stroke |
| strokeColor | string | Stroke color |
| color | string | Color of Progressbar |
| startValue | number | Starting value of progress |
| maxValue | number | Maximum value of progress |
| currentValue | number | Current value of progress (can be set using states). If current value is less than start value, it will be neglected and start value will be used as current value. |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
**Note**
This package is under development. Contributors are welcome to work on this package.
---