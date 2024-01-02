<script setup lang="ts">
import { type WritableComputedRef, computed } from 'vue'

import { minutesToString } from '@/helpers/time'

import InputTime from '@/components/InputTime.vue'
import IconCopy from './IconCopy.vue'
import { type Row } from '@/App.vue'
import InputText from '@/components/InputText.vue';

const props = defineProps<{
    modelValue: Row[]
}>()

const emits = defineEmits<{
    (e: 'update:model-value', v: Row[]): void,
    (e: 'copy', v: string): void,
}>()

const rows: WritableComputedRef<Row[]> = computed<Row[]>({
    get: (): Row[] => props.modelValue,
    set: (val: Row[]) => emits('update:model-value', val)
})

const removeRow =  (i: number) => {
    rows.value.splice(i)
}
</script>

<template>
    <div class="rounded-md overflow-hidden">
        <table class="w-full">
            <thead class="border-b-2 border-gray-500 text-left">
                <tr>
                    <th class="p-2">Description</th>
                    <th class="p-2">Start</th>
                    <th class="p-2">End</th>
                    <th class="p-2">Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, i) in rows" :key="i">
                    <td class="p-2 flex gap-2">
                        <InputText v-model="rows[i].description" />
                        <button @click="emits('copy', rows[i].description)">
                            <IconCopy />
                        </button>
                    </td>
                    <td class="p-2">
                        <InputTime v-model="rows[i].start" />
                    </td>
                    <td class="p-2">
                        <InputTime v-model="rows[i].end" />
                    </td>
                    <td>{{ minutesToString(rows[i].end - rows[i].start) }}</td>
                    <td>
                        <button class="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600" @click="removeRow(i)">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
