#!/usr/bin/env node

/** MIT License
 *
 * Copyright (c) 2018 Ludovic CLUBER
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice (including the next
 * paragraph) shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * https://github.com/DWTechs/GitBranchValidator
 */

/**
 * send your own regex pattern
 *
 * @param {customPattern} String regex to validate
 * @param {customMessage} String personalized end message
 */

const commandLineArgs = require("command-line-args");
const commandLineUsage = require("command-line-usage");
const validator = require("../lib/main.js");

const optionDefinitions = [
  {
    name: "patterns",
    alias: "p",
    type: String,
    multiple: true,
    description: "Use custom regexps to validate Git branch names for your projects."
  },
  {
    name: "message",
    alias: "m",
    type: String,
    multiple: false,
    description:
      "Use a custom message at the end of the error message. For example a link to help understand your custom branch name rules."
  },
  {
    name: "continue",
    alias: "c",
    type: Boolean,
    multiple: false,
    description: "Prompt the user to let him to keep going or not despite the invalid branch name."
  },
  {
    name: "help",
    alias: "h",
    type: Boolean,
    description: "Display this usage guide."
  }
];

const options = commandLineArgs(optionDefinitions);

const usageSections = [
  {
    header: "GitBranchValidator",
    content: "Git branch name validator for a clean workflow and a better readability."
  },
  {
    header: "Options",
    optionList: optionDefinitions,
    content:
      "Project home: {underline https://github.com/DWTechs/GitBranchValidator}"
  }
];
const usage = commandLineUsage(usageSections);

options.help
  ? console.log(usage)
  : validator.test(options.patterns, options.message, options.continue);
