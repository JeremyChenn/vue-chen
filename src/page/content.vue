<template>
    <div>
      <h2>{{detailContent.title}}</h2>
      <content class="content" v-html="detailContent.content"></content>
    </div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      id: '',
      detailContent: []
    }
  },
  mounted () {
    debugger
    this.id = this.$route.params.id // 一般动态路由
    // let id = this.$route.query.id  // get方式传值

    this.$http.get('http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=' + this.id).then(data => {
      console.log(data)
      this.detailContent = data.body.result[0]
    })
  }
}
</script>

<style lang="scss" scoped>
  .content{
    img{
      max-width: 100%;
    }
  }
</style>
