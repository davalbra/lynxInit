## Rspeedy project

This is a ReactLynx project bootstrapped with `create-rspeedy`.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Scan the QRCode in the terminal with your LynxExplorer App to see the result.

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.

## Configurar RSDOCTOR

```js
{
  "scripts": {
    "dev": "RSDOCTOR=true rspeedy dev",
    "build": "RSDOCTOR=true rspeedy build",
  }
}

```
instalar

```bash
pnpm add @rsdoctor/cli -D
```

```bash
rsdoctor analyze --profile "./dist/.rsdoctor/manifest.json"
```
## Configurar  speedscoep

instalar
```bash
 pnpm install -g speedscope
```

ejecutar el build es el que general los archivos CPU
```bash
#dev
node --cpu-prof ./node_modules/@lynx-js/rspeedy/bin/rspeedy.js dev

# build
node --cpu-prof ./node_modules/@lynx-js/rspeedy/bin/rspeedy.js build
```
ejecutar con : speedscope CPU.date.xxxxxx.xxxx.xxx.cpuprofile