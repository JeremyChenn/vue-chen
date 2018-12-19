<template>
  <div>
    <h1>头部组件 --- {{title}} --- {{secondParam}}</h1>

    <hr>

    <button @click="fn('子组建向Home组件传值')">子组建执行Home组件的方法</button>

    <hr>

    {{home.title}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title', 'secondParam', 'fn', 'home'],
  methods: {

  },
  mounted () {
    alert(this.secondParam)
    this.fn('123')
    alert(this.home.title)
  }
}
</script>

<style scoped>

</style>
