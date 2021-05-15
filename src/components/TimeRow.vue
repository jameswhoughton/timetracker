<template>
  <tr>
    <td><Input v-model="description" /></td>
    <td><Input type="time" v-model="start" /></td>
    <td><Input type="time" v-model="end" /></td>
    <td><Time :time="total" /></td>
    <td class="action">
        <slot>

        </slot>
    </td>
  </tr>
</template>

<script>
import Time from './Time'
import Input from './Input'

export default {
  name: 'TimeRow',

  components: {
    Time,
    Input,
  },

  props: {
    time: {
      type: Object,
      default: () => {
        return {
          description: '',
          start: '',
          end: '',
        }
      },
    }
  },

  computed: {
    description: {
      get() {
        return this.time.description
      },
      set(val) {
        this.$emit('change', {
          description: val,
          start: this.start,
          end: this.end,
        })
      }
    },

    start: {
      get() {
        return this.time.start
      },
      set(val) {
        this.$emit('change', {
          description: this.description,
          start: val,
          end: this.end,
        })
      }
    },

    end: {
      get() {
        return this.time.end
      },
      set(val) {
        this.$emit('change', {
          description: this.description,
          start: this.start,
          end: val,
        })
      }
    },
    
    total() {
      if(!this.state && !this.end) { return ' '}
      
      const startTime = this.start.split(':');
      const endTime = this.end.split(':');
      const startTotal = parseInt(startTime[0] * 60) + parseInt(startTime[1]);
      const endTotal = parseInt(endTime[0]) * 60 + parseInt(endTime[1]);
      
      return  endTotal - startTotal;
    }
  },
}
</script>

<style scoped>
.action {
  width: 160px;
}
</style>