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
    sendEmail: build.mutation({
      query: (body) => ({
        url: '/send-email',
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
    getUserbyId: build.mutation({
      query: (userId) => {
        return {
          url: `/users/${userId}`
        }
      }
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
    getStartUp: build.query({
      query: () => ({
        url: `/getalluser?role=STARTUP`
      })
    }),
    getInvestor: build.query({
      query: () => ({
        url: `/getalluser?role=INVESTOR`
      })
    }),
    getPercentage: build.query({
      query: () => ({
        url: `/user/roles`
      })
    }),
    getProfileById: build.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`
        }
      }
    }),
    addRecruitment: build.mutation({
      query: (body) => ({
        url: '/addrecruitment',
        method: 'POST',
        body: body
      })
    }),
    getRecruitmentbyID: build.mutation({
      query: (recruitId) => {
        return {
          url: `/recruitment/${recruitId}`
        }
      }
    }),
    getAllRecruitment: build.query({
      query: () => ({
        url: `/getallrecruitment`
      })
    }),
    addServices: build.mutation({
      query: (body) => ({
        url: '/addservices',
        method: 'POST',
        body: body
      })
    }),
    getServicesbyID: build.mutation({
      query: (servicesId) => {
        return {
          url: `/services/${servicesId}`
        }
      }
    }),
    getServicesbyuser: build.mutation({
      query: (userId) => {
        return {
          url: `/getservicesbyuser/${userId}`
        }
      }
    }),
    getAllServices: build.query({
      query: () => ({
        url: `/getallservices`
      })
    }),
    addBlog: build.mutation({
      query: (body) => ({
        url: '/blog',
        method: 'POST',
        body: body
      })
    }),
    getBlogbyId: build.mutation({
      query: (servicesId) => {
        return {
          url: `/blog/${servicesId}`
        }
      }
    }),
    getAllBlog: build.query({
      query: () => ({
        url: `/blog`
      })
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
  useLazyGetInvestorQuery,
  useLazyGetStartUpQuery,
  useLazyGetPercentageQuery,
  useSendEmailMutation,
  useAddRecruitmentMutation,
  useLazyGetAllRecruitmentQuery,
  useGetRecruitmentbyIDMutation,
  useAddServicesMutation,
  useLazyGetAllServicesQuery,
  useGetServicesbyIDMutation,
  useGetServicesbyuserMutation,
  useAddBlogMutation,
  useLazyGetAllBlogQuery,
  useGetBlogbyIdMutation,
  useGetUserbyIdMutation
} = userApi
