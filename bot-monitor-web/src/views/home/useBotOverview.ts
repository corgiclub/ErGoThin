import { onMounted, ref } from 'vue'
import BotApi, { BotInfo } from '@/api/bot'

export function useBotOverview () {
  const info = ref(new BotInfo())
  const plugin = ref([])

  async function getInfo () {
    const res = await BotApi.getInfo()
    info.value = res.data
  }

  onMounted(async function () {
    await getInfo()
  })

  return {
    info,
    getInfo
  }
}
