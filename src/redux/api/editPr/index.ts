import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    editProduc: build.mutation<TODO.editResponse, TODO.editRequest>({
      query: ({ edited, id }) => ({
        url: `/${id}`,
        method: "PUT",
        body: edited,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useEditProducMutation } = api;
