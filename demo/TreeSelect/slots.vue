<template>
  <pro-tree-select
    v-model="select"
    :data="data"
  >
    <template #default="{ node, data: item, multiple }">
      <p
        :class="node.disabled && !multiple ? 'is-disabled' : ''"
        class="custom-tree-node"
      >
        <span>{{ item.label }}</span>
        <em>{{ item.value }}</em>
      </p>
    </template>
  </pro-tree-select>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const select = ref('')
    const data = ref([
      {
        label: '1',
        value: 1,
        disabled: true,
        children: [
          {
            value: 11,
            label: '1-1',
            children: [{ value: 111, label: '1-1-1' }],
          },
        ],
      },
      {
        value: 2,
        label: '2',
        children: [
          {
            value: 21,
            label: '2-1',
            disabled: true,
            children: [{ value: 211, label: '2-1-1' }],
          },
          {
            value: 22,
            label: '2-2',
            children: [{ value: 221, label: '2-2-1', disabled: true }],
          },
        ],
      },
      {
        value: 3,
        label: '3',
        children: [
          {
            value: 31,
            label: '3-1',
            children: [{ value: 311, label: '3-1-1' }],
          },
          {
            value: 32,
            label: '3-2',
            children: [{ value: 321, label: '3-2-1', disabled: true }],
          },
        ],
      },
    ])

    return {
      select,
      data,
    }
  },
})
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.custom-tree-node em {
  padding-right: 15px;
}
</style>
