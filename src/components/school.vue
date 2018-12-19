<template>
  <div>
    school组件

    <button @click="toNews">向news组件传值</button>
  </div>
</template>

<script>
import VueEvent from '../model/vueEvent.js'
export default {
  name: 'school',
  data () {
    return {
      msg: 'school组件的值'
    }
  },
  methods: {
    toNews () {
      VueEvent.$emit('to-news', this.msg)
    }
  },
  mounted () {
    VueEvent.$on('to-school', data => {
      alert('获取到news组件的值>>>' + data)
    })
  }
}
</script>

<style scoped>

</style>
