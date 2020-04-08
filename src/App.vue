<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
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
            <time-row v-for="id in ids" :key="`time-row-${id}`" :id="id"></time-row>
            <time-form></time-form>
          </tbody>
        </table>
      </div>
      <div class="col-3">
        <table class="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Rounded Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(total, description) in roundedTotals" :key="`total-${description}`">
              <td>{{ description }}</td>
              <td><Time :time="total" /></td>
            </tr>
          </tbody>
          <tfoot class="font-weight-bold">
            <tr>
              <td>Total</td>
              <td><Time :time="totalTime" /></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TimeRow from './components/TimeRow.vue'
import TimeForm from './components/TimeForm.vue'
import Time from './components/Time.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'App',

  components: {
    TimeRow,
    TimeForm,
    Time,
  },

  computed: {
    ...mapGetters({
      ids: 'ids',
      totals: 'totals',
      roundedTotals: 'roundedTotals'
    }),

    totalTime() {
      return Object.values(this.roundedTotals).reduce((a, b) => a + b, 0)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
