<div align="center">
<h1>Currency Converter</h1>

![supported node versions](https://img.shields.io/badge/node%20v-16.x%20%7C%2017.x%20%7C%2018.x-blue)
![license: MIT](https://img.shields.io/npm/l/react.svg)

<p>A minimal currency converter library with a functional UI.</p>
</div>

**N:B** : This package utilizes [TailwindCSS](https://tailwindcss.com/) for styling, please ensure tailwind is already installed in your project before installing this package.

## Getting started

### Installation

This package can be installed using `npm`

```bash
npm install @clefayomide/ui-currency-converter
```

or, `yarn`

```bash
yarn add @clefayomide/ui-currency-converter
```

### Usage

Edit content array in `tailwind.config.js` to target path

```javascript
content: [
    './node_modules/@clefayomide/ui-currency-converter/**/*.{js,jsx,ts,tsx}'
    ...other paths according to tailwind configuration
  ]
```

Import `Converter` and `AppState`.

```javascript
import { Converter, AppState } from "@clefayomide/ui-currency-converter";
```

Wrapping things up

```javascript
<AppState>
  <Converter />
</AppState>
```

## Disclaimer

This package utilized [Fawaz Ahmed](https://github.com/fawazahmed0/currency-api#readme) currency converter API and [Rest Countries](https://restcountries.com/v3.1/all) API, respectively.

## Issues

If any issues are found, they can be reported [here](https://github.com/clefayomide/ui-currency-converter-library/issues).

## License

This project is licensed under the [MIT](LICENSE) license.


