# Changelog

## 0.16.4

feat

- add defineOptions
- Form: add define function (`defineFormColumns` `defineFormMenuColumns` `defineFormSubmit`)
- Table: add define function (`defineTableColumns` `defineTableMenuColumns` `defineTableSelectionColumns` `defineTableIndexColumns` `defineTableExpandColumns`)
- Crud: add define function (`defineCrudColumns` `defineCrudMenuColumns` `defineCrudBeforeOpen` `defineCrudBeforeClose` `defineCrudSearch` `defineCrudSubmit`)
- Descriptions: add define function (`defineDescriptionsColumns`)

other

- type: add IsAny to check any

## 0.16.3

fix

- sync package name changes from @element-plus/icons-vue
- sync css-variables name changes from Element
- sync useLocale changes from Element

other

- refactor some function

## 0.16.2

fix

- sync css variable name changes from Element
- sync hook name change from Element
- Form|Layout: remove warning message

other

- type: optimization type DeepKeyof

## 0.16.1

fix

- Form: clear the default value

feat

- Form: add loading for slots menu-left and menu-right
- Crud: add loading for slots form-menu-left and form-menu-right

## 0.16.0

fix

- Form: missing icon on plus^1.2.0

feat

- Descriptions: support get nested value
- Table: support get nested value
- Form: support get and set nested value
- Crud: support get and set nested value

other

- type: optimization type DeepKeyof

## 0.15.0

breaking changes

- remove function findRouterPath

fix

- Menu: styles error
- ColumnSetting: missing icon on plus^1.2.0

feat

- Descriptions: add ProDescriptions
- Breadcrumb: realized by route.matched
- add components as icon in router

## 0.14.1

fix

- Crud: loss props to Table
- Layout: the header z-index too high
- Form: missing item in label slots

feat

- Select: add default slots

## 0.14.0

breaking changes

- remove useVModel, use useVModel form vueuse replace
- rename the GlobalComponents file element-pro-components to components
- rename findRouterItemListByPath to findRouterPath

fix

- Menu: error style on horizontal mode
- Table: display undefined when no value
- Select|TreeSelect|Radio|Checkbox: cannot choose value 0

feat

- Layout: add prop fixed-header, fixed-main, mode and more
- Tabs: close when leaving hidden router
- Breadcrumb: add use router alias name to lookup
- InputTag|AutocompleteTag: add max to limit the number of tag
- Table: add root node

other

- refactor(all components): optimize type by render
- types: optimization type

## 0.13.2

breaking changes

- use useWindowSize from vueuse replace resize-observer-polyfill
- use useAttrs from element-plus replace old useAttrs

fix

- Menu: missing style
- Form: the default slot is not displayed
- Crud: search slot error
- Crud: show menuColumns when without slot

feat

- Form: support i18n
- Crud: support i18n

other

- type: optimization type

## 0.13.1

fix

- Table: missing size in slot parameter
- Crud: slots error
- Form: styles error on children form

other

- type: optimization type

## 0.13.0

breaking changes

- Table: remove useTableSlotList
- Form: remove useFormSlotList
- Crud: remove useCrudAttrs

feat

- Table: Improve slot performance by render
- Form: Improve slot performance by render
- Crud: Improve slot performance by render
- chore: synchronize changes in element row and col
- type: add GlobalComponents (If you use VS Code with typescript to develop, You will need it)

```diff
// tsconfig.json
{
  "include": [
+   "node_modules/element-pro-components/types/element-pro-components.d.ts"
  ]
}
```

fix

- Menu: horizontal style error

## 0.12.0

breaking changes

- It is recommended to use component icons instead of font icons. reference [use-icon](https://tolking.github.io/element-pro-components/en-US/guide/router#use-icon)
- Use css-variables of element-plus to replace a lot of original css-variables. [Compare](https://github.com/tolking/element-pro-components/commit/d22b10187403b37b83b34136e65d53ffc83076a1#diff-ca526a7b1a2c5b894cbb9a7a2dea0320aa294e4885e86ab038dd013c4c8336a6)

feat

- Link: add components ProLink
- styles: add introduce styles through js

fix

- types: type error when building

## 0.11.2

fix

- styles: unconverted css-variables

## 0.11.1

feat

- TreeSelect: add prop only-select-leaf
- Layout: change the button of menu

fix

- Menu: routes lose reactive

other

- perf: use shallowRef replace ref

## 0.11.0

feat

- TreeSelect: add ProTreeSelect

fix

- styles: missing css style
- Form: styles error

## 0.10.1

feat

- Form: support load local component

fix

- Menu: display error when use hidden
- Crud: expand slot does not carry content
- Form: grid layout style error on element-plus 1.0.2-beta.53

## 0.10.0

breaking changes

- remove slots `left-header` `right-header` `bottom-header` in Layout
- remove `style.css`, need to use `styles/index.css` instead

```diff
- import 'element-pro-components/lib/style.css'
+ import 'element-pro-components/lib/styles/index.css'
```

feat

- refactor styles: support imports styles on demand

## 0.9.4

feat

- Form: bind the native component value

fix

- Table: error when show Array in data

## 0.9.3

breaking changes

- type: rename DeepTypeof to DeepKeyof

fix

- Crud: reset form data when closed dialog

## 0.9.2

feat

- Form: support use slots in columns by `props.slots`
- Form: optimization the children form styles
- Form: support use component input and textarea
- Table: add render in columns
- Table: change the default styles of pagination
- Select: add option group

fix

- Crud: resetForm not work when close edit form
- type: DeepTypeof error
- Install config is not merged when on demand

## 0.9.1

breaking changes

- remove funtion filterRouterByHidden

feat

- Tabs: add expose function
- optimize router

## 0.9.0

breaking changes

- change the utils function filterSlotDeep to filterFlat

feat

- ProColumnSetting: add ProColumnSetting to control the column of `Table` and `Crud`
- Crud: add action slot
- Table: add hide for columns

## 0.8.3

breaking changes

- Layout: will remove slots `left-header` `right-header` `bottom-header`, use `header-left` `header-right` `header-bottom` replace

feat

- Layout: add slots `footer` `main-top` `main-bottom` `header-left` `header-right` `header-bottom`

## 0.8.2

feat

- Crud: auto width for dialog

fix

- \_self does not exist on vue 3.0.11
- error tip on vue 3.0.11

## 0.8.1

feat

- Form: add grid layout form Form

## 0.8.0

breaking changes

- change the order of submit arg

```diff
export type ICrudSubmit = (
-  formType: ICrudFormType,
  close: () => void,
  done: () => void,
+ formType: ICrudFormType,
  isValid: boolean,
  invalidFields?: UnknownObject
) => void
```

feat

- Crud: add event `searchReset`

fix

- Form: disabled reset button when click submit
- Crud: miss ElButton
- Crud: error when menu is true
- Crud: miss search menu when menu is false
- Crud: miss form menu

other

- add Crud for vetur
- refactor docs

## 0.7.0

breaking changes

- Form: remove menu slot
- adjustment type prefix (Pro to I)

feat

- Crud: add ProCrud
- Form: add default buttons
- Form: add install options
- Form: add loading for submit button
- Form: add menu-left and menu-right slot
- add global menu config
- export components props type
- export all composables and types

fix

- Layout: routes is not work
- Menu: the meta may be undefined
- referencing functions directly from element-plus generates errors

## 0.6.1

fix

- Form|Table: loss of reactivity

## 0.6.0

breaking changes

- remove `index.min.css` `index.css`, need to use `style.css` instead
- remove `useHover` `useScroll` `useResize`
- change `usrFilterAttrs` to `useAttrs`

fix

- Layput: Table widening causes width error
- Form: display on phone when use inline
- Table|Tabs: whitout install function

other

- optimize export type

## 0.5.1

fix

- fix exports error

## 0.5.0

feat

- Layput: add prop for Menu, add transition animation
- Table: ignore pagination when without `total`, expose Table meahods
- Form: optimize the display on phone, expose form methods

fix

- Form: rules not work on sub-form

## 0.4.0

feat

- InputTag|AutocompleteTag: add `trigger` `type` `hit` `color` `effect` prop

fix

- `filterRouterByHidden` without check the deep children

other

- InputTag|AutocompleteTag: remover `tag` prop
- add tags and attributes components for vetur

## 0.3.0

feat

- add ProAutocompleteTag
- add ProCheckbox
- add ProCheckboxButton
- add ProRadio
- add ProRadioButton
- add ProSelect

fix

- without types

## 0.2.0

feat

- add ProTable
- add ProForm

## 0.1.0

rebuild

- vue2 -> vue3
- element-ui -> element-plus
- js -> ts
