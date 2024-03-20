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
        getAllUsers: builder.query({
            query: () => ({
                url: "getAllUser",
                method: "GET",
                credentials: "include" as const,
            })
        }),
        updateUserRole: builder.mutation({
            query: ({email, role}) => ({
                url: "updateAllUser",
                method: "PUT",
                body: {email, role},
                credentials: "include" as const,
            })
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `deleteUser/${id}`,
                method: "DELETE",
                credentials: "include" as const,
            })
        }),
    }),

});

export const {useUpdateAvatarMutation,
              useEditProfileMutation, 
              useUpdatePasswordMutation, 
              useGetAllUsersQuery, 
              useUpdateUserRoleMutation, 
              useDeleteUserMutation
            } = userApi;