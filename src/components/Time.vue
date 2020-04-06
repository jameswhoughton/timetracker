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
    }
  },

  computed: {
    formattedTime() {
      return `${Math.floor(this.time / 60).toString().padStart(2, 0)}:${Math.abs(this.time % 60).toString().padStart(2, 0)}`
    }
  }
}
</script>