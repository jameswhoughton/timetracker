<template>
  <tr>
    <td><Input v-model="description" /></td>
    <td><Input type="time" v-model="start" /></td>
    <td><Input type="time" v-model="end" /></td>
    <td><Time :time="time.total" /></td>
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
          total: 0,
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

        if(this.start === '') {
          const time = new Date()
          const hours = time.getHours().toString().padStart(2, "0")
          const minutes = time.getMinutes().toString().padStart(2, "0")
          this.start = `${hours}:${minutes}`
        }
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
  },
}
</script>

<style scoped>
.action {
  width: 160px;
}
</style>
