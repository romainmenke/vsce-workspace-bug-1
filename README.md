# vsce-workspace-bug-1

see : https://github.com/microsoft/vscode-vsce/issues/777

Using `vsce ls` because it illustrates the bug without needing to actually run `vsce publish`.
There is a slim chance that these are two separate bugs.

Fails with workspaces :

```bash
cd .vscode/extensions/a
npm install
npm run vsce ls
```

```
...
../node_modules/vsce/node_modules/ansi-styles/index.js
../node_modules/vsce/node_modules/ansi-styles/license
../node_modules/vsce/node_modules/ansi-styles/package.json
../node_modules/vsce/node_modules/ansi-styles/readme.md
../node_modules/vsce/node_modules/chalk/index.js
...
```

Works without workspaces :

```bash
cd .vscode-no-workspaces/extensions/a
npm install
npm run vsce ls
```
```
dist/extension.js
package.json
```
