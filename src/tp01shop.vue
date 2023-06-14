<template>
    <div>
        我是购物车小练习
    </div>
    <div>全选 <input v-model="useShop.isAllSelect" @change="changeAllSelect" type="checkbox" name="" id=""></div>

    <div v-for="(item, index) in useShop.goods" :key="index">
        <input type="checkbox" v-model="item.select" @change="singleChange" name="" id="">
        商品名称: {{ item.name }},商品价格(多大年龄就有多少源石):{{ item.age }}
        <button @click="changeNum(index, 1)">+</button>{{ item.num || 1 }}
        <button @click="changeNum(index, -1)">-</button>
        小计{{ item.age * (item.num || 1) }}
    </div>
    <div>
        总计:{{ useShop.total }}
    </div>
</template>

<script setup lang="ts">
import useShopStore from './store/shop'
const useShop = useShopStore()

const changeNum = (index: number, num: number) => {
    useShop.changeNum(index, num)
}
const changeAllSelect = () => {
    useShop.allSelect()
}

const singleChange = () => {
    useShop.singleSelect()

}
</script>


<style></style>