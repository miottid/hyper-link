# hyper-link 🔗

> `<nuxt-link>` on steroids.

Easy url handler for [Nuxt](https://nuxtjs.org).

## Features

Handles every link type:

- Relative (`/path/to/page`),
- Absolute (`https://my-website.com`),
- Anchors (`/path#page-section`),
- Special (`mailto:email@address.com`, `tel:+00123456789`...).

Automatically add required attributes among:

- `href`,
- `title`,
- `target`,
- `rel`,
- `aria-label`.

## Installation

### Download the package

```shell
npm install vue-hyper-link
```

### Globally register component

Create `~/plugins/hyper-link.js`:

```js
import Vue from 'vue'
import HyperLink from 'hyper-link'

Vue.component('hyper-link', HyperLink)
```

Import the plugin in `nuxt.config.js` by adding `hyper-link` to the plugins list:

```js
module.exports = {
  ...,
  plugins: ['hyper-link'],
  ...
}
```

## Usage

Wrap the link content within the tag and add needed attributes:

```html
<hyper-link href="https://muxumuxu.com" title="Muxu.Muxu">
  Visit Muxu.Muxu website
</hyper-link>
```

> As the component has been globally registered, you don't need to call it on every `.vue` file.

## Documentation

TODO: attributes list

|Name  |Type  |Required|
|------|------|--------|
|`href`|String|Required|

## Contribute

TODO
