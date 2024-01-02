<script setup lang="ts">
import { computed, type WritableComputedRef } from 'vue';

const props = defineProps<{
  modelValue: number,
}>()

const emits = defineEmits<{
  (e:'update:modelValue', v: number): void,
}>()

const toMinutes = (time: string): number => {
  const parts = time.split(':')
  const hours = parseInt(parts[0])
  const minutes = parseInt(parts[1])
  
  return hours * 60 + minutes
}

const toTime = (timeInMinutes: number): string => {
  const hours = Math.floor(timeInMinutes / 60)
  const minutes = timeInMinutes - (hours * 60)

  return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0')
}

const model: WritableComputedRef<string> = computed<string>({
  get: (): string => toTime(props.modelValue),
  set: (v: string) => emits('update:modelValue', toMinutes(v))
})
</script>

<template>
<div>
  <input class="w-full px-3 py-2 border rounded-md border-gray-500 bg-inherit" type="time" v-model="model" />
</div>
</template>