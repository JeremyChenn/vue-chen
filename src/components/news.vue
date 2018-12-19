<template>
  <div>
    news组件

    <button @click="toSchool">向school件传值</button>
  </div>
</template>

<script>
import VueEvent from '../model/vueEvent.js'
export default {
  name: 'news',
  data () {
    return {
      newsTitle: '第一新闻'
    }
  },
  methods: {
    toSchool () {
      VueEvent.$emit('to-school', this.newsTitle)
    }
  },
  mounted () {
    VueEvent.$on('to-news', data => {
      alert('获取到school组件的值>>>' + data)
    })
  }
}
</script>

<style scoped>

</style>
