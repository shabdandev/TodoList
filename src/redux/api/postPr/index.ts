import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    postProduct: build.mutation<TODO.postResponse, TODO.postRequest>({
      query: (data) => ({
        url: "/ea867ad835e6da5f7398199eca198a89/crud",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { usePostProductMutation } = api;
