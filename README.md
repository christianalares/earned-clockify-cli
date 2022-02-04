# Earned

## What is this?
This is a small CLI that prints earnings froma specific [clockify.me](https://clockify.me/) project

## Installation:
In order to use this you need to download this repo and run:
- `yarn`
- `yarn bundle`
- `yarn package`

`yarn package` will copy a binary to `/usr/local/bin/earned` so if that is not your preferred path, feel free to edit it in `package.json`

## Usage:
First you need to set your project id and your token. You can find this info in your clockify account:
```
earned --token=<token> --workspace-id=<workspace-id>
```

Second you just run it:

```
earned
```

And it will output:
```
Last year:     (amount)
Last month:    (amount)
Yesterday:     (amount)
-------------------------
This year:     (amount)
This month:    (amount)
This day:      (amount)
```