import { apiSlice } from "../api/apiSlice";

//for changing the image in icon when we upload our picture
export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateAvatar: builder.mutation({
            query:(avatar) => ({
                url:"updateProfile",
                method:"PUT",
                body:{avatar},
                credentials: "include" as const,
            }),
        }),
        editProfile: builder.mutation({
            query:({name}) => ({
                url:"updateUserInfo",
                method:"PUT",
                body:{name},
                credentials: "include" as const,
            }),
        }),
        updatePassword: builder.mutation({
            query:({oldPassword, newPassword}) => ({
                url:"updatePassword",
                method:"PUT",
                body:{oldPassword, newPassword},
                credentials: "include" as const,
            }),
        }),
    })
});

export const {useUpdateAvatarMutation, useEditProfileMutation, useUpdatePasswordMutation} = userApi;