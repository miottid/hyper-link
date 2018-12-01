# hyper-link 🔗

`<hyper-link>` is a tiny Vuejs component which aims to simplify the use of `<router-link>` by providing a universal hypertext link helper. Developers don't need to worry about choosing either `<a>` or `<router-link>` anymore.

## Features

🔎 Detects link type and accordingly replace `<hyper-link>` with `<router-link>` or `<a>` tags.

🔌 Handles every link type:

- Relative (`/path/to/page`),
- Absolute (`https//example.com`),
- Anchor (`/path#section`),
- JavaScript (`javascript:...`),
- Mailto / Tel (`mailto:email@address.com`, `tel:+00123456789`...).

⚙️ Automatically adds required attributes, depending on link type.

## Installation

Download the package:

```shell
npm install @muxumuxu/hyper-link
```

### On a VueJS project

```html
<template>
  <hyper-link href="https://muxumuxu.com" title="Muxu.Muxu" target="_blank" rel="noopener" />
</template>

<script>
import HyperLink from '@muxumuxu/hyper-link'

export default {
  components: { HyperLink }
}
</script>
```

### With NuxtJS

Create a dedicated plugin in your app (`~/plugins/hyper-link.js`):

```js
import Vue from "vue";
import HyperLink from "@muxumuxu/hyper-link";

Vue.component("hyper-link", HyperLink);
```

Import the plugin in `nuxt.config.js` by adding `hyper-link` to the plugins list:

```js
module.exports = {
  ...,
  plugins: [...otherPlugins,
    { src: '~/plugins/hyper-link', ssr: true }
  ],
  ...
}
```

## Usage

As the component has been globally registered, you don't need to import it on every `.vue` file. Just wrap the link content within the tag with needed attributes.

[![View hyper-link exemple](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/8x7yop89w9)

### Basic link

Here is an example with a simple link. If not explicitly provided, the link content is the title attribute.

Input:

```html
<hyper-link href="/about" title="About us" />
```

Output:

```html
<router-link to="/about" title="About us"> About us </router-link>
```

### HTML rich link

Input:

```html
<hyper-link href="https://example.com" title="Visit example website">
  <img src="/path/to/example-icon.svg" />
  <h3>Example</h3>
</hyper-link>
```

Output:

```html
<a href="https://example.com" title="Visit example website">
  <img src="/path/to/example-icon.svg" />
  <h3>Example</h3>
</a>
```

> ☝️ This time, the output is a `<a>` tag because the `href` attribute points to an absolute URL.

## Documentation

| Name     | Type   | Required | Default |
| -------- | ------ | -------- | ------- |
| `href`   | String | Yes      | -       |
| `title`  | String | No       | -       |
| `target` | String | No       | `_self` |
| `rel`    | String | No       | -       |

## Contribute

### Download the project on your machine

```sh
git clone https://github.com/muxumuxu/hyper-link.git
```

### Run the project locally

**With [Docker](https://docker.com):**

```sh
docker-compose run app npm install
docker-compose up
```

**Without Docker:**

```sh
npm install
npm run serve
```

### Run tests

```sh
docker-compose run app npm run test
```

### Make a pull request

Make a pull request [here](https://github.com/muxumuxu/hyper-link/pulls).

## Deploy to npm

First you need to increment the package `version` in `package.json`.

Next build and publish your work on the npm registry :

```
npm run build-bundle
npm publish --access public
```

## License

[MIT](/license.md)

## About Muxu.Muxu

[![Muxu.Muxu logo](https://i.imgur.com/fuFN8Rp.png)](https://muxumuxu.com)

We help startups and established companies to invent, build, and launch their next product or venture.
