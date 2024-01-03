<script lang="ts">
export type Row = {
  description: string,
  start: number,
  end: number
}
</script>

<script setup lang="ts">
import { type Ref, ref } from 'vue'

import TableTimes from '@/components/TableTimes.vue'
import TableTotals from '@/components/TableTotals.vue'
import TimeEntry from '@/components/TimeEntry.vue'

const rows: Ref<Row[]> = ref<Row[]>([])
const description: Ref<string> = ref('')
</script>

<template>
    <div class="flex gap-4 mb-4">
      <TimeEntry class="w-3/5 " @add-row="(row: Row) => rows.push(row)" :description="description" />
      <TableTotals :rows="rows" />
    </div>
    <TableTimes v-model="rows" @copy="(v: string) => description = v"/>
</template>