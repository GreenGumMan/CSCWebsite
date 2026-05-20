# CSC Website

A website for club

## Feature

- Saving Animation Frames in a json File.
- Command-line UI
    - ls-member
    - help
    - clear
- Fast Buttons

## About Json

> NOTE:PadEnd is 15 , which means a column(word) will at least use 15 chars.

### anim(anim.json)

```json
{
    "animation_name":[
        "frame",
        ...
    ],
    ...
}
```

```js

StartPlay(element,animation_name);

```

### member list(members.json)

```json
[
    ["NAME","DUTY","CLASS"],
    ...
]
```

### help(command_information.json)

```json
{
    "command_name":[
        "command_name",
        "meaning(description)"
    ],
    ...
}
```
