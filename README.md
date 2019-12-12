# ace-starter

Example ace project.

## Getting Started

To install all dependencies, do:

    yarn install

### Building

To build the package, do:

    yarn build

### Tests

To test, do:

    yarn test

### Formatting

To format the code, do:

    yarn fmt

If using [Visual Studio Code](https://code.visualstudio.com/), consider
installing the
[prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
extension so you can run the formatter in your editor. The extension
should be able to pick up the [`.prettierrc.js`](./.prettierrc.js) config.

### yarn.lock

The `yarn.lock` is checked into source control, managed by `yarn` and
provides deterministic builds. To do so, it captures the dependency graph
and the resolved versions based on the state of the yarn registry. It is
very **important** that this file is stable. If it has changes, ensure
those changes are related to your current changes and not a remnant of
another unrelated branch.

### Dev Server

To start the dev server, do:

    yarn start

This should open a browser tab to
[http://localhost:8080](http://localhost:8080).

