# ![hyper-link](src/images/logo.svg)

`<hyper-link>` is a tiny Vuejs component which aims to simplify the use of `<router-link>` by providing a universal hypertext link helper. Developers don't need to worry about choosing either `<a>` or `<router-link>` anymore.

<!-- ## Features

🔎 Detects link type and accordingly replaces `<hyper-link>` with `<router-link>` or `<a>` tag.

🔌 Handles every link type:

- Relative (`/path/to/page`),
- Absolute (`https//example.com`),
- Anchor (`/path#section`),
- JavaScript (`javascript:...`),
- Mailto / Tel (`mailto:email@address.com`, `tel:+00123456789`...).

⚙️ Automatically adds required attributes, depending on link type. -->

## Demo

Click this button to have a project example using `hyper-link`:

[![hyper-link example on Codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/kml72y4v5o)

## Installation

Download the package:

```shell
npm install @muxumuxu/hyper-link
```

### On a VueJS project

Import the component inside the `main.js` file:

```js
import HyperLink from '@muxumuxu/hyper-link'

Vue.component('hyper-link', HyperLink)
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
  plugins: [{ src: '~/plugins/hyper-link', ssr: false }]
}
```

## Usage

As the component has been globally registered, you don't need to import it on every component file. Just use the tag as you would normally do:

```html
<hyper-link href="/about">About us</hyper-link>
<hyper-link href="https://vuejs.org">Vue.js</hyper-link>
```

Renders to:

```html
<router-link to="/about">About us</router-link>
<a href="https://vuejs.org" target="_blank" rel="noopener">Vue.js</a>
```

> :eyes: As you can see, the output of the `<hyper-link>` tag is either  a `<a>` tag or a `<router-link>` tag, depending on the type of provided `href` value (absolute, relative...).

## Properties

|Name|Type |Required|Default|
|-|-|-|-|
|`href`|String|Yes|-|
|`target`|String|No|`_self`|
|`rel`|String|No|-|

> :point_up: `target` and `rel` attributes are automatically set respectively to `_blank` and `noopener` in case of external links. It can be overriden by setting the chosen value.

## Contribute

You are welcome to contribute to `hyper-link` to find bugs or to submit new features. Please follow these steps:

### Download the project

```sh
git clone https://github.com/muxumuxu/hyper-link.git
```

<!-- ### Run the project locally using [Docker](https://docker.com)

```sh
docker-compose run app npm install
docker-compose up
``` -->

### Run the project locally

```sh
npm install
npm run serve
```

Visit [http://localhost:8080](http://localhost:8080).

<!-- ### Run tests

```sh
npm run test
``` -->

### Make a pull request

Submit your code with a properly detailed pull request. Provide enough information about what you did so the reviewing process will be easier.

### Make a pull request

Make a pull request [here](https://github.com/muxumuxu/hyper-link/pulls).

## Deploy to npm

### Increment version

Increment the version of the package in the `package.json` file:

```js
"version": "X.X.X"
```

### Build and publish

```sh
npm run build-bundle
npm publish --access public
```

## License

[MIT](/license.md)

## About Muxu.Muxu

[![Muxu.Muxu logo](https://i.imgur.com/fuFN8Rp.png)](https://muxumuxu.com)

We help startups and established companies to invent, build, and launch their next product or venture.
