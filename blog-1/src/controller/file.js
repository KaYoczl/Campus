const { exec } = require('../db/mysql')

//新建简历
const newFile = (fileData = {}) => {
  //userData是一个博客对象，包含username,password等属性
  const username = fileData.username
  const sql = `
    insert into files (username) values ('${username}')
  `

  return exec(sql).then(newFileData => {
    console.log('newFileData is ', newFileData)
    return {
      id: newFileData.insertId
    }
  })
}

//更新简历
const updateFile = (fileData = {}) => {
  //blogData是一个博客对象，包含title content等属性
  const username = fileData.username
  const name = fileData.name
  const email = fileData.email
  const phone = fileData.phone
  const flag = fileData.flag
  const work = fileData.work
  const item = fileData.item
  const good = fileData.good

  const sql = `
    update files set name='${name}',email='${email}',phone='${phone}',flag='${flag}',work='${work}',item='${item}',good='${good}' where username='${username}'
  `

  return exec(sql).then(updateData => {
    // console.log('updateData is ', updateData)
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

//投递简历
const goFile = (fileData = {}) => {
  //blogData是一个简历对象，包含state,username等属性

  const state = fileData.state
  const username = fileData.username

  const sql = `
    update files set state='${state}' where username='${username}'
  `
  return exec(sql).then(updateData => {
    console.log('updateData is ', updateData)
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

//查询简历
const getFile = (username) => {
  const sql = `select * from files where username='${username}'`
  return exec(sql).then(rows => {
    return rows[0]
  })
}

//处理简历列表
const getFileList = () => {
  let sql = ` select * from files order by id desc; `

  //返回promise
  return exec(sql)
}

module.exports = {
  newFile,
  updateFile,
  goFile,
  getFile,
  getFileList
}