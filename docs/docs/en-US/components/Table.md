---
title: Table
meta:
  - name: description
    content: Display multiple data with similar format. You can sort, filter, compare your data in a table
---

# Table

> Display multiple data with similar format. You can sort, filter, compare your data in a table

## Use

### Basic Use

When columns is bound to a reactive array, changes in the array will affect table changes (dynamic table). If you don't need a dynamic table, it is recommended to bind an ordinary array.

::: demo
@/demo/Table/base.vue
:::

### Intellisense

Use the `defineTableColumns` `defineTableMenuColumns` `defineTableSelectionColumns` `defineTableIndexColumns` `defineTableExpandColumns` to make it easier to define columns

::: demo
@/demo/Table/define.vue
:::

### Nested value

::: demo
@/demo/Table/nested.vue
:::

### Index Columns

Set `index` attribute to display index columns

::: demo
@/demo/Table/index.vue
:::

### Selection Columns

Set `selection` attribute to display selection columns

::: demo
@/demo/Table/selection.vue
:::

### Expand Columns

Use expand slot to define display content, and Set `expand` attribute to control expand columns

::: demo
@/demo/Table/expand.vue
:::

### Menu Columns

Use menu slot to define display content, and Set `menu` attribute to control menu Columns

::: demo
@/demo/Table/menu.vue
:::

### Slots

Use simple [render-function](https://v3.cn.vuejs.org/guide/render-function.html) by `render` in `columns`. or directly add some slot with `[prop]` in the template.

::: demo
@/demo/Table/slots.vue
:::

### Pagination

Set `total` attribute to display pagination, use `v-model:current-page` to bind current page; use `v-model:page-size` to bind current page size

::: demo
@/demo/Table/pagination.vue
:::

### Grouping table head

Set `children` in `columns` will automatic generate the grouping table head

::: demo
@/demo/Table/group.vue
:::

### Async Table

To implement Async Table, columns must be bound to a reactive array

::: demo
@/demo/Table/async.vue
:::

### TypeScript

The function `defineTableColumns` supports passing in a Generics type to infer the value of `prop`

::: demo
@/demo/Table/typescript.vue
:::

### Props

| Name                    | Description                                                                                                                                                                                                                                                                 | Type                                                    | Options                        | Default                                                                        |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------ | :----------------------------- | :----------------------------------------------------------------------------- |
| data                    | Table data                                                                                                                                                                                                                                                                  | array                                                   | -                              | -                                                                              |
| columns                 | to generate table components, reference `columns`                                                                                                                                                                                                                           | array                                                   | -                              | -                                                                              |
| selection               | add a column will display checkbox, reference `columns`                                                                                                                                                                                                                     | boolean / object                                        | -                              | false                                                                          |
| index                   | add a column will display index, reference columns                                                                                                                                                                                                                          | boolean / object                                        | -                              | false                                                                          |
| expand                  | add a column will display expand icon, reference columns                                                                                                                                                                                                                    | boolean / object                                        | -                              | false                                                                          |
| menu                    | config the menu content, reference columns                                                                                                                                                                                                                                  | boolean / object                                        | -                              | false                                                                          |
| show-overflow-tooltip   | whether to hide extra content and show them in a tooltip when hovering on the cell                                                                                                                                                                                          | boolean                                                 | -                              | false                                                                          |
| align                   | alignment                                                                                                                                                                                                                                                                   | string                                                  | left / center / right          | left                                                                           |
| header-align            | alignment of the table header. If omitted, the value of the above `align` attribute will be applied                                                                                                                                                                         | string                                                  | left / center / right          | same with align                                                                |
| total                   | total item count                                                                                                                                                                                                                                                            | number                                                  | -                              | -                                                                              |
| current-page            | current page number, supports `v-model:current-page`                                                                                                                                                                                                                        | number                                                  | -                              | -                                                                              |
| page-size               | item count of each page, supports `v-model:page-size`                                                                                                                                                                                                                       | number                                                  | -                              | -                                                                              |
| pagination              | pagination props, same with el-pagination                                                                                                                                                                                                                                   | object                                                  | -                              | from global config                                                             |
| height                  | Table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles                                   | string/number                                           | -                              | -                                                                              |
| max-height              | Table's max-height. The legal value is a number or the height in px.                                                                                                                                                                                                        | string/number                                           | -                              | -                                                                              |
| stripe                  | whether Table is striped                                                                                                                                                                                                                                                    | boolean                                                 | -                              | false                                                                          |
| border                  | whether Table has vertical border                                                                                                                                                                                                                                           | boolean                                                 | -                              | false                                                                          |
| size                    | size of Table                                                                                                                                                                                                                                                               | string                                                  | medium / small / mini          | -                                                                              |
| fit                     | whether width of column automatically fits its container                                                                                                                                                                                                                    | boolean                                                 | -                              | true                                                                           |
| show-header             | whether Table header is visible                                                                                                                                                                                                                                             | boolean                                                 | -                              | true                                                                           |
| highlight-current-row   | whether current row is highlighted                                                                                                                                                                                                                                          | boolean                                                 | -                              | false                                                                          |
| current-row-key         | key of current row, a set only prop                                                                                                                                                                                                                                         | string,number                                           | -                              | -                                                                              |
| row-class-name          | function that returns custom class names for a row, or a string assigning class names for every row                                                                                                                                                                         | Function({row, rowIndex}) / String                      | -                              | -                                                                              |
| row-style               | function that returns custom style for a row, or an object assigning custom style for every row                                                                                                                                                                             | Function({row, rowIndex})/Object                        | -                              | -                                                                              |
| cell-class-name         | function that returns custom class names for a cell, or a string assigning class names for every cell                                                                                                                                                                       | Function({row, column, rowIndex, columnIndex}) / String | -                              | -                                                                              |
| cell-style              | function that returns custom style for a cell, or an object assigning custom style for every cell                                                                                                                                                                           | Function({row, column, rowIndex, columnIndex})/Object   | -                              | -                                                                              |
| header-row-class-name   | function that returns custom class names for a row in table header, or a string assigning class names for every row in table header                                                                                                                                         | Function({row, rowIndex}) / String                      | -                              | -                                                                              |
| header-row-style        | function that returns custom style for a row in table header, or an object assigning custom style for every row in table header                                                                                                                                             | Function({row, rowIndex}) / Object                      | -                              | -                                                                              |
| header-cell-class-name  | function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header                                                                                                                                       | Function({row, column, rowIndex, columnIndex}) / String | -                              | -                                                                              |
| header-cell-style       | function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header                                                                                                                                           | Function({row, column, rowIndex, columnIndex}) / Object | -                              | -                                                                              |
| row-key                 | key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used. | Function(row) / String                                  | -                              | -                                                                              |
| empty-text              | Displayed text when data is empty. You can customize this area with `#empty`                                                                                                                                                                                                | String                                                  | -                              | No Data                                                                        |
| default-expand-all      | whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data                                                                                                                                                         | Boolean                                                 | -                              | false                                                                          |
| expand-row-keys         | set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop                                                                                                                                                      | Array                                                   | -                              |                                                                                |
| default-sort            | set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order                                                                                                                               | Object                                                  | `order`: ascending, descending | if `prop` is set, and `order` is not set, then `order` is default to ascending |
| tooltip-effect          | tooltip `effect` property                                                                                                                                                                                                                                                   | String                                                  | dark / light                   | dark                                                                           |
| show-summary            | whether to display a summary row                                                                                                                                                                                                                                            | Boolean                                                 | -                              | false                                                                          |
| sum-text                | displayed text for the first column of summary row                                                                                                                                                                                                                          | String                                                  | -                              | Sum                                                                            |
| summary-method          | custom summary method                                                                                                                                                                                                                                                       | Function({ columns, data })                             | -                              | -                                                                              |
| span-method             | method that returns rowspan and colspan                                                                                                                                                                                                                                     | Function({ row, column, rowIndex, columnIndex })        | -                              | -                                                                              |
| select-on-indeterminate | controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected.                                                                                                        | Boolean                                                 | -                              | true                                                                           |
| indent                  | horizontal indentation of tree data                                                                                                                                                                                                                                         | Number                                                  | -                              | 16                                                                             |
| lazy                    | whether to lazy loading data                                                                                                                                                                                                                                                | Boolean                                                 | -                              | -                                                                              |
| load                    | method for loading child row data, only works when `lazy` is true                                                                                                                                                                                                           | Function(row, treeNode, resolve)                        | -                              | -                                                                              |
| tree-props              | configuration for rendering nested data                                                                                                                                                                                                                                     | Object                                                  | -                              | { hasChildren: 'hasChildren', children: 'children' }                           |

#### columns

| Name                | Description                                                                                                                                                                                                     | Type                                    | Options                                                                                                                          | Default                           |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |
| prop                | the key of data                                                                                                                                                                                                 | string                                  | -                                                                                                                                | -                                 |
| label               | column label                                                                                                                                                                                                    | string                                  | -                                                                                                                                | -                                 |
| render              | render function for table columns                                                                                                                                                                               | string / function(row)                  | -                                                                                                                                | -                                 |
| hide                | Whether to hide in the table                                                                                                                                                                                    | boolean                                 | -                                                                                                                                | false                             |
| children            | grouping table head                                                                                                                                                                                             | array                                   | -                                                                                                                                | -                                 |
| columnKey           | column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered                                                                                    | string                                  | -                                                                                                                                | -                                 |
| width               | column width                                                                                                                                                                                                    | string                                  | -                                                                                                                                | -                                 |
| minWidth            | column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion                                                                      | string                                  | -                                                                                                                                | -                                 |
| fixed               | whether column is fixed at left/right. Will be fixed at left if `true`                                                                                                                                          | string / boolean                        | true / left / right                                                                                                              | -                                 |
| renderHeader        | render function for table header of this column                                                                                                                                                                 | Function(h, { column, $index })         | -                                                                                                                                | -                                 |
| sortable            | whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table                                                                | boolean / string                        | true / false / 'custom'                                                                                                          | false                             |
| sortMethod          | sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort                                                                                                                   | Function(a, b)                          | -                                                                                                                                | -                                 |
| sortBy              | specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal    | string / array / Function(row, index)   | -                                                                                                                                | -                                 |
| sortOrders          | the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array | array                                   | the elements in the array need to be one of the following: `ascending`, `descending` and `null` (restores to the original order) | ['ascending', 'descending', null] |
| resizable           | whether column width can be resized, works when `border` of `el-table` is `true`                                                                                                                                | boolean                                 | -                                                                                                                                | true                              |
| formatter           | function that formats cell content                                                                                                                                                                              | Function(row, column, cellValue, index) | -                                                                                                                                | -                                 |
| showOverflowTooltip | whether to hide extra content and show them in a tooltip when hovering on the cell                                                                                                                              | Boolean                                 | -                                                                                                                                | false                             |
| align               | alignment                                                                                                                                                                                                       | string                                  | left / center / right                                                                                                            | left                              |
| headerAlign         | alignment of the table header. If omitted, the value of the above `align` attribute will be applied                                                                                                             | string                                  | left / center / right                                                                                                            | same with align                   |
| className           | class name of cells in the column                                                                                                                                                                               | string                                  | -                                                                                                                                | -                                 |
| labelClassName      | class name of the label of this column                                                                                                                                                                          | string                                  | -                                                                                                                                | -                                 |
| filters             | an array of data filtering options. For each element in this array, `text` and `value` are required                                                                                                             | Array[{ text, value }]                  | -                                                                                                                                | -                                 |
| filterPlacement     | placement for the filter dropdown                                                                                                                                                                               | string                                  | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end  | -                                 |
| filterMultiple      | whether data filtering supports multiple options                                                                                                                                                                | boolean                                 | -                                                                                                                                | true                              |
| filterMethod        | data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true`                                            | Function(value, row, column)            | -                                                                                                                                | -                                 |
| filteredValue       | filter value for selected data, might be useful when table header is rendered with `render-header`                                                                                                              | array                                   | -                                                                                                                                | -                                 |
| index               | customize indices for each row, works on columns with `type=index`                                                                                                                                              | Function(index) / number                | -                                                                                                                                | -                                 |
| selectable          | function that determines if a certain row can be selected, works when `type` is 'selection'                                                                                                                     | Function(row, index)                    | -                                                                                                                                | -                                 |
| reserveSelection    | whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work                                                                          | boolean                                 | -                                                                                                                                | false                             |

### Events

| Name               | Description                                                                                                                                  | Parameters                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| select             | triggers when user clicks the checkbox in a row                                                                                              | selection, row                    |
| select-all         | triggers when user clicks the checkbox in table header                                                                                       | selection                         |
| selection-change   | triggers when selection changes                                                                                                              | selection                         |
| cell-mouse-enter   | triggers when hovering into a cell                                                                                                           | row, column, cell, event          |
| cell-mouse-leave   | triggers when hovering out of a cell                                                                                                         | row, column, cell, event          |
| cell-click         | triggers when clicking a cell                                                                                                                | row, column, cell, event          |
| cell-dblclick      | triggers when double clicking a cell                                                                                                         | row, column, cell, event          |
| row-click          | triggers when clicking a row                                                                                                                 | row, column, event                |
| row-contextmenu    | triggers when user right clicks on a row                                                                                                     | row, column, event                |
| row-dblclick       | triggers when double clicking a row                                                                                                          | row, column, event                |
| header-click       | triggers when clicking a column header                                                                                                       | column, event                     |
| header-contextmenu | triggers when user right clicks on a column header                                                                                           | column, event                     |
| sort-change        | triggers when Table's sorting changes                                                                                                        | { column, prop, order }           |
| filter-change      | column's key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered             | filters                           |
| current-change     | triggers when current row changes                                                                                                            | currentRow, oldCurrentRow         |
| header-dragend     | triggers after changing a column's width by dragging the column header's border                                                              | newWidth, oldWidth, column, event |
| expand-change      | triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded) | row, (expandedRows \| expanded)   |
| size-change        | triggers when `page-size` changes                                                                                                            | the new page size                 |
| current-change     | triggers when `current-page` changes                                                                                                         | the new current page              |
| prev-click         | triggers when the prev button is clicked and current page changes                                                                            | the new current page              |
| next-click         | triggers when the next button is clicked and current page changes                                                                            | the new current page              |

### Methods

| Name               | Description                                                                                                                                                       | Parameters                  |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| clearSelection     | used in multiple selection Table, clear user selection                                                                                                            | -                           |
| toggleRowSelection | used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected                    | row, selected               |
| toggleAllSelection | used in multiple selection Table, toggle select all and deselect all                                                                                              | -                           |
| toggleRowExpansion | used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed | row, expanded               |
| setCurrentRow      | used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection.                                             | row                         |
| clearSort          | clear sorting, restore data to the original order                                                                                                                 | -                           |
| clearFilter        | clear filters of the columns whose `columnKey` are passed in. If no params, clear all filters                                                                     | columnKeys                  |
| doLayout           | refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout                                       | -                           |
| sort               | sort Table manually. Property `prop` is used to set sort column, property `order` is used to set sort order                                                       | prop: string, order: string |

### Slots

| Name          | Description                                                                                                                                                                                   |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -             | anything inserted before the menu                                                                                                                                                             |
| menu          | control the menu display content, parameters { size, row, column, $index }                                                                                                                    |
| expand        | control the expand display content, parameters { row, column, $index }                                                                                                                        |
| append        | Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one. |
| [prop]        | control the `Item` display content, parameters { size, row, column, $index }                                                                                                                  |
| [prop]-header | control the `Item` header display content, parameters { size, column, $index }                                                                                                                |

::: tip Tip
[prop] the prop of columns
:::
