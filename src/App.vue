<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<v-home></v-home>
    <hr>-->

    <!--<v-test v-if="flag"></v-test>
    <button @click="flag = !flag">挂载或卸载子组建</button>
    <hr>-->

    <ul>
      <li>
        {{list.message}}
      </li>
    </ul>

    <hr>

    <router-link to="/index">跳转index页面</router-link>
    <router-link to="/todoList">跳转todoList页面</router-link>
    <router-link to="/user/useradd">跳转user页面</router-link>

    <router-view/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Test from './components/test01.vue'
import Axios from 'axios'
export default {
  components: {
    'v-home': Home,
    'v-test': Test
  },
  data () {
    return {
      todo: '',
      flag: true,
      list: []
    }
  },
  methods: {
    getVueResourceData () {
      this.$http.get('http://www.phonegap100.com/appapi.php?=getProtalList&catid=20&page=1').then(response => {
        console.log(response)
        this.list = response.body
      }, err => {
        console.log(err)
      })
    },
    getAxiosData () {
      debugger
      Axios.get('http://www.phonegap100.com/appapi.php?=getProtalList&catid=20&page=1')
        .then(response => {
          console.log(response)
          this.list = response.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    // this.getVueResourceData()
    this.getAxiosData()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
