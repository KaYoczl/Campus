const { exec } = require('../db/mysql')

//处理就业资讯列表
const getMessageList = () => {
  let sql = `select * from messages order by id desc; `

  //返回promise
  return exec(sql)
}
//新建就业资讯
const newMessage = (messageData = {}) => {
  //messageData是一个博客对象，包含title content等属性
  const title = messageData.title
  const content = messageData.content
  const post = messageData.post
  const time = messageData.time
  const sql = `
    insert into messages (title,content,post,time)
    values ('${title}','${content}','${post}','${time}')
  `
  return exec(sql).then(insertData => {
    console.log(3)
    return {
      id: insertData.insertId
    }
  })
}
//更新就业资讯
const updateMessage = (messageData = {}) => {
  //id就是要更新博客的id
  //messageData是一个博客对象，包含title content等属性
  const id = messageData.id
  const title = messageData.title
  const content = messageData.content
  const post = messageData.post
  const time = messageData.time

  const sql = `
    update messages set title='${title}',content='${content}',post='${post}',time='${time}' where id='${id}'
  `
  return exec(sql).then(updateData => {
    console.log('updateData is ', updateData)
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}
//删除就业资讯
const delMessage = (id) => {
  //id就是要删除的就业资讯的id
  const sql = ` delete from messages where id='${id}' `
  return exec(sql).then(delData => {
    console.log('delData is ', delData)
    if (delData.affectedRows > 0) {
      return true
    }
    return false
  })
}

module.exports = {
  getMessageList,
  newMessage,
  updateMessage,
  delMessage
}