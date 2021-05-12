const { 
  newFile,
  updateFile,
  goFile,
  getFile,
  getFileList
} = require('../controller/file')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleFileRouter = (req,res) => {
  const method = req.method // GET POST
  const id = req.query.id

  //新建简历
  if (method === 'POST' && req.path === '/api/file/new') {
    console.log('newFile')
    console.log(req.body)
    const result = newFile(req.body)
    return result.then(data => {
      console.log(data)
      return new SuccessModel(data)
    })
  }
  //更新简历
  if (method === 'POST' && req.path === '/api/file/update') {
    console.log('updateFile')
    console.log(req.body)
    const result = updateFile(req.body)
    return result.then(val => {
      console.log(val)
      if (val) {
        return new SuccessModel()
      }else{
        return new ErrorModel('修改简历失败！')
      }
    })
  }
  //投递简历
  if (method === 'POST' && req.path === '/api/file/go') {
    console.log('goFile')
    console.log(req.body)
    const result = goFile(req.body)
    return result.then(val => {
      console.log(val)
      if (val) {
        return new SuccessModel()
      }else{
        return new ErrorModel('投递简历失败！')
      }
    })
  }
  //查询简历
  if (method === 'POST' && req.path === '/api/file/detail') {
    console.log('detail')
    console.log(req.body)
    const { username } = req.body
    const result = getFile(username)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }
  //获取简历列表
  if (method === 'GET' && req.path === '/api/fileCheck/list') {
    console.log('fileCheckedList')
    console.log(req.body)
    //把后台数据放进成功的模型中，表示成功返回数据
    const result = getFileList()
    return result.then(filelistData => {
      console.log(filelistData)
      return new SuccessModel(filelistData)
    })
  }
}

module.exports = handleFileRouter