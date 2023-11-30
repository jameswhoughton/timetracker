<template>
    <table class="table">
        <thead>
            <tr>
                <th>Description</th>
                <th>Start</th>
                <th>End</th>
                <th>Total</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <time-row v-for="(time, index) in times" :key="index" :description="time.description"
                @update:description="val => $store.dispatch('updateDescription', { index, description: val })"
                :start="time.start" @update:start="val => $store.dispatch('updateStart', { index, start: val })"
                :end="time.end" @update:end="val => $store.dispatch('updateEnd', { index, end: val })" :total="time.total">
                <Button variant="danger" display="block" @click="$store.dispatch('deleteTime', index)">Delete</Button>
            </time-row>
            <time-row v-model:description="description" v-model:start="start" v-model:end="end" :total="total">
                <Button v-show="start && !end" variant="danger" display="block" @click="stop">Stop</Button>
                <Button v-show="isValid" variant="success" display="block" @click="addTime">Add</Button>
            </time-row>
        </tbody>
    </table>
</template>
