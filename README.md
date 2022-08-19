
[![License: MIT](https://img.shields.io/npm/l/@dwtechs/gitbranchvalidator.svg?color=brightgreen)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40dwtechs%2Fgitbranchvalidator.svg)](https://www.npmjs.com/package/@dwtechs/gitbranchvalidator)
[![last version release date](https://img.shields.io/github/release-date/DWTechs/GitBranchValidator)](https://www.npmjs.com/package/@dwtechs/gitbranchvalidator)
![Jest:coverage](https://img.shields.io/badge/Jest:coverage-100%25-brightgreen.svg)

- [Synopsis](#synopsis)
- [Motivation](#motivation)
- [Installation](#installation)
  - [npm](#npm)
  - [Yarn](#yarn)
  - [Local](#local)
- [Usage](#usage)
  - [Command line](#command-line)
  - [Patterns](#patterns)
  - [Message](#message)
  - [Prompt](#prompt)
  - [Help](#help)
  - [Workflow integration](#workflow-integration)
- [Contributors](#contributors)
- [License](#license)
- [Stack](#stack)
- [Dependencies](#dependencies)

## Synopsis

**[GitBranchValidator](https://github.com/DWTechs/GitBranchValidator)** is an open source git branch name validator library.

## Motivation

The goal of this library is to provide an easy way to check if the current branch name is valid before pushing it to the remote.

It's a good way to help developers keep their branch names clean on the repository and facilitate the workflow of a project with strict naming rules.

The default pattern follows the principles described [here](https://dwtechs.github.io/efficient-git/branch/).

You can also set your own rules using [custom patterns](#patterns).

You can validate commit messages as well with [GitCommitValidator](https://github.com/DWTechs/GitCommitValidator)

## Installation

This library is written in Node.js.
You must install Node.js and npm in order to run it. 

### npm

```bash
$ npm i @dwtechs/gitbranchvalidator -g
```

### Yarn

```bash
$ yarn add @dwtechs/gitbranchvalidator -g
```

### Locally

Alternatively, if you are planning to use GitBranchValidator within your npm package only or with npx you can install it as a devDependency in your project.

```bash
$ npm i @dwtechs/gitbranchvalidator --save-dev
```

```bash
$ yarn add @dwtechs/gitbranchvalidator --dev
```

## Usage

**This library is meant to be used in "pre-commit", "commit-msg" or/and "pre-push" Git hook.**
Thus it is not bound to Javasrcipt applications only and can be used by any git repository.

You can learn more about Git hooks and how ti cutomize them in the [Git Manual](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy)

Because hooks aren’t transferred with a clone of a project, you must distribute these scripts some other way and then have your users copy them to their .git/hooks directory and make them executable. You can distribute these hooks within the project or in a separate project, but Git will not set them up automatically for you.


### Command line

```bash
$ gbvalidator
```

Alternatively if you did not install GitBranchValidator globally you can use npx.

```bash
$ npx gbvalidator
```

Or as an npm script in your package.json.

```json
{
  "scripts": {
    "commit": "gbvalidator"
  }
}
```

### Patterns

- Default : **^(feat|fix|test|doc)\/[A-Z0-9\-\#]{2,25}\/[a-z0-9_\-\.]{3,40}$**
- Release : **^release\/v[a-z0-9\+\-\.]{3,25}$**

The patterns follow the principles described [here](https://dwtechs.github.io/efficient-git/branch/).

You can use your own custom patterns by adding an optional regexp :

```bash
$ cd <git-project>
$ gbvalidator --patterns "^(feat|fix)\\/([a-z0-9_#-\\.\\/]){3,50}$"
```

You can use several patterns if needed : 

```bash
$ gbvalidator --patterns "pattern1" "pattern2" "pattern3"
```

If one of them is valid, the branch name will be valid.


### Message

You can customize the end of the error message :

```bash
$ gbvalidator --message "You can learn more about branch name conventions of this project on https://dwtechs.github.io/efficient-git/branch/"
```

### Prompt

If the branch name is not valid, the process will be blocked by default.
You can use the option "--continue" to prompt the user instead.

```bash
$ gbvalidator --continue
```

In this case the user will be prompted about the invalid branch. He will be able to keep going if he choose so.

_Git hooks are not run in an interactive environment. So this option will fail if used in a Git hook._

### Help

You can access the documentation by passing the "help" parameter :

```bash
$ gbvalidator --help
```

### Workflow integration

Validate branch name on pre-push hook by adding the following code in the .git/hooks/pre-push file : 

```bash
gbvalidator
```

Or with tools like Husky In the package.json file :

```json
{
  "husky": {
    "hooks": {
      "pre-push": "gbvalidator"
    }
  }
}
```
You can do it with any other tool, or work on Git hooks directly.


You can use GitCommitValidator in the "commit-msg" hook as well : 

```bash
gbvalidator && gcvalidator -src "$1"
```


You can find git hooks examples in the ./hooks/ folder.
To install them just paste them in the .git/hooks/ folder of your repositories.



## options

| Option       | Alias |  Type   |                                                                                                          description |
| :----------  | :---: | :-----: | -------------------------------------------------------------------------------------------------------------------: |
| --patterns   |  -p   | string  |                                                                   Use a custom regex. You can send multiple patterns |
| --message    |  -m   | string  |                                                                 Add a custom message at the end of the error message |
| --continue   |  -c   | string  | Prompt the user if the branch name is not valid, instead of stopping the process. Does not work if used in Git hooks |
| --help       |  -h   | boolean |                                                                                            Learn about library usage |

## Contributors

GitBranchValidator is still in development and I would be glad to get all the help you can provide for this project.
To contribute please read **[contributor.md](https://github.com/DWTechs/GitBranchValidator/blob/master/contributor.md)** for detailed installation guide.

## License

**[MIT](https://github.com/DWTechs/GitBranchValidator/blob/master/LICENSE)**

## Stack

| Purpose         |                Choice                |                                                 Motivation |
| :-------------- | :----------------------------------: | ---------------------------------------------------------: |
| repository      |    [Github](https://github.com/)     | hosting for software development version control using Git |
| package manager | [npm](https://www.npmjs.com/get-npm) |                            default node.js package manager |
| unit testing    |      [Jest](https://jestjs.io/)      |              delightful testing with a focus on simplicity |

## Dependencies

| Name | version |
| :--- | :----- |
| @dwtechs/checkhard | 2.18.0 |
| command-line-args  | 5.2.1 |
| command-line-usage | 6.1.3 |
| current-git-branch | 1.1.0 |
| prompts            | 2.4.2 |