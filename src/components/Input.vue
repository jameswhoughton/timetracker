<script setup lang="ts">
import { type WritableComputedRef, computed } from 'vue';

const props = defineProps<{
  type: 'text' | 'time',
  modelValue: string,
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

const model: WritableComputedRef<string> = computed({
  get: (): string => props.modelValue,
  set: (val: string) => emits('update:modelValue', val)
}) 
</script>

<template>
  <input :type="type" :value="model" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
  name: 'Input',

  emits: ['update:modelValue'],

  props: {
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return value.match(/(text|time)/)
      }
    },

    modelValue: {
      default: '',
    }
  },
}
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
  font-family: Helvetica Neue, Arial;
  box-sizing: border-box;
}

input:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
</style>