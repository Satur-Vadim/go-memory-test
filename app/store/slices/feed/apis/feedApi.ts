import baseApi from '../../../apis/baseApi';
import {IFeed} from "@/app/store/slices/feed/interfaces/IFeed";
import FEEDS from "@/app/store/tags/feed";

export const feedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFeeds: builder.query({
      query: () => ({
        url: 'feeds?populate=*',
        method: 'GET',
      }),
      providesTags: [FEEDS]
    }),
    getFeed: builder.query({
      query: (id: number) => ({
        url: `feeds/${id}?populate=*`,
        method: 'GET',
      }),
    }),
    createFeed: builder.mutation<{ data: IFeed }, any>({
      query: (data) => ({
        url: 'feeds',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: FEEDS }],
    }),
    uploadImageFeed: builder.mutation({
      query: (data) => ({
        url: 'upload',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
      invalidatesTags: [{ type: FEEDS }],
    }),
  }),
});

export const {
  useGetFeedsQuery,
  useGetFeedQuery,
  useCreateFeedMutation,
  useUploadImageFeedMutation,
} = feedApi;
