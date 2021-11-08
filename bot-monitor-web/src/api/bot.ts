import service from '@/utils/api'

class BotApi {
  static getInfo () {
    return service.get('/monitor/api/v1/info')
  }
  // static listPlugins () {
  //   return service.get('/monotor/api/v1/plugins')
  // }
}

export default BotApi
