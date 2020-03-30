<template>
  <tr>
    <td><input class="form-control" type="text" v-model="description" /></td>
    <td><input class="form-control" type="time" v-model="start" /></td>
    <td><input class="form-control" type="time" v-model="end" /></td>
    <td></td>
    <td>
        <button class="btn btn-success" @click="addTime()">Add</button>
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

  methods: {
    addTime() {
      if(this.valid()) {
        this.$store.dispatch('times/addTime', {
          description: this.description,
          start: this.start,
          end: this.end,
        })

        this.start = ""
        this.end = ""
        this.description = ""
      }
    },

    valid() {
      if(!this.description || !this.start || !this.end) {
        alert('Provide description, start and end times.');
        return 0;
      }

      return 1;
    },
  }
}
</script>
