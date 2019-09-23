# Workspace: Dev BabylonJS projects in Typescript  

- [Initialize workspace](#initialize-workspace)
- [New a project](#new-a-project)
- [Debugging in browsers](#debugging-in-browsers)
- [Debugging in Visual Studio Code](#debugging-in-visual-studio-code)
- [File structure overview](#file-structure-overview)
- [Get babylon.js from BabylonJS official](#get-official-prebuilt)
- [Get typings from BabylonJS official](#get-official-typings)
- [Change http server port](#change-http-server-port)

----


## Initialize Workspace 

Install deps 

> `npm i` 



## File Structure Overview

```
projects/
  barebone/
    public/                 # (web root) 
      lib/                  # prebuilt scripts
      index.html
    src/                    # your scripts 
      index.ts
      index.module.d.ts
    typings/                # declarations of prebuilt scripts
    package.json
    tsconifg.json           # tsc rc
    webpack.config.json     # webpack & webpack-dev-server rc
node_modules/
package.json
```



## Get Official Prebuilt

Download "babylon.js" from `/dist` of tagged branches, eg.

> https://github.com/BabylonJS/Babylon.js/tree/4.0.3/dist



## Get Official Typing

Download "babylon.module.d.ts" from `/dist` , eg.

> https://github.com/BabylonJS/Babylon.js/tree/4.0.3/dist



## New a Project

Duplicate

> projects/barebone 

```
projects/
  barebone/
  {yours}/   # your new project 
```

Then, put your prebuilt babylon([Get Official Prebuilt](#get-official-prebuilt)) in 

> projects/{yours}/public/lib/


And typing([Get Official Typing](#get-official-typing)) in 

> projects/{yours}/typings/



Then, start a dev server (default port 8080)

```cmd
cd projects/{yours}
npm run dev
``` 

Then, switch to browser, navigate to 

> http://localhost:8080

Yes, you will see a blank page. (Don't close the browser) 

Let's edit the entry file

> projects/{yours}/src/index.ts

```ts
import { Engine } from 'babylonjs'
document.body.textContent = Engine.Version;
```

Save it.

You will see babylon version printed on browser. 🎉



# Dev Server

## Start a http server serving your project

```cmd
cd projects/{your}
npm run dev
```

## Change http server port

Edit 

> projects/{yours}/webpack.config.js

```json
{
  "devServer": {
    "port": "{your port}"
  }
}
```

Or specify in command

```cmd
npm run dev -- --port {your port}
```



# Debugging


## Debugging in Browsers

Sources (.ts) location
> webpack > src > ..


## Debugging in Visual Studio Code

Create and edit ".vscode/launch.json" at workspace root. (see below)

Then, navigate to debug sidebar

Then, select a configuration from dropdown list, e.g. "foo"

Then, start debugging (F5). 🎉



### launch.json - Debugger for Firefox

[Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug)

```json5
    ...
    { // LAUNCH
       "type": "firefox",
       "request": "launch",
       "name": "foo FF launch",
       "url": "http://localhost:8080",
       "pathMappings": [
          {
            "url": "webpack:///src/",
            "path": "${workspaceRoot}/projects/foo/src/"
          }
       ]
    },
    { // ATTACH
       "type": "firefox",
       "request": "attach",
       "name": "foo FF attach",
       "port": 6080,
       "pathMappings": [
          {
            "url": "webpack:///src/",
            "path": "${workspaceRoot}/projects/qt/src/"
          }
       ]
    },
```

Then config your firefox, see https://github.com/firefox-devtools/debugger/blob/master/docs/remotely-debuggable-browsers.md



### launch.json - Debugger for Chrome

[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

```json5
{ 
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "foo chrome launch",
      "url": "http://localhost:8080", 
      "port": 9222,
      "sourceMaps": true, 
      "sourceMapPathOverrides": {
        "webpack:///./src/*": "${workspaceRoot}/projects/foo/src/*"
      }
    }, 
    {
      "type": "chrome",
      "request": "launch",
      "name": "bar chrome launch",
      "url": "http://localhost:8081", 
      "port": 9223,
      "sourceMaps": true, 
      "sourceMapPathOverrides": {
        "webpack:///./src/*": "${workspaceRoot}/projects/bar/src/*"
      }
    },
  ]
}
```


