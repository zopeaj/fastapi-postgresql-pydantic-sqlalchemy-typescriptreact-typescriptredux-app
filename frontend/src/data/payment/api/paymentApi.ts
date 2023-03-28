import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

interface IPaymentCreate {}

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/v1/api/' }),
  endpoints: (builder: any) => ({
    makePayment: builder.mutation({
      query:(body: IPaymentCreate, auth: string) {
        return {
          url: 'payment',
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth}`
          },
          body: JSON.stringify(body),
        }
      }
    }),
  })
})
