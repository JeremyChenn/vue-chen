<template>
  <div>
    <div class="user">
      <div class="userLeft">
        <ul>
          <li>
            <router-link to="/user/useradd">用户新增</router-link>
          </li>
          <li>
            <router-link to="/user/usershow">用户显示</router-link>
          </li>
        </ul>
      </div>
      <div class="userRight">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .user{
    display: flex;
    .userLeft{
      width: 200px;
    }
    .userRight{
      flex: 1  // 父级元素定义display:flex,子元素宽度用flex来定义,flex:1 是均分父级元素。占的比例相同
    }
  }
</style>
