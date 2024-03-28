import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as queryString from 'query-string';

import { API_BASE_URLS } from '@/constants/protectedConstants';
import FEEDS from "@/app/store/tags/feed";

const authBaseQuery = fetchBaseQuery({
  baseUrl: `${API_BASE_URLS}/api/`,
  prepareHeaders: (headers, { getState }) => {
    return headers;
  },
  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
});

const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: [
    FEEDS,
  ],
  baseQuery: authBaseQuery,
  endpoints: () => ({}),
});

export default baseApi;
