import {
  Component,
  computed,
  DefineComponent,
  defineComponent,
  h,
  PropType,
  resolveDynamicComponent,
  Slot,
} from 'vue'
import { isFunction, isObject } from '../utils/index'
import type { StringObject } from '../types/index'

interface TargetEvent {
  target: {
    checked: unknown
    value: unknown
  }
}

export default defineComponent({
  name: 'ProFormComponent',
  props: {
    modelValue: {
      type: null,
      default: undefined,
    },
    is: {
      type: [String, Object] as PropType<string | Component>,
      default: 'span',
    },
    slots: {
      type: [Function, Object, String],
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    const type = computed(() => {
      return resolveDynamicComponent(props.is) as DefineComponent
    })
    const prop = computed(() => {
      const _props: StringObject = {
        ...attrs,
        modelValue: props.modelValue,
        'onUpdate:modelValue': (value: unknown) =>
          emit('update:modelValue', value),
      }
      if (
        props.is === 'input' ||
        props.is === 'select' ||
        props.is === 'textarea'
      ) {
        if (
          props.is === 'select' ||
          attrs.type === 'checkbox' ||
          attrs.type === 'radio'
        ) {
          _props.checked = props.modelValue
          _props.onChange = (value: TargetEvent) =>
            emit('update:modelValue', value.target.checked)
        } else {
          _props.value = props.modelValue
          _props.onInput = (value: TargetEvent) =>
            emit('update:modelValue', value.target.value)
        }
        _props.modelValue = undefined
      }
      return _props
    })
    const children = computed(() => {
      if (isFunction(props.slots)) {
        return props.slots as Slot
      } else if (isObject(props.slots)) {
        const obj: StringObject = {}

        for (const key in props.slots) {
          const value = props.slots[key]
          obj[key] = isFunction(value) ? value : () => value
        }

        return obj
      } else if (props.slots) {
        return () => props.slots
      } else {
        return undefined
      }
    })

    return () => h(type.value, prop.value, children.value)
  },
})
