const { 
  getMessageList,
  newMessage,
  updateMessage,
  delMessage
} = require('../controller/message')
const { SuccessModel,ErrorModel } = require('../model/resModel')

const handleMessageRouter = (req,res) => {
  const method = req.method // GET POST
  const id = req.query.id

  //获取就业资讯列表
  if (method === 'GET' && req.path === '/api/message/list') {
    const result = getMessageList()
    return result.then(messageListData => {
      console.log('messageListData is' + messageListData)
      return new SuccessModel(messageListData)
    })
  }
  //新建就业资讯
  if (method === 'POST' && req.path === '/api/message/new') {
    console.log('newMessage')
    console.log(req.body)
    const result = newMessage(req.body)
    return result.then(data => {
      console.log(2)
      return new SuccessModel(data)
    })
  }
  //更新就业资讯
  if (method === 'POST' && req.path === '/api/message/update') {
    const result = updateMessage(req.body)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      }else{
        return new ErrorModel('更新博客失败！')
      }
    })
  }
  //删除就业资讯
  if (method === 'GET' && req.path === '/api/message/del') {
    const result = delMessage(id)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      }else{
        return new ErrorModel('删除资讯失败！')
      }
    })
  }
}

module.exports = handleMessageRouter