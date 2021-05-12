const { exec } = require('../db/mysql')

//登录
const loginCheck = (username, password) => {
  const sql = `
    select username, realname from users where username='${username}' and password='${password}'
  `
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}

//注册
const newUser = (userData = {}) => {
  //userData是一个博客对象，包含username,password等属性
  const username = userData.username
  const password = userData.password
  const sql = `
    insert into users (username,password) values ('${username}','${password}')
  `

  return exec(sql).then(newUserData => {
    console.log('newUserData is ', newUserData)
    return {
      id: newUserData.insertId
    }
  })
}

//查询个人信息
const getUser = (username) => {
  const sql = `select * from users where username='${username}'`
  return exec(sql).then(rows => {
    return rows[0]
  })
}

//更新个人信息
const updateUser = (userData = {}) => {
  //blogData是一个博客对象，包含title content等属性
  const username = userData.username
  const realname = userData.realname
  const number = userData.number
  const school = userData.school
  const word = userData.word
  const sql = `
    update users set realname='${realname}',number='${number}',school='${school}',word='${word}' where username='${username}'
  `

  return exec(sql).then(updateUserData => {
    console.log('updateUserData is ', updateUserData)
    if (updateUserData.affectedRows > 0) {
      return true
    }
    return false
  })
}

module.exports = {
  loginCheck,
  newUser,
  getUser,
  updateUser
}