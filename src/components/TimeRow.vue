<template>
  <tr>
    <td><input class="form-control" type="text" v-model="description" /></td>
    <td><input class="form-control" type="time" v-model="start" /></td>
    <td><input class="form-control" type="time" v-model="end" /></td>
    <td><Time :time="total" /></td>
    <td>
        <button class="btn btn-danger" @click="deleteTime()"><font-awesome-icon icon="times" /></button>
    </td>
  </tr>
</template>

<script>
import Time from './Time.vue'

export default {
  name: 'TimeRow',

  components: {
    Time,
  },

  props: {
    id: {
      type: String,
      required: true,
    }
  },

  computed: {
    description: {
      get() {
        return this.$store.state.times[this.id].description
      },
      set(value) {
        this.$store.commit('setValue', {
          id: this.id,
          type: 'description',
          value,
        })
      }
    },

    start: {
      get() {
        return this.$store.state.times[this.id].start
      },
      set(value) {
        this.$store.commit('setValue', {
          id: this.id,
          type: 'start',
          value,
        })
      }
    },

    end: {
      get() {
        return this.$store.state.times[this.id].end
      },
      set(value) {
        this.$store.commit('setValue', {
          id: this.id,
          type: 'end',
          value,
        })
      }
    },
    
    total() {
      const startTime = this.start.split(':');
      const endTime = this.end.split(':');
      const startTotal = parseInt(startTime[0] * 60) + parseInt(startTime[1]);
      const endTotal = parseInt(endTime[0]) * 60 + parseInt(endTime[1]);
      
      return  endTotal - startTotal;
    }
  },

  methods: {
    deleteTime() {
      this.$store.commit('deleteTime', this.id)
    },
  }
}
</script>
