// token 处理函数
export const setToken = token => {
  localStorage.setItem('TOKEN', token)
}

export const getToken = () => {
  return localStorage.getItem('TOKEN')
}

export const removeToken = () => {
  localStorage.removeItem('TOKEN')
}
