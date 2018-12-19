<template>
  <div>
    子组件
  </div>
</template>

<script>
export default {
  beforeCreate () {
    console.log(1)
  },
  created () {
    console.log(2)
  },
  beforeMount () {
    console.log(3)
  },
  mounted () {
    console.log(4)
  },
  beforeUpdate () {
    console.log(5)
  },
  updated () {
    console.log(6)
  },
  beforeDestory () {
    console.log(7)
  },
  destoryed () {
    console.log(8)
  }
}
</script>

<style scoped>

</style>
