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
          @click="stop()"
        ><font-awesome-icon icon="stop" /></button>
        <button 
          v-show="this.start && this.end" 
          class="btn btn-warning" 
          @click="reset()"
        ><font-awesome-icon icon="undo" /></button>
        <button class="btn btn-success ml-1" @click="addTime()"><font-awesome-icon icon="plus" /></button>
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
      if(!this.valid()) {
        alert('Description, start and end time required.')
        return
      }

      this.$store.dispatch('addTime', {
        description: this.description,
        start: this.start,
        end: this.end,
      })

      this.reset()
    },

    reset() {
      this.start = ""
      this.end = ""
      this.description = ""
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
    },

    stop() {
      this.setNowTime('end')
      
      if(this.valid()) {
        this.addTime()
      }
    }
  }
}
</script>

<style scoped>
.buttons {
  width:200px;
}
</style>
