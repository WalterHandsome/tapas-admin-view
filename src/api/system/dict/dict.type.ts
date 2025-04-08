import request from '@/config/axios'

export type DictTypeVO = {
  id: number | undefined
  name: string
  type: string
  status: number
  remark: string
  createTime: Date
}

// 查询字典（精简)列表
export const getSimpleDictTypeList = () => {
  return request.get({ url: '/infra/dict-type/list-all-simple' })
}

// 查询字典列表
export const getDictTypePage = (params: PageParam) => {
  return request.get({ url: '/infra/dict-type/page', params })
}

// 查询字典详情
export const getDictType = (id: number) => {
  return request.get({ url: '/infra/dict-type/get?id=' + id })
}

// 新增字典
export const createDictType = (data: DictTypeVO) => {
  return request.post({ url: '/infra/dict-type/create', data })
}

// 修改字典
export const updateDictType = (data: DictTypeVO) => {
  return request.put({ url: '/infra/dict-type/update', data })
}

// 删除字典
export const deleteDictType = (id: number) => {
  return request.delete({ url: '/infra/dict-type/delete?id=' + id })
}
// 导出字典类型
export const exportDictType = (params) => {
  return request.download({ url: '/infra/dict-type/export', params })
}
