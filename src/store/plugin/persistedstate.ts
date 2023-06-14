// 数据持久化
import { PiniaPluginContext } from 'pinia'
const persistedstate = (context: PiniaPluginContext) => {
    // 初始化的时候会执行吗
    console.log("初始化的时候会执行吗", context.store.$id);//会

    // 把持久化的个性化数据放回来
    const currentState = JSON.parse(localStorage.getItem(context.store.$id) || "{}")//取最新的个性化数据并且填充/更新到state里，修改state有三种方法 见OneNote笔记
    context.store.$patch(currentState)

    // 监听,只要state变化就调用(这里是存放个性化数据)
    context.store.$subscribe((_store, state) => {
        console.log("只要store中的state状态发生变化,那我就会被调用");
        console.log(_store);//ok能拿到_store
        localStorage.setItem(_store.storeId, JSON.stringify(state))
    }, {
        detached: true//组件就算卸载 依赖依然存在
    })

}

export default persistedstate