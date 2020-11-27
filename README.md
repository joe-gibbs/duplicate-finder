# Duplicate finder

This application will find duplicates in a plain text file separated by newlines.

## Installation

This package requires TypeScript and ts-node.

`npm install -g typescript`

`npm install -g ts-node`

Install required packages with `npm install` 

Then use `npm link` to be able to run `duplicate-finder`.

## Usage

Run `duplicate-finder <filename>`, where filename is the name of the txt file you want to find duplicates in.

duplicate-finder does tend to be a bit slow. An alternative is to use `duplicate-finder-fast <filename>`, which won't output line numbers but is very fast.

For a fake list of phone numbers run `npm run seed`.