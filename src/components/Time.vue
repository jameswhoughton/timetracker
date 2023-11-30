<script setup lang="ts">
import { type ComputedRef, computed } from 'vue'

const props = defineProps<{
  time: number,
}>()

const formattedTime: ComputedRef<string> = computed<string>((): string => {
  if (props.time === 0) return ''

  return `${Math.floor(props.time / 60).toString().padStart(2, '0')}:${Math.abs(props.time % 60).toString().padStart(2, '0')}`
})
</script>

<template>
  <span>{{ formattedTime }}</span>
</template>
