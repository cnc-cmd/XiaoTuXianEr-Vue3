<script setup>

import Layout_Nav from './components/Layout_Nav.vue'
import Layout_Header from './components/Layout_Header.vue'
import Layout_Footer from './components/Layout_Footer.vue'
import Layout_Fixed from './components/Layout_Fixed.vue'

import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())

</script>

<template>
    <Layout_Fixed />
    <Layout_Nav />
    <Layout_Header />
    <!-- 二级路由出口组件-->
    <RouterView />
    <Layout_Footer />
</template>