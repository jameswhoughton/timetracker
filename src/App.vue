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
              <th>Total</th>
              <th>Rounded Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(total, description) in roundedTotals" :key="`total-${description}`">
              <td>{{ description }}</td>
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
        <button v-show="Object.keys(this.$store.state.times).length" class="btn btn-danger w-100 mb-3" @click="clearTimes()">Clear All</button>
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
  },

  methods: {
    totalTime(type) {
      return Object.values(this.roundedTotals)
        .map(row => row[type])
        .reduce((a, b) => a + b, 0)
    },

    clearTimes() {
      if(confirm('Are you sure?')) {
        this.$store.commit('setTimes', {})
      }
    },
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
