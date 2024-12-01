import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.elchocrud.pro/api/v1",
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOption) => {
  const result = baseQuery(args, api, extraOption);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  tagTypes: ["todo"],
  endpoints: () => ({}),
});
