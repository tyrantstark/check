export default function generateRoutes(arr) {
    // 准备一个框
    let _arr = []
    // 遍历原始数组
    arr.forEach(obj => {
        // 如果有二级菜单
        if (obj.children.length !== 0) {
            obj.children.forEach(_obj => {
                _arr.push({
                    path: _obj.router,
                    meta: {
                        title: _obj.name
                    },
                    component: () =>
                        import(`@/views${_obj.router}`)
                })
            })
        } else {
            // 如果只有一级菜单
            _arr.push({
                path: obj.router,
                meta: {
                    title: obj.name
                },
                component: () =>
                    import(`@/views${obj.router}`)
            })
        }
    })
    // 构建多级路由+404路由配置表
    return [{
        path: "/",
        redirect: "/signin",
        component: () =>
            import("@/layout"),
        children: _arr
    }, {
        path: "*",
        meta: {
            title: "404"
        },
        component: () =>
            import("@/views/404")
    }]
}