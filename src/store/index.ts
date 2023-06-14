import { createPinia } from 'pinia'
const pinia = createPinia()
export default pinia

// 引入插件 并使用
import persistedstate from './plugin/persistedstate'
pinia.use(persistedstate)