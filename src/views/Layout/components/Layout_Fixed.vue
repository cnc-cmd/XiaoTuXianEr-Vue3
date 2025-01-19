<script setup>

import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores/category'
const { y } = useScroll(window)
const categoryStore = useCategoryStore()
</script>

<template>
  
  <div class="app-header-sticky" :class="{ show: y > 120 }">

    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
       <ul class="app-header-nav ">
          <li class="home">
                <RouterLink to="/">首页</RouterLink>
          </li>
          <li class = "home" v-for="item in categoryStore.categoryList" :key="item.id">
              <RouterLink to="/">{{ item.name }}</RouterLink>
          </li>
      </ul>

      <!-- <LayoutHeaderUl /> -->
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .app-header-nav{ 
      display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin-left: 40px;

    li {
      position: relative;
      margin-right: 40px;
      font-size: 18px;
      color: #333;
      font-weight: 100px;
    }

    a:hover {
        color: $xtxColor;
      }
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}
</style>