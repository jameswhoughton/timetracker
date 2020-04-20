<template>
  <tr>
    <td><input class="form-control" type="text" v-model="description" /></td>
    <td><input class="form-control" type="time" v-model="start" /></td>
    <td><input class="form-control" type="time" v-model="end" /></td>
    <td></td>
    <td class="buttons">
        <button 
          v-show="!this.start" 
          class="btn btn-success" 
          @click="setNowTime('start')"
        ><font-awesome-icon icon="play" /></button>
        <button 
          v-show="this.start && !this.end" 
          class="btn btn-danger" 
          @click="setNowTime('end')"
        ><font-awesome-icon icon="stop" /></button>
        <button 
          v-show="this.start && this.end" 
          class="btn btn-warning" 
          @click="reset()"
        ><font-awesome-icon icon="undo" /></button>
        <button v-show="valid()" class="btn btn-success ml-1" @click="addTime()">Add</button>
        <button v-show="Object.keys(this.$store.state.times).length" class="btn btn-danger ml-1" @click="clearTimes()">Clear</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TimeForm',

  data() {
    return {
      description: "",
      start: "",
      end: "",
    }
  },

  computed: {
    started() {
      return this.start.length > 0
    }
  },

  methods: {
    addTime() {
      if(this.valid()) {
        this.$store.dispatch('addTime', {
          description: this.description,
          start: this.start,
          end: this.end,
        })

        this.reset()
      }
    },

    reset() {
      this.start = ""
      this.end = ""
      this.description = ""
    },

    clearTimes() {
      if(confirm('Are you sure?')) {
        this.$store.commit('setTimes', {})
      }
    },

    valid() {
      if(!this.description || !this.start || !this.end) {
        return 0;
      }

      return 1;
    },

    setNowTime(type) {
      const time = new Date()
      const hours = time.getHours().toString().padStart(2, "0")
      const minutes = time.getMinutes().toString().padStart(2, "0")

      this[type] = `${hours}:${minutes}`
    }
  }
}
</script>

<style scoped>
.buttons {
  width:200px;
}
</style>
