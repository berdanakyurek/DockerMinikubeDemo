import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const helloWorldApi = createApi({
  reducerPath: 'helloWorldApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7211/' }),
  endpoints: builder => ({
    helloWorld: builder.query<string, void>({
      query: () => ({
        url: "HelloWorld",
        responseHandler: "text"
    })
  }),
}),
})
export const { useHelloWorldQuery } = helloWorldApi;
