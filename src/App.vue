<script lang="ts">
export type Row = {
  description: string,
  start: number,
  end: number
}
</script>

<script setup lang="ts">
import { type Ref, ref, onMounted, watch } from 'vue'

import TableTimes from '@/components/TableTimes.vue'
import TableTotals from '@/components/TableTotals.vue'
import TimeEntry from '@/components/TimeEntry.vue'

const rows: Ref<Row[]> = ref<Row[]>([])
const description: Ref<string> = ref('')

const clear = (): void => {
  if (!confirm('Are you sure?')) return
  
  rows.value = []
}

onMounted(() => {
  const entries = localStorage.getItem('entries')

  if (entries === null) return

  try {
    rows.value = JSON.parse(entries) as Row[]
  } catch (e: any) {
    console.error(e.message)

    rows.value = []
  }
})

watch(rows, (v: Row[]) => {
  localStorage.setItem('entries', JSON.stringify(v))
})
</script>

<template>
    <div class="flex gap-4 mb-4">
      <TimeEntry class="w-3/5 " @add-row="(row: Row) => rows = [...rows, row]" v-model="description" />
      <div class="flex-grow">
        <TableTotals class="w-full mb-2" :rows="rows" />
        <button v-show="rows.length > 0" @click="clear" class="w-full py-2 bg-red-500 rounded-md hover:bg-red-600">Clear all</button>
      </div>
    </div>
    <TableTimes v-model="rows" @copy="(v: string) => description = v"/>
</template>