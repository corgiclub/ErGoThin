import service from '@/utils/api'

interface ServiceResp {
  id: number
  name: string
  port: number
  url: string
  isPublic: boolean
  alive: boolean
  cmd: string
}

interface CreateOrUpdateServiceRequest {
  name: string
  port: number
}

class Service {
  getService (id: number): Ajax.PromiseAxiosResponse<ServiceResp> {
    return service.get(`/api/v1/service/${id}`)
  }

  listService (): Ajax.PromiseAxiosResponse<ServiceResp[]> {
    return service.get(`/api/v1/service`)
  }

  createService (params: CreateOrUpdateServiceRequest): Ajax.PromiseAxiosResponse<ServiceResp> {
    return service.post(`/api/v1/service`, params)
  }

  updateService (id: number, params: CreateOrUpdateServiceRequest): Ajax.PromiseAxiosResponse<ServiceResp> {
    return service.put(`/api/v1/service/${id}`, params)
  }

  deleteService (id: number): Ajax.PromiseAxiosResponse<void> {
    return service.delete(`/api/v1/service/${id}`)
  }
}

const ServiceApi = new Service()

export {
  ServiceResp,
  CreateOrUpdateServiceRequest,
  ServiceApi
}
