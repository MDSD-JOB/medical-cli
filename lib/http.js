// lib/http.js

// 通过 axios 处理请求
const axios = require('axios')

axios.interceptors.response.use(res => {
  return res.data;
})


/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  const list = await axios.get('https://api.github.com/orgs/MDSD-JOB/repos')
  return list
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function  getTagList(repo) {
  const list = await axios.get(`https://api.github.com/repos/MDSD-JOB/${repo}/tags`)
  return list
}

module.exports = {
  getRepoList,
  getTagList
}
