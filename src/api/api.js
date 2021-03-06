import * as axios from 'axios';
import { follow } from '../redux/users-reducer';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "ac12b3de-980c-4483-be61-c655540ce8b7"
    }

})


export const usersAPI = {
    getUsers(currentPage, count) {
        return instance.get(`users?page=${currentPage}&count=${count}`).then(response => {
            return response.data
        })
    },


    follow(userId) {
        return instance.post(`follow/${userId}`)
    },


    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status });
    },

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
}