<template>
  <div id="home">
    首页组件

    <v-header :title="mark" :secondParam="markII" :fn ="getHomeData" :home="this"></v-header>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components: {
    'v-header': Header
  },
  data () {
    return {
      mark: '首页',
      markII: '第二个参数',
      title: '测试传整个组件'
    }
  },
  methods: {
    getHomeData (msg) {
      alert('Home组件的方法' + '>>>>>' + msg)
    }
  }
}
</script>

<style scoped>

</style>
