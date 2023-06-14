<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import useUserStore from './store/use'
const useStore = useUserStore()
const addAge = () => {
  useStore.age++
}
</script>


<style scoped></style>
