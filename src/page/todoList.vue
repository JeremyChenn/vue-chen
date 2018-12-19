<template>
  <div>
    <input type="text" v-model="todo" @keydown="add($event)">
    <hr>

    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="item.checked === false">
        <input class="processing" type="checkbox" @change="saveChangeStatus" v-model="item.checked">{{item}} --- <button @click="del(key)">删除</button>
      </li>
    </ul>

    <h2>已完成</h2>
    <ul class="finish">
      <li v-for="(item,key) in list" v-if="item.checked === true">
        <input type="checkbox" @change="saveChangeStatus" v-model="item.checked">{{item}} --- <button @click="del(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import storage from '../model/storage.js'
export default {
  data () {
    return {
      todo: '',
      list: []
    }
  },
  methods: {
    add (e) {
      if (e.keyCode === 13) {
        this.list.push({
          title: this.todo,
          checked: false
        })
        this.todo = ''
      }

      // localStorage.setItem('list', JSON.stringify(this.list))
      storage.set('list', this.list)
    },
    del (key) {
      this.list.splice(key, 1)

      // localStorage.setItem('list', JSON.stringify(this.list))
      storage.set('list', this.list)
    },
    saveChangeStatus () {
      // localStorage.setItem('list', JSON.stringify(this.list))
      storage.set('list', this.list)
    }
  },
  mounted () {
    // var list = JSON.parse(localStorage.getItem('list'))
    var list = storage.get('list')
    if (list) {
      this.list = list
    }
  }
}
</script>

<style lang="scss">
.finish {
  li {
    height: 30px;
    background: #eee;
  }
}
</style>
