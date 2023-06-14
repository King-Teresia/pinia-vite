import { defineStore } from 'pinia'
// 创建hook  hook一般都是以use为开头的 比如usexxx 
const useUserStore = defineStore("user", {
    state() {
        return {
            age: 18,
            name: "amiya"
        }
    },
    getters: {
        doubleAge: (state) => {
            return state.age * 2
        },
        getMessage(): string {
            return this.age + this.name

        }
    }

})

export default useUserStore