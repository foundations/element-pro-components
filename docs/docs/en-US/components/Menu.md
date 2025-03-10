---
title: Menu
meta:
  - name: description
    content: Menu that provides navigation for your website
---

# Menu

> Menu that provides navigation for your website

## Use

### Basic Use

By default, the component will generate routes from vue-router, Go to <pro-link to="/zh-CN/guide/router">Router and Menu</pro-link> to view routing related usage

::: demo
@/demo/Menu/base.vue
:::

### Custom Mode

Set `mode` attribute to enable custom Mode

::: demo
@/demo/Menu/mode.vue
:::

### Custom routes

Set `routes` attribute to enable custom routes

::: demo
@/demo/Menu/routes.vue
:::

### Slots

::: tip Tip
Starting from `0.12.0`, the internal menu will be implemented using svgicon by default. If you want to continue to use fonticon, you can use the slot in the following way to achieve
:::

::: demo How to display the menu content through the default slot
@/demo/Menu/slots.vue
:::

### Props

| Name                | Description                                                         | Type    | Options               | Default           |
| :------------------ | :------------------------------------------------------------------ | :------ | :-------------------- | :---------------- |
| routes              | current routes                                                      | array   | -                     | from `vue-router` |
| mode                | menu display mode                                                   | string  | horizontal / vertical | vertical          |
| collapse            | whether the menu is collapsed (available only in vertical mode)     | boolean | -                     | false             |
| background-color    | background color of Menu (hex format)                               | string  | -                     | #ffffff           |
| text-color          | text color of Menu (hex format)                                     | string  | -                     | #303133           |
| active-text-color   | text color of currently active menu item (hex format)               | string  | -                     | #409EFF           |
| default-openeds     | array that contains indexes of currently active sub-menus           | Array   | -                     | -                 |
| unique-opened       | whether only one sub-menu can be active                             | boolean | -                     | false             |
| menu-trigger        | how sub-menus are triggered, only works when `mode` is 'horizontal' | string  | hover / click         | hover             |
| collapse-transition | whether to enable the collapse transition                           | boolean | -                     | true              |

### Slots

| Name | Description                                                       |
| :--- | :---------------------------------------------------------------- |
| -    | Control menu display content, parameters { meta, path, redirect } |
