<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person',
    setup() {
      // console.log(this)
      // setup()函数中的this是undefined，Vue3中已经弱化this了
      // name, age, tel, 都不是响应式数据了
      let name = "张三";
      let age = 23;
      let tel = 13888888888
      // 方法
      function changeName() {
        name = 'zhang-san'
        console.log(name)
      }
      function changeAge() {
        age = 10
        console.log(age)
      }
      function showTel() {
        alert(tel)
      }
      // 将数据、方法交出去，模板中才可以使用
      return {name, age, changeName, changeAge, showTel}
    }
  }
</script>

<style>
  .person {
    margin: 5px;
    padding: 10px;
    box-shadow: 0 0 10px;
    border: 1px solid;
    border-radius: 5px;
    background-color: skyblue;
    
  }
</style>