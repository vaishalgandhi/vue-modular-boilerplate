# How to install

## Using Git (recommended)

1. Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/vaishalgandhi/vue-modular-boilerplate.git ./myproject
```

## Using manual download ZIP

1. Download repository
2. Uncompress to your desired directory

## Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
npm update
```

## VERY IMPORTANT

This project uses Vue Router HTML5 History Mode, this means when you are in development mode you can hit Cmd+R (mac) or F5 (Windows) to reload the page and it will work, but when the project is built you will have problems, so will need to do a small change in your web server to make that work. Please read the official Vue Router documentation here: <https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations>

## Compiles and hot-reloads for development

```bash
npm run serve
```

## Compiles and minifies for production

```bash
npm run build
```

## Run your tests

```bash
npm run test
```

## Lints and fixes files

```bash
npm run lint
```

## Formatting markdown files

```bash
npm run remark
```

## Run your end-to-end tests

```bash
npm run test:e2e
```

## Run your unit tests

```bash
npm run test:unit
```

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Bugs or improvements

Feel free to report any bugs or improvements. Pull requests are always welcome.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
