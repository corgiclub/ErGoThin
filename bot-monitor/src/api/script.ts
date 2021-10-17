import service from '@/utils/api'

interface ScriptResp {
  name: string
  port: number
  isPublic: boolean
  alive: boolean
  cmd: string
}

interface CreateOrUpdateScriptRequest {
  name: string
  port: number
  isPublic: boolean
}

class Script {
  // getScript (id: number): Ajax.PromiseAxiosResponse<ScriptResp> {
  //   return service.get(`/api/v1/script/${id}`)
  // }

  listScript (): Ajax.PromiseAxiosResponse<ScriptResp[]> {
    return service.get(`/api/v1/script`)
  }

  runScript (id: number): Ajax.PromiseAxiosResponse<void> {
    return service.post(`/api/v1/script/${id}/run`)
  }

  // createScript (params: CreateOrUpdateScriptRequest): Ajax.PromiseAxiosResponse<ScriptResp> {
  //   return service.post(`/api/v1/script`, params)
  // }
  //
  // updateScript (id: number, params: CreateOrUpdateScriptRequest): Ajax.PromiseAxiosResponse<ScriptResp> {
  //   return service.put(`/api/v1/script/${id}`, params)
  // }
  //
  // deleteScript (id: number): Ajax.PromiseAxiosResponse<void> {
  //   return service.delete(`/api/v1/script/${id}`)
  // }
}

const ScriptApi = new Script()

export {
  ScriptResp,
  CreateOrUpdateScriptRequest,
  ScriptApi
}
