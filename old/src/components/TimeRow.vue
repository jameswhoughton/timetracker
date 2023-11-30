<template>
  <tr>
    <td><Input :modelValue="description" @update:modelValue=" val => $emit('update:description', val)" /></td>
    <td><Input type="time" :modelValue="start" @update:modelValue=" val => $emit('update:start', val)" /></td>
    <td><Input type="time" :modelValue="end" @update:modelValue=" val => $emit('update:end', val)" /></td>
    <td><Time :time="total" /></td>
    <td class="action">
        <slot>

        </slot>
    </td>
  </tr>
</template>

<script>
import Time from './Time'
import Input from './Input'

export default {
  name: 'TimeRow',

  emits: [
    'update:description',
    'update:start',
    'update:end',
    'update',
  ],

  components: {
    Time,
    Input,
  },

  props: {
    description: {
      type: String,
      default: '',
    },

    start: {
      type: String,
      default: null,
    },

    end: {
      type: String,
      default: null,
    },

    total: {
      type: Number,
      default: 0,
    }
  },
}
</script>

<style scoped>
.action {
  width: 160px;
}
</style>
