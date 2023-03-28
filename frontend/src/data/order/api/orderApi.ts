import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

interface ICreateOrder {

}

interface IUpdateOrder {

}

export const orderApi = createApi({
  reducerPath: 'orderApi',
  tagTypes: ['Order'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/v1/api/' }),
  endpoints: (builder: any) => ({
    createOrder: builder.mutation({
      query(body: ICreateOrder, auth: string) {
        return {
          url: 'order',
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
          },
          body: JSON.stringify(body),
        }
      }
    }),
    updateOrder: builder.mutation({
      query(body: IUpdateOrder, auth: string, id: number) {
        return {
          url: `order/${id}`,
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
          },
          body: JSON.stringify(body)
        }
      }
    }),
    deleteOrder: builder.mutation({
      query(id: number, auth: string) {
        return {
          url: `order/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`,
          }
        }
      }
    }),
    getOrderById: builder.mutation({
      query(id: number, auth: string) {
        return {
          url: `order/${id}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`,
          }
        }
      }
    })
  })
})

export const { useCreateOrderMutation, useUpdateOrderMutation, useDeleteOrderMutation } = orderApi;


