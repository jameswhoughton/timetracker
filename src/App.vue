<template>
  <div class="container">
    <div>
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
          <time-row 
            v-for="(time, index) in times" 
            :key="index"
            :description="time.description"
            @update:description="val => $store.dispatch('updateDescription', { index, description: val })"
            :start="time.start"
            @update:start="val => $store.dispatch('updateStart', { index, start: val })"
            :end="time.end"
            @update:end="val => $store.dispatch('updateEnd', { index, end: val })"
            :total="time.total"
          >
            <Button 
              variant="danger" 
              display="block"
              @click="$store.dispatch('deleteTime', index)"
            >Delete</Button>
          </time-row>
          <time-row 
            v-model:description="description"
            v-model:start="start"
            v-model:end="end"
            :total="total"
          >
            <Button 
              v-show="start && !end" 
              variant="danger" 
              display="block"
              @click="stop"
            >Stop</Button>
            <Button 
              v-show="isValid" 
              variant="success" 
              display="block"
              @click="addTime"
            >Add</Button>
          </time-row>
        </tbody>
      </table>
    </div>
    <div class="totals">
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
      <Button 
        v-show="Object.keys(times).length" 
        @click="clearTimes()"
        display="block"
        variant="danger"
      >Clear All</Button>
    </div>
  </div>
</template>

<script>
import TimeRow from './components/TimeRow'
import Time from './components/Time'
import Button from './components/Button'

import { mapState, mapGetters } from 'vuex'
import { total } from './helpers/time'

export default {
  name: 'App',

  components: {
    TimeRow,
    Time,
    Button,
  },

  data() {
    return {
      description: "",
      start: "",
      end: "",
    }
  },

  computed: {
    ...mapState(['times']),
    
    ...mapGetters({
      totals: 'totals',
      roundedTotals: 'roundedTotals'
    }),

    isValid() {
      return this.description !== '' && this.start !== '' && this.end !== ''
    },

    total() {
      if(this.start === '' || this.end === '') { return 0 }
      
      return total(this.start, this.end)
    }
  },

  methods: {
    totalTime(type) {
      return Object.values(this.roundedTotals)
        .map(row => row[type])
        .reduce((a, b) => a + b, 0)
    },

    clearTimes() {
      if(confirm('Are you sure?')) {
        this.$store.commit('setTimes', [])
      }
    },

    addTime() {
      if(!this.isValid) {
        alert('Description, start and end time required.')
        return
      }

      this.$store.dispatch('addTime', {
        description: this.description,
        start: this.start,
        end: this.end,
      })

      this.resetForm()
    },

    resetForm() {
      this.start = ""
      this.end = ""
      this.description = ""
    },

    timeNow() {
      const time = new Date()
      const hours = time.getHours().toString().padStart(2, "0")
      const minutes = time.getMinutes().toString().padStart(2, "0")

      return `${hours}:${minutes}`
    },

    stop() {
      this.end = this.timeNow()
      
      if(this.isValid) {
        this.addTime()
      }
    }
  }, 

  watch: {
    description(val) {
      if(val !== '' && this.start === '') {
        this.start = this.timeNow()
      }
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica Neue,Arial;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 1140px;
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;
}

.totals {
  width: 25%;
}

table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
} 

th, td {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  text-align: inherit;
  font-weight: 700;
}

tfoot td {
  font-weight: 700;
}
</style>
