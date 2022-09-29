<template>
  <div>
    <h1>组件示例</h1>
    <my-button type="primary" size="small">1</my-button>
    <my-button type="danger" size="middle">2</my-button>
    <my-button type="success" size="large">3</my-button>
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
