const { 
  loginCheck,
  newUser,
  getUser,
  updateUser
} = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req,res) => {
  const method = req.method // GET POST

  //登录
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    const result = loginCheck(username, password)
    return result.then(data => {
      console.log(data)
      if (data.username) {
        return new SuccessModel(data)
      }
      return new ErrorModel('登录失败！')
    })
  }
  //注册
  if (method === 'POST' && req.path === '/api/user/new') {
    console.log('newUser')
    console.log(req.body)
    //初始化realname
    // req.body.realname = ''
    const result = newUser(req.body)
    return result.then(data => {
      console.log(data)
      return new SuccessModel(data)
    })
  }
  //查询个人信息
  if (method === 'POST' && req.path === '/api/user/detail') {
    console.log('profileDetail')
    console.log(req.body)
    const { username } = req.body
    const result = getUser(username)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }
  //更新个人信息
  if (method === 'POST' && req.path === '/api/user/update') {
    console.log('updateUser')
    console.log(req.body)
    const result = updateUser(req.body)
    return result.then(val => {
      console.log(val)
      if (val) {
        return new SuccessModel()
      }else{
        return new ErrorModel('修改简历失败！')
      }
    })
  }
}

module.exports = handleUserRouter