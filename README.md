# Single-line search component
built with Vue.js 2.0 & Buefy
## Demo
![demo](https://i.imgur.com/h6fxTAE.gif)

## Live Demos
[https://tsengm6h6.github.io/dynamic-search-demo/](https://tsengm6h6.github.io/dynamic-search-demo/)

## Features
- dynamic configuration supported
  - field type: input, autocomplete
  - supports multiple search options
- click [Try it] button to add your own configuration

# Installation
## Environment
- Vue: ^2.6.11
- Buefy: ^0.9.22
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Props
### key
- Type: `String`
- Required: `true`
- Default: `''`

Key for api parameters.

### label
- Type: `String`
- Required: `true`
- Default: `''`

Display label.

### type
- Type: `String`
- Required: `true`
- Default: `null`

The field type for generating dynamic search component.
### options
- Type: `Array`
- Required: `false`
- Default: `[]`

Options are required for `autocomplete` or `select` component.
Must be **Object array** with both `value` and `display` attributes.

### attrs
- Type: `Object`
- Required: `false`
- Default: `{}`

Key value pairs of additional attributes. 
for example, `placeholder: "Enter your name here"`.
Component will use the default attributes if `attrs` is not provided.

### value
- Type: `String`
- Required: `false`
- Default: `null`

Value for api parameters.
### multiple
- Type: `Boolean`
- Required: `false`
- Default: `false`

Define if the search condition accepts multiple values.
