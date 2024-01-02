<script setup lang="ts">
import { ref, type Ref, type ComputedRef, computed, watch } from 'vue'

import InputTime from './InputTime.vue'
import InputText from './InputText.vue'
import { type Row } from '../App.vue'

const props = defineProps<{
  description: string,
}>()

const description: Ref<string> = ref<string>(props.description)
const start: Ref<number> = ref<number>(0)
const end: Ref<number> = ref<number>(0)

const emits = defineEmits<{
  (e: 'add-row', v: Row): void
}>()

const isDisabled: ComputedRef<boolean> = computed<boolean>(() => {
  // If any fields are empty
  if (description.value === '' || start.value === 0 || end.value === 0) {
    return true
  }

  // If start is after or equal to end
  if (start.value >= end.value) {
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
  emits('add-row', {
    description: description.value,
    start: start.value,
    end: end.value,
  })

  reset()
}

watch(() => props.description, (v: string) => {
  description.value = v
})

watch(description, (v: string) => {
  if (start.value === 0 && v !== '') {
    const now = new Date
    start.value = now.getHours() * 60 + now.getMinutes()
  }
})

</script>

<template>
  <div class="flex gap-3 self-start">
    <InputText v-model="description" />
    <InputTime v-model="start" />
    <InputTime v-model="end" />
    <button class="px-4 py-2 bg-teal-500 rounded-md disabled:opacity-50 disabled:bg-teal-500 hover:bg-teal-600" @click="add" :disabled="isDisabled">add</button>
  </div>
</template>