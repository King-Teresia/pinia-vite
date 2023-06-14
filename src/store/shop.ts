import { defineStore } from 'pinia'
interface iGoods {
    name: string,
    age: number,
    num?: number,
    select?: boolean
}
const useShopStore = defineStore('shop', {
    state() {
        return {
            goods: [
                {
                    name: "amiya",
                    age: 15
                }, {
                    name: "kalist",
                    age: 20
                }, {
                    name: "teresia",
                    age: 21
                }
            ] as iGoods[],
            isAllSelect: false
        }
    },

    getters: {
        total(): number {
            return this.goods.filter(item => item.select).reduce((total, item) => total += (item.num || 1) * item.age, 0)//reduce里的这个0 指的是第一次运算的时候 total的值
        }
    },

    actions: {
        changeNum(index: number, num: number) {
            this.goods[index].num = this.goods[index].num || 1
            this.goods[index].num! += num

        },
        allSelect() {
            this.goods.forEach(item => {
                item.select = this.isAllSelect
            });
        },
        singleSelect() {
            // 用arrary.every 方法 
            this.isAllSelect = this.goods.every(item => item.select)
        }
    }
    ,

})
export default useShopStore