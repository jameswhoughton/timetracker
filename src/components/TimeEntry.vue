<script setup lang="ts">
import { ref, type Ref, type ComputedRef, type WritableComputedRef, computed, watch } from 'vue'

import InputTime from './InputTime.vue'
import InputText from './InputText.vue'
import { type Row } from '../App.vue'

const props = defineProps<{
  modelValue: string,
}>()

const emits = defineEmits<{
  (e: 'add-row', v: Row): void
  (e: 'update:modelValue', v: string): void
}>()

const description: WritableComputedRef<string> = computed<string>({
  get: () => props.modelValue,
  set: (v: string) => emits('update:modelValue', v),
})
const start: Ref<number> = ref<number>(0)
const end: Ref<number> = ref<number>(0)

const isDisabled: ComputedRef<boolean> = computed<boolean>(() => {
  // If description or start fields are empty
  if (description.value === '' || start.value === 0) {
    return true
  }

  // If start is after or equal to end
  if (end.value !== 0 && start.value >= end.value) {
    return true
  }

  return false
})

const reset = () => {
  description.value = ''
  start.value = 0
  end.value = 0
}

const add = () => {
  if (end.value === 0) {
    end.value = nowInMinutes()
  }
  
  emits('add-row', {
    description: description.value,
    start: start.value,
    end: end.value,
  })

  reset()
}

const nowInMinutes = (): number => {
  const now = new Date
  
  return now.getHours() * 60 + now.getMinutes()
}

watch(description, (v: string) => {
  if (start.value === 0 && v !== '') {
    start.value = nowInMinutes()
  }
})

</script>

<template>
  <form class="flex gap-3 self-start" @submit.prevent="add">
    <InputText v-model="description" />
    <InputTime v-model="start" />
    <InputTime v-model="end" />
    <button class="px-4 py-2 bg-teal-500 rounded-md disabled:opacity-50 disabled:bg-teal-500 hover:bg-teal-600" type="submit" :disabled="isDisabled">add</button>
  </form>
</template>