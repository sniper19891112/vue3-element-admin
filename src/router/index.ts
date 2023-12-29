import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const Layout = () => import("@/layout/index.vue");

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue"),
      },
    ],
  },

  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: { hidden: true },
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: { title: "dashboard", icon: "homepage", affix: true },
      },
      {
        path: "401",
        component: () => import("@/views/error-page/401.vue"),
        meta: { hidden: true },
      },
      {
        path: "404",
        component: () => import("@/views/error-page/404.vue"),
        meta: { hidden: true },
      },
    ],
  },
];

export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: 'Permission',
    meta: {
      hidden: false,
      icon: "system",
      keepAlive: true,
      roles: ["ADMIN"],
      title: "数据分析",
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page.vue'),
        name: 'PagePermission',
        meta: {
          title: '新增用户',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '活跃用户',
        meta: {
          title: '活跃用户'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role.vue'),
        name: '付费率',
        meta: {
          title: '付费率',
          roles: ['admin']
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '用户留存',
        meta: {
          title: '用户留存'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '用户习惯',
        meta: {
          title: '用户习惯'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '游戏报表',
        meta: {
          title: '游戏报表'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '平台报表',
        meta: {
          title: '平台报表'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '活动报表',
        meta: {
          title: '活动报表'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '提充报表',
        meta: {
          title: '提充报表'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '数据总表',
        meta: {
          title: '数据总表'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '数据总表',
        meta: {
          title: '数据总表'
          // if do not set roles, means: this page does not require permission
        }
      },
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: 'Permission',
    meta: {
      hidden: false,
      icon: "system",
      keepAlive: true,
      roles: ["ADMIN"],
      title: "玩家管理",
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page.vue'),
        name: 'PagePermission',
        meta: {
          title: '用户列表',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '活跃用户',
        meta: {
          title: '用户流水'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role.vue'),
        name: '付费率',
        meta: {
          title: 'VIP管理',
          roles: ['admin']
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '用户留存',
        meta: {
          title: '代理管理'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '用户习惯',
        meta: {
          title: '赠送管理'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '预警管理',
        meta: {
          title: '预警管理'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '平台报表',
        meta: {
          title: '信息推送'
          // if do not set roles, means: this page does not require permission
        }
      },
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: '1',
    meta: {
      hidden: false,
      icon: "system",
      keepAlive: true,
      roles: ["ADMIN"],
      title: "网页管理",
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page.vue'),
        name: 'PagePermission',
        meta: {
          title: '顶部管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '活跃用户',
        meta: {
          title: '侧边栏管理'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role.vue'),
        name: '付费率',
        meta: {
          title: '弹窗管理',
          roles: ['admin']
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '用户留存',
        meta: {
          title: '标签管理'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '用户习惯',
        meta: {
          title: '客服管理'
          // if do not set roles, means: this page does not require permission
        }
      },
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: '2',
    meta: {
      hidden: false,
      icon: "system",
      keepAlive: true,
      roles: ["ADMIN"],
      title: "提充管理",
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page.vue'),
        name: 'PagePermission',
        meta: {
          title: '提现审核',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '活跃用户',
        meta: {
          title: '提现封禁'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role.vue'),
        name: '付费率',
        meta: {
          title: '黑名单',
          roles: ['admin']
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '用户留存',
        meta: {
          title: '提现渠道'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '用户习惯',
        meta: {
          title: '充值配置'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '用户习惯',
        meta: {
          title: '支付配置'
          // if do not set roles, means: this page does not require permission
        }
      },
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: '3',
    meta: {
      hidden: false,
      icon: "system",
      keepAlive: true,
      roles: ["ADMIN"],
      title: "活动管理",
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page.vue'),
        name: 'PagePermission',
        meta: {
          title: '签到活动配置',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '活跃用户',
        meta: {
          title: '理财活动配置'
          // if do not set roles, means: this page does not require permission
        }
      },
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: '44',
    meta: {
      hidden: false,
      icon: "system",
      keepAlive: true,
      roles: ["ADMIN"],
      title: "游戏管理",
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page.vue'),
        name: 'PagePermission',
        meta: {
          title: '游戏管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '活跃用户',
        meta: {
          title: '下注管理'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '活跃用户',
        meta: {
          title: '奖池管理'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: '活跃用户',
        meta: {
          title: '机器人配置'
          // if do not set roles, means: this page does not require permission
        }
      },
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: '5',
    meta: {
      hidden: false,
      icon: "system",
      keepAlive: true,
      roles: ["ADMIN"],
      title: "第三方管理",
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page.vue'),
        name: 'PagePermission',
        meta: {
          title: '第三方管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: '6',
    meta: {
      hidden: false,
      icon: "system",
      keepAlive: true,
      roles: ["ADMIN"],
      title: "权限管理",
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page.vue'),
        name: 'PagePermission',
        meta: {
          title: '权限管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
    ]
  },
  { path: '/:pathMatch(.*)', redirect: '/404' }
]

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: "/login" });
}

export default router;
