<template>
  <div class="primary small"></div>
</template>

<script>
const options = {
  data: function () {
    return {}
  },
  methods: {},
}

export default options
</script>

<style>
.primary {
  background-color: #1d6ef9;
  color: #b5e3f1;
}

.danger {
  background-color: rgb(196, 50, 50);
  color: white;
}

.success {
  background-color: #a5cd4e;
  color: #3e5706;
}

.small {
  width: 40px;
  height: 20px;
  font-size: 10px;
  line-height: 20px;
  border-radius: 30px;
}

.middle {
  width: 50px;
  height: 25px;
  font-size: 14px;
  line-height: 25px;
  border-radius: 30px;
}

.large {
  width: 60px;
  height: 30px;
  font-size: 18px;
  line-height: 30px;
  border-radius: 30px;
}
</style>
