const { exec } = require('../db/mysql')

//发布职位
const newJob = (jobData = {}) => {
  //blogData是一个博客对象，包含title content等属性
  const comname = jobData.comname
  const work = jobData.work
  const scale = jobData.scale
  const money = jobData.money
  const duty = jobData.duty
  const demand = jobData.demand
  const way = jobData.way

  const sql = `
  insert into jobs (comname,work,scale,money,duty,demand,way)
  values ('${comname}','${work}','${scale}','${money}','${duty}','${demand}','${way}')
  `

  return exec(sql).then(insertData => {
    // console.log('insertData is ', insertData)
    return {
      id: insertData.insertId
    }
  })
}
//职位详情
const getJob = (id) => {
  const sql = `select * from jobs where id='${id}'`
  return exec(sql).then(rows => {
    return rows[0]
  })
}
//处理职位列表
const getList = (keyword) => {
  let sql = `select * from jobs where 1=1 `
  if (keyword) {
    sql += `and work like '%${keyword}%' `
  }
  sql += `order by id desc;`

  //返回promise
  return exec(sql)
}
//更新职位
const updateJob = (jobData = {}) => {
  //id就是要更新博客的id
  //messageData是一个博客对象，包含title content等属性
  const id = jobData.id
  const comname = jobData.comname
  const work = jobData.work
  const scale = jobData.scale
  const money = jobData.money
  const duty = jobData.duty
  const demand = jobData.demand
  const way = jobData.way

  const sql = `
    update jobs set comname='${comname}',work='${work}',scale='${scale}',money='${money}',duty='${duty}',demand='${demand}',way='${way}' where id='${id}'
  `
  return exec(sql).then(updateData => {
    console.log('updateData is ', updateData)
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}
//删除职位
const delJob = (id) => {
  //id就是要删除的职位的id
  const sql = ` delete from jobs where id='${id}' `
  return exec(sql).then(delData => {
    console.log('delData is ', delData)
    if (delData.affectedRows > 0) {
      return true
    }
    return false
  })
}

module.exports = {
  newJob,
  getJob,
  getList,
  updateJob,
  delJob
}