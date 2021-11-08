<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import BotApi from '@/api/bot'

const plugins = ref([{ name: '123', module: '456' }, { name: '123', module: '456' }, { name: '123', module: '456' }, { name: '123', module: '456' }, { name: '123', module: '456' }])

onMounted(async function () {
  const res = await BotApi.getInfo()
  console.log(res)
})
</script>

<template>
  <a-typography>
    <a-typography-title>NoneBot</a-typography-title>
    <a-typography-paragraph>
      Working Directory: /
    </a-typography-paragraph>
  </a-typography>
  <a-card title="插件总览" class="mt-8">
    <!--<template #extra><a href="#">刷新</a></template>-->
    <a-row>
      <a-col
        v-for="(item,index) in plugins"
        :key="index"
        :span="6">
        <a-card class="m-2" :title="item.name">{{ item.module }}</a-card>
      </a-col>
    </a-row>
  </a-card>
</template>

<style scoped>

</style>
