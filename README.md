# Repomods Wiki

### How to Contribute

1. Fork this repository and clone your fork.

2. Install [Node v22 or newer](https://nodejs.org/en/download).  
   It is recommended to use `Chocolatey` on Windows and `nvm` on macOS/Linux.  
   You will also need a package manager such as `npm`.

3. After installing Node and a package manager of choice, install the dependencies:

> Run this in the root directory of the project, where the `package.json` file is located.

```bash
npm install
```

4. Preview your changes Locally:

```bash
npm run dev
```

5. Building the Wiki  `/docs/.vitepress/dist`:

```bash
npm run build
```

6. If you're done with your changes, make sure to Push them to your Fork and Open a Pull Request.

## VitePress Documentation

VitePress docs can be found here:  
[VitePress Docs](https://vuejs.github.io/vitepress/v1/guide/markdown)