const { exec } = require('../db/mysql')

//管理员登录
const rootLogin = (rootname, password) => {
  const sql = `
    select rootname, realname from roots where rootname='${rootname}' and password='${password}'
  `
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}

module.exports = {
  rootLogin
}