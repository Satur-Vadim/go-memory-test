export interface IApi<k extends []> {
  data: { data: k }
  meta?: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
