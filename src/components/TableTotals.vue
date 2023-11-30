<template>
    <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Total</th>
                <th>Rounded Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(total, description) in roundedTotals" :key="`total-${description}`">
                <td class="copy" v-clipboard:copy="description">{{ description }}</td>
                <td><Time :time="total.total" /></td>
                <td><Time :time="total.rounded" /></td>
            </tr>
        </tbody>
        <tfoot class="font-weight-bold">
            <tr>
                <td>Total</td>
                <td><Time :time="totalTime('total')" /></td>
                <td><Time :time="totalTime('rounded')" /></td>
            </tr>
        </tfoot>
    </table>
</template>