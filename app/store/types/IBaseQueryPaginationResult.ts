import type IBaseQueryResult from './IBaseQueryResult';

export default interface IBaseQueryPaginationResult<T> extends IBaseQueryResult<T> {
  meta: {
    pagination: {
      page: number,
      pageCount: number,
      pageSize: number,
      total: number,
    },
  },
}
