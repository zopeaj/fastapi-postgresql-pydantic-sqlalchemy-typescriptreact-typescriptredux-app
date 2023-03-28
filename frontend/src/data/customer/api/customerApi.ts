import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

interface ICreateCustomer {

}

interface IUpdateCustomer {

}

export const customerApi = createApi({
  reducerPath: 'customerApi',
  tagTypes: ['Customer'],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081/api/v1/" }),
  endpoints: (builder: any) => ({
    createCustomer: builder.mutation({
      query(body: ICreateCustomer) {
        return {
          url: 'customer',
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body),
        }
      }
    }),
    updateCustomer: builder.mutation({
      query(body: IUpdateCustomer, id: number) {
        return {
          url: `customer/${id}`,
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      }
    }),
    deleteCustomer: builder.mutation({
      query: (id: number) => {
        return {
          url: `customer/${id}`,
          method: 'DELETE',
        }
      },
      providesTags: (result: any, error: any, id: number) => result ? [{type: 'Customer', id}] : error?.status === 401 ? ['UNAUTHORIZED'] : ['UNKNOWN_ERROR'],
    }),
    getCustomerById: builder.query({
      query: (id: number) => `customer/${id}`,
      providesTags: (result:any, error:any, id:number) => result ? [{type: 'Customer', id}] : error?.status === 401 ? ['UNAUTHORIZED']: ['UNKNOWN_ERROR'],
    })
  })
});

export const { useCreateCustomerMutation, useUpdateCustomerMutation, useDeleteCustomerMutation, useGetCustomerByIdQuery } = customerApi;




