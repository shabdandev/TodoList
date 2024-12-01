import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    deleteProduct: build.mutation<TODO.deleteResponse, TODO.deleteRequest>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useDeleteProductMutation } = api;
