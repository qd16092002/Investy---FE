/* eslint-disable no-undef */
import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from '@src/configs/customFetchBase'

// const competitionName = process.env.competition_id

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    getPersonalPerformation: build.query({
      query: () => ({
        url: `/user/performance`
      })
    }),
    getPublicPerformance: build.query({
      query: (username) => ({
        url: `/user/performance/${username}`
      })
    }),
    getPublicInformation: build.query({
      query: (username) => ({
        url: `/user/${username}`
      })
    }),
    getData: build.query({
      query: (args) => ({
        url: `/data/download_link`,
        params: args,
        responseHandler: async (response) => {
          if (response.status === 200) {
            return await response.json()
            // window.location.assign(window.URL.createObjectURL(await response.blob()))
          } else {
            return await response.json()
          }
        },
        cache: 'no-cache'
      })
    }),
    verifyEmail: build.mutation({
      query: (body) => ({
        url: '/user/verify',
        method: 'POST',
        body: body
      })
    }),
    getUserPersonalInformation: build.query({
      query: () => ({
        url: `/user`
      })
    }),
    changeUserInformation: build.mutation({
      query: (body) => {
        return {
          url: '/user',
          method: 'PUT',
          body: body,
          responseHandler: async (response) => {
            const responseBody = await response.json()
            return responseBody
          }
        }
      }
    }),
    changeUserPassWord: build.mutation({
      query: (body) => {
        return {
          url: '/user/password',
          method: 'PUT',
          body: body,
          responseHandler: async (response) => {
            const responseBody = await response.json()
            return responseBody
          }
        }
      }
    }),
    createApiKey: build.mutation({
      query: () => {
        return {
          url: '/data/api-key',
          method: 'POST'
        }
      }
    }),
    getApiKey: build.query({
      query: () => {
        return {
          url: '/data/api-key'
        }
      }
    }),
    forgotPassword: build.mutation({
      query: (body) => {
        return {
          url: '/user/forgot-password',
          method: 'POST',
          body: body
        }
      }
    }),
    getallprofile: build.query({
      query: () => ({
        url: `/getalluser`
      })
    }),
    getAllUserPerformance: build.query({
      query: ({ path, params }) => ({
        url: `/competition/${path.competitionId}/performance/all`,
        params: params
      })
    }),
    getstudent: build.query({
      query: () => ({
        url: `/getalluser?role=STUDENT`
      })
    }),
    gettutor: build.query({
      query: () => ({
        url: `/getalluser?role=TUTOR`
      })
    }),
    getProfileById: build.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`
        }
      }
    }),
    addMember: build.mutation({
      query: (body) => ({
        url: '/addTeamMemberByUsername',
        method: 'POST',
        body: body
      })
    }),
    getTeamMemberbyID: build.mutation({
      query: (id) => {
        return {
          url: `/teamMembers/${id}`
        }
      }
    })
  })
})

export const {
  useLazyGetDataQuery,
  useGetPersonalPerformationQuery,
  useGetPublicInformationQuery,
  useGetPublicPerformanceQuery,
  useVerifyEmailMutation,
  useChangeUserInformationMutation,
  useChangeUserPassWordMutation,
  useGetUserPersonalInformationQuery,
  useForgotPasswordMutation,
  useLazyGetApiKeyQuery,
  useCreateApiKeyMutation,
  useLazyGetallprofileQuery,
  useLazyGetstudentQuery,
  useLazyGettutorQuery,
  useGetProfileByIdMutation,
  useAddMemberMutation,
  useGetTeamMemberbyIDMutation
} = userApi
