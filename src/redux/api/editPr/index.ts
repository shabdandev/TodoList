import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    editProduc: build.mutation<TODO.editResponse, TODO.editRequest>({
      query: ({ edited, _id }) => ({
        url: `/ea867ad835e6da5f7398199eca198a89/crud/${_id}`,
        method: "PUT",
        body: edited,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useEditProducMutation } = api;
