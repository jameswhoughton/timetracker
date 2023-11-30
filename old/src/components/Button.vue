<template>
  <button :class="[variant, display]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
      validatior(value) {
        value.match(/(primary|success|danger)/)
      },
    },

    display: {
      type: String,
      default: 'inline',
    }
  }
}
</script>

<style>
button {
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

.block {
  display:block;
  width: 100%;
}

button:hover {
    color: #212529;
    text-decoration: none;
}

.primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}

.success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}
</style>