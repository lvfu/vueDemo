<template>
  <div>
    <h1>组件示例1</h1>
    <my-button></my-button>
  </div>
</template>

<script>
import myButton from '../components/MyButton.vue'
const options = {
  components: {
    myButton,
  },

  data: function () {
    return {}
  },
}

export default options
</script>
