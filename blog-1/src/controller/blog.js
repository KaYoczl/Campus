const { exec } = require('../db/mysql')

//处理博客列表
const getList = (author,keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`

  //返回promise
  return exec(sql)
}

//处理博客详情
const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}'`
  return exec(sql).then(rows => {
    return rows[0]
  })
}

//新建博客
const newBlog = (blogData = {}) => {
  //blogData是一个博客对象，包含title content等属性
  const title = blogData.title
  const content = blogData.content
  const createTime = Date.now()
  const author = blogData.author


  const sql = `
    insert into blogs (title,content,createtime,author)
    values ('${title}','${content}','${createTime}','${author}')
  `

  return exec(sql).then(insertData => {
    // console.log('insertData is ', insertData)
    return {
      id: insertData.insertId
    }
  })
}

//更新博客
const updateBlog = (id, blogData = {}) => {
  //id就是要更新博客的id
  //blogData是一个博客对象，包含title content等属性

  const title = blogData.title
  const content = blogData.content

  const sql = `
    update blogs set title='${title}', content='${content}' where id=${id}
  `
  return exec(sql).then(updateData => {
    // console.log('updateData is ', updateData)
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

//删除博客
const delBlog = (id, author) => {
  //id就是要删除的博客的id
  //author就是要验证的博客作者
  const sql = `delete from blogs where id='${id}' and author='${author}'`
  return exec(sql).then(delData => {
    console.log('delData is ', delData)
    if (delData.affectedRows > 0) {
      return true
    }
    return false
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}