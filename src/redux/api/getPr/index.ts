import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<TODO.getResponse, TODO.getRequest>({
      query: () => ({
        url: "/ea867ad835e6da5f7398199eca198a89/crud",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
  }),
});

export const { useGetProductQuery } = api;
