import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

interface IShipperDataCreate {

}

interface IShipperResultResponse {

}

interface IShipperErrorData {

}

export const shipperApi = createApi({
  reducerPath: 'shipperApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/api/v1' }),
  tagTypes: ['Shipper'],
  endpoints: (builder: any) => ({
    shipperDataCreate: builder.mutation({
      query(body: IShipperDataCreate, auth: string) {
        return {
          url: 'shipper',
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
          },
          body: JSON.stringify(body)
        }
      }
    }),
    shipperDataCancel: builder.mutation({
      query(id: number) {
        return {
          url: `shipper/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (result: any, error: IShipperErrorData, id: number) => [{type: 'Shipper', id}],
    })
  })
})


export const { useShipperDataCreateMutation, useShipperDataCancelMutation } = shipperApi;

