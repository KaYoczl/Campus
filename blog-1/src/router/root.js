const { rootLogin } = require('../controller/root')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleRootRouter = (req,res) => {
  const method = req.method // GET POST

  //管理员登录
  if (method === 'POST' && req.path === '/api/root/login') {
    console.log(req.body)
    const { rootname, password } = req.body
    const result = rootLogin(rootname, password)
    return result.then(data => {
      console.log(data)
      if (data.rootname) {
        return new SuccessModel(data)
      }
      return new ErrorModel('登录失败！')
    })
  }
}

module.exports = handleRootRouter