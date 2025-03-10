---
title: Descriptions
meta:
  - name: description
    content: Display multiple fields in list form
---

# Descriptions

> Display multiple fields in list form

## Use

### Basic Use

When columns is bound to a reactive array, changes in the array will affect Descriptions changes. If you don't need a dynamic Descriptions, it is recommended to bind an ordinary array.

::: demo
@/demo/Descriptions/base.vue
:::

### Intellisense

Use the `defineDescriptionsColumns` to make it easier to define columns

::: demo
@/demo/Descriptions/define.vue
:::

### Nested value

::: demo
@/demo/Descriptions/nested.vue
:::

### Slots

Directly add some slot with `[prop]` in the template

::: demo
@/demo/Descriptions/slots.vue
:::

### TypeScript

The function `defineDescriptionsColumns` supports passing in a Generics type to infer the value of `prop`

::: demo
@/demo/Descriptions/typescript.vue
:::

### Props

| Name      | Description                                        | Type    | Options               | Default    |
| :-------- | :------------------------------------------------- | :------ | :-------------------- | :--------- |
| columns   | to generate descriptions list, reference `columns` | array   | -                     | -          |
| detail    | detail data of display                             | object  | -                     | -          |
| border    | with or without border                             | boolean | —                     | false      |
| column    | numbers of `Descriptions Item` in one line         | number  | —                     | 3          |
| direction | direction of list                                  | string  | vertical / horizontal | horizontal |
| size      | size of list                                       | string  | medium / small / mini | —          |
| title     | title text, display on the top left                | string  | —                     | —          |
| extra     | extra text, display on the top right               | string  | —                     | —          |

### columns

| Name             | Description                                                                                                                                                                                  | Type            | Options               | Default |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :-------------------- | :------ |
| prop             | the key of detail                                                                                                                                                                            | string          | —                     | —       |
| label            | label text                                                                                                                                                                                   | string          | —                     | —       |
| span             | colspan of column                                                                                                                                                                            | number          | —                     | 1       |
| width            | column width, the width of the same column in different rows is set by the max value (If no `border`, width contains label and content)                                                      | string / number | —                     | —       |
| min-width        | column minimum width, columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion (If no`border`, width contains label and content) | string / number | —                     | —       |
| align            | column content alignment (If no `border`, effective for both label and content)                                                                                                              | string          | left / center / right | left    |
| label-align      | column label alignment, if omitted, the value of the above `align` attribute will be applied (If no `border`, please use `align` attribute)                                                  | string          | left / center / right | —       |
| class-name       | column content custom class name                                                                                                                                                             | string          | —                     | —       |
| label-class-name | column label custom class name                                                                                                                                                               | string          | —                     | —       |

## Slots

| Name         | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| title        | custom title, display on the top left, parameters { size }          |
| extra        | custom extra area, display on the top right, parameters { size }    |
| [prop]       | control the `Item` display content, parameters { size, detail }     |
| [prop]-label | control the `Item` label display content, parameters { size, item } |

::: tip Tip
[prop] the prop of columns
:::
