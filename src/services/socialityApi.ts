import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const socialityApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jsonbin.io/v3/b/62ed1523e13e6063dc6cd5ee',
    prepareHeaders: (headers) => {
      headers.set('X-ACCESS-KEY', '$2b$10$smpejxmp4gmvulslxzJAs.gQ4v4PXntI/WeSCOOFXAd3KZl7LFJcW');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<GetPostsResponse, void>({
      query: () => '/',
      keepUnusedDataFor: 1,
    }),
  }),
});

export const { useGetPostsQuery } = socialityApi;

interface GetPostsResponse {
  record: {
    posts_by_date: {
      [key: string]: Post[];
    };
  };
}

export interface Post {
  published_at: string;
  created_at: string;
  updated_at: string;
  status: number;
  is_published: boolean;
  entry: {
    type: string;
    message: string;
    image: string[];
  };
  account: {
    channel: string;
  };
}
