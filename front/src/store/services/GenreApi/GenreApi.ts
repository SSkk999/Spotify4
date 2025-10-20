import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from '../../../env';
import type { ServiceResponse } from "../types";
export const GenreApi = createApi({
    baseQuery :fetchBaseQuery({
        baseUrl: apiUrl
    }),
    tagTypes : ['genres'],
    reducerPath : "genre",
    endpoints:(build) =>({
        getGenres:build.query<ServiceResponse,null>({
            query:() => ({
                url:'genre',
                method:'get'
            }),
            providesTags:['genres']

        }),
        deleteGenres:build.mutation<ServiceResponse,string>({
                query: (id) => ({
                url: `genre/?id=${id}`,
                method: 'delete',
                
            }),
            invalidatesTags: ['genres']
        }),
        
        getGenreId:build.query<ServiceResponse,string>({
            query:(id) => ({
                url:`genre/by-id?id=${id}`,
                method:'get'
            }),
            providesTags:['genres']

        }),

    

    })
})
export const { useGetGenresQuery , useDeleteGenresMutation,useGetGenreIdQuery} = GenreApi
