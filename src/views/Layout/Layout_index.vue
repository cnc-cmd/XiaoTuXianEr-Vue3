<script setup>

import Layout_Nav from './components/Layout_Nav.vue'
import Layout_Header from './components/Layout_Header.vue'
import Layout_Footer from './components/Layout_Footer.vue'
import Layout_Fixed from './components/Layout_fixed.vue'

</script>

<template>
    <Layout_Fixed />
    <Layout_Nav />
    <Layout_Header />
    <!-- 二级路由出口组件-->
    <RouterView />
    <Layout_Footer />
</template>