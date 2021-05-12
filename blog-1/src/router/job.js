const { 
  newJob,
  getJob,
  getList,
  updateJob,
  delJob
} = require('../controller/job')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleJobRouter = (req,res) => {
  const method = req.method // GET POST
  const id = req.query.id

  //发布职位
  if (method === 'POST' && req.path === '/api/job/new') {
    console.log('file')
    console.log(req.body)
    const result = newJob(req.body)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      }else{
        return new ErrorModel('修改简历失败！')
      }
    })
  }
  //职位详情
  if (method === 'GET' && req.path === '/api/job/detail') {
    console.log('jobDetail')
    console.log(req.body)
    const result = getJob(id)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }
  //获取职位列表
  if (method === 'GET' && req.path === '/api/job/list') {
    console.log('list')
    console.log(req.body)
    const keyword = req.query.keyword || ''
    // const listData = getList(author,keyword)
    //把后台数据放进成功的模型中，表示成功返回数据
    // return new SuccessModel(listData)
    const result = getList(keyword)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }
  //更新职位
  if (method === 'POST' && req.path === '/api/job/update') {
    const result = updateJob(req.body)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      }else{
        return new ErrorModel('更新博客失败！')
      }
    })
  }
  //删除职位
  if (method === 'GET' && req.path === '/api/job/del') {
    const result = delJob(id)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      }else{
        return new ErrorModel('删除资讯失败！')
      }
    })
  }
}

module.exports = handleJobRouter