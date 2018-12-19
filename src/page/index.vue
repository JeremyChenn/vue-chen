<template>
  <div>
    <ul>
      <li v-for="(item, key) in list">
        <!--<router-link :to="'/content/'+key">{{item.id}}</router-link>-->
        <router-link :to="'/content?id='+key">{{item.id}}</router-link>
      </li>
    </ul>
    <button @click="setList">设置List</button>
    <div>
      设置list
    </div>

    <hr>
    <button @click="eventFn($event)">获取event对象</button>

    <hr>
    <v-school></v-school>

    <hr>
    <v-news></v-news>

    <hr>
    <ul>
      <li v-for="(item, key) in listII">
        <router-link :to="'/content/'+item.aid">{{key}}---{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import School from '../components/school.vue'
import News from '../components/news.vue'
export default {
  components: {
    'v-school': School,
    'v-news': News
  },
  data () {
    return {
      list: [],
      listII: []
    }
  },
  methods: {
    setList () {
      this.list = [
        {id: '123', title: '第一个title'},
        {id: '456', title: '第二个title'},
        {id: '789', title: '第三个title'}
      ]
    },
    eventFn (e) {
      console.log(e.srcElement)
    }
  },
  mounted () {
    this.$http.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1').then(data => {
      console.log(data)
      this.listII = data.body.result
    }, err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
