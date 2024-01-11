<script setup lang="ts">
import { computed, type ComputedRef } from 'vue'
import { useClipboard } from '@vueuse/core'

import { type Row } from '@/App.vue'

import { roundMinutes, minutesToString } from '@/helpers/time'

type Total = {
    description: string,
    value: number,
}

const props = defineProps<{
    rows: Row[]
}>()

const totals: ComputedRef<Total[]> = computed<Total[]>(() => {
    const index: Record<string, number> = {}
    const totals: Total[] = []

    props.rows.forEach((row: Row) => {
        if (index[row.description] === undefined) {
            totals.push({
                description: row.description,
                value: 0,
            })

            index[row.description] = totals.length - 1
        }

        totals[index[row.description]].value += (row.end - row.start)
    })

    return totals
})

const grandTotal: ComputedRef<number> = computed<number>(() => {
    return totals.value.reduce((t: number, n: Total) =>  t + n.value, 0)
})

const roundedTotal: ComputedRef<number> = computed<number>(() => {
    return totals.value.reduce((t: number, n: Total) =>  t + roundMinutes(n.value), 0)
})

const { copy } = useClipboard()
</script>

<template>
    <table class="w-2/5">
        <thead class="border-b-2 border-gray-500 text-left">
            <tr>
                <th class="p-2">Description</th>
                <th class="p-2">Total</th>
                <th class="p-2">Rounded Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(total, i) in totals" :key="`total-${i}`">
                <td class="p-2">
                    <button class="hover:bg-gray-700 px-1 rounded-md" @click="copy(total.description)">{{ total.description }}</button>
                </td>
                <td class="p-2">{{ minutesToString(total.value) }}</td>
                <td class="p-2">{{ minutesToString(roundMinutes(total.value)) }}</td>
            </tr>
        </tbody>
        <tfoot v-show="totals.length > 0" class="font-weight-bold">
            <tr class="font-bold border-t border-gray-500">
                <td class="p-2">Total</td>
                <td class="p-2">{{ minutesToString(grandTotal) }}</td>
                <td class="p-2">{{ minutesToString(roundedTotal) }}</td>
            </tr>
        </tfoot>
    </table>
</template>