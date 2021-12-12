import { request } from '@/plugins/request'

//用户登录
export const login = (data) => {
  return request({
    method: "post",
    url: "/api/users/login",
    data
  })
}

//用户注册
export const register = (data) => {
  return request({
    method: "post",
    url: "/api/users",
    data
  })
}

//获取用户
export const getUser = username => {
  return request({
    method: "GET",
    url: `/api/profiles/${username}`,
  })
}

//更新用户
export const updateUser = (data) => {
  return request({
    method: "PUT",
    url: "/api/user",
    data
  })
}