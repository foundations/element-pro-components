---
title: Descriptions
meta:
  - name: description
    content: 列表形式展示多个字段
---

# Descriptions

> 列表形式展示多个字段

## 使用

### 基础用法

当 columns 绑定的是一个具有响应式的数组时，数组的变动会影响 Descriptions 变动（及动态 Descriptions）。如果不需要动态 Descriptions 推荐绑定一个普通数组

::: demo
@/demo/Descriptions/base.vue
:::

### 智能提示

通过辅助函数 `defineDescriptionsColumns` 提供智能提示

::: demo
@/demo/Descriptions/define.vue
:::

### 获取嵌套键值

::: demo
@/demo/Descriptions/nested.vue
:::

### 插槽

直接在模版中增加带 `[prop]` 相关的插槽即可使用插槽

::: demo
@/demo/Descriptions/slots.vue
:::

### TypeScript

`defineDescriptionsColumns` 支持传入一个泛型用来推断 `prop` 值

::: demo
@/demo/Descriptions/typescript.vue
:::

### 配置

| 参数      | 说明                       | 类型    | 可选值                | 默认值     |
| :-------- | :------------------------- | :------ | :-------------------- | :--------- |
| columns   | 表单配置参考下面 `columns` | array   | -                     | -          |
| detail    | 显示的详情数据             | object  | -                     | -          |
| border    | 是否带有边框               | boolean | —                     | false      |
| column    | 一行显示的数量             | number  | —                     | 3          |
| direction | 排列的方向                 | string  | vertical / horizontal | horizontal |
| size      | 列表的尺寸                 | string  | medium / small / mini | —          |
| title     | 标题文本，显示在左上方     | string  | —                     | —          |
| extra     | 操作区文本，显示在右上方   | string  | —                     | —          |

### columns 的参数

| 参数             | 说明                                                                                                                                       | 类型            | 可选值                | 默认值 |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :-------------------- | :----- |
| prop             | 对应 detail 的字段名                                                                                                                       | string          | —                     | —      |
| label            | 标签文本                                                                                                                                   | string          | —                     | —      |
| span             | 列的数量                                                                                                                                   | number          | —                     | 1      |
| width            | 列的宽度，不同行相同列的宽度按最大值设定（如无 border ，宽度包含标签与内容）                                                               | string / number | —                     | —      |
| min-width        | 列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列（如无 border，宽度包含标签与内容） | string / number | —                     | —      |
| align            | 列的内容对齐方式（如无 border，对标签和内容均生效）                                                                                        | string          | left / center / right | left   |
| label-align      | 列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）                                                     | string          | left / center / right | —      |
| class-name       | 列的内容自定义类名                                                                                                                         | string          | —                     | —      |
| label-class-name | 列的标签自定义类名                                                                                                                         | string          | —                     | —      |

## 插槽

| 名称         | 说明                                          |
| ------------ | --------------------------------------------- |
| title        | 自定义标题文本，显示在左上方, 参数 { size }   |
| extra        | 自定义操作区文本，显示在右上方, 参数 { size } |
| [prop]       | 当前这项的内容, 参数 { size, detail }         |
| [prop]-label | 当前这项的标签文本内容, 参数 { size, item }   |

::: tip 提示
[prop] 为 columns 中定义的 prop
:::
