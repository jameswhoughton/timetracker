<template>
  <span>{{ formattedTime }}</span>
</template>

<script>
export default {
  name: 'Time',
  props: {
    time: {
      type: Number,
      required: true,
    },

    round: {
      type: Boolean,
      required: false,
      default: false,
    }
  },

  computed: {
    formattedTime() {
      var time = this.time
      if(this.round) {
        time = this.roundTime(time)
      }

      return `${Math.floor(time / 60).toString().padStart(2, 0)}:${Math.abs(time % 60).toString().padStart(2, 0)}`
    }
  },

  methods: {
    roundTime(time) {
      return 15 * Math.round(time / 15);
    }
  }
}
</script>