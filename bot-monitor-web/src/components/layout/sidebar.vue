<template>
  <a-layout-sider width="200" style="background: #fff;">
    <a-menu
      v-model:selectedKeys="selectedKeys2"
      v-model:openKeys="openKeys"
      :style="{ height: '100%', borderRight: 0 }"
      mode="inline"
      @click="clickMenuItem">
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <laptop-outlined />
            服务器概览
          </span>
        </template>
        <a-menu-item key="guide">基本信息</a-menu-item>
        <a-menu-item key="service">服务情况</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <laptop-outlined />
            系统运维
          </span>
        </template>
        <a-menu-item key="script">脚本执行</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="project">
        <laptop-outlined />
        工程创建
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { LaptopOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SideBar',
  components: {
    LaptopOutlined
  },
  setup () {
    const router = useRouter()
    const clickMenuItem = ({ item, key, keyPath }) => {
      router.push({ name: key })
    }

    return {
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(['sub1']),
      clickMenuItem
    }
  }
})
</script>

<!--<style scoped lang="scss">-->
<!--.sidebar-container {-->
<!--  position: sticky;-->
<!--  left: 0;-->
<!--  top: 48px;-->
<!--  width: 220px;-->
<!--  height: calc(100vh - 48px);-->
<!--  background-color: #f7f7f7;-->
<!--  border-right: solid 1px #e6e6e6;-->
<!--  .sidebar-title {-->
<!--    display: inline-block;-->
<!--    height: 48px;-->
<!--    line-height: 48px;-->
<!--    width: 100%;-->
<!--    overflow: hidden;-->
<!--    .title-text {-->
<!--      color: rgba(0, 0, 0, 0.75);-->
<!--      font-size: 18px;-->
<!--      margin-left: 14px;-->
<!--      line-height: 24px;-->
<!--      vertical-align: middle;-->
<!--      word-break: keep-all;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
