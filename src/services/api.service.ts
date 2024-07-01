// const baseUrl = 'https://dummyjson.com';
//
// const getAllUsers = async() => {
//     return await fetch(baseUrl + '/users')
//         .then(res => res.json())
// }
//
// const getPostsOfUserByID = async (id: number) => {
//     return await fetch(baseUrl + `/users/${id}/posts`)
//         .then(value => value.json())
// }
// export { getAllUsers, getPostsOfUserByID }

import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type": "application/json",
    }
});


const getPostsOfUserByID = async (id: number) => {
    return await axiosInstance.get(`/users/${id}/posts`).then(res => {
        return res.data.posts;
    });
}


const getAllUsers = async () => {
    return await axiosInstance.get('/users').then(res => {
        return res.data.users;
    });
}



export { getAllUsers, getPostsOfUserByID }

