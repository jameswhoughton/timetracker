<script setup lang="ts">
import { type WritableComputedRef, computed } from 'vue';

const props = defineProps<{
  modelValue: string,
}>()

const emits = defineEmits<{
  (e: 'update:model-value', v: string): void
}>()

const model: WritableComputedRef<string> = computed({
  get: (): string => props.modelValue,
  set: (val: string) => emits('update:model-value', val)
}) 
</script>

<template>
  <input class="w-full px-3 py-2 border rounded-md border-gray-500 bg-inherit" v-model="model" />
</template>