# \<lit-material-datatable>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## ⚠️ IMPORTANT ⚠️

This is an initial version for a datatable, created with Lit. Issues might be present. In case any issue is found, and would like to contribute on this component, please do not hesitate on PR a fix for the issue. 

## _Known issues:_

* Lit Material Input (my other component) is not integrated correctly. Therefore, filter functionality is not entirely completed. 
* Eventhough hover styling is integrated, it is not working correctly. ( Issue to be solved )



## Installation

```bash
npm i lit-material-datatable
```

## Preview

![alt text](https://github.com/Braggiouy/lit-material-datatable/blob/main/demo/screenshot.png?raw=true)



## Usage

```html
<script type="module">
  import 'lit-material-datatable/lit-material-datatable.js';
</script>

<lit-material-datatable></lit-material-datatable>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
