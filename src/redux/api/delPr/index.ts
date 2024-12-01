import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    deleteProduct: build.mutation<TODO.deleteResponse, TODO.deleteRequest>({
      query: (_id) => ({
        url: `/ea867ad835e6da5f7398199eca198a89/crud/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useDeleteProductMutation } = api;
