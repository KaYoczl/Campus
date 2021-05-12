const { 
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require('../controller/blog')
const { SuccessModel,ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req,res) => {
  const method = req.method // GET POST
  const id = req.query.id

  //获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    // const listData = getList(author,keyword)
    //把后台数据放进成功的模型中，表示成功返回数据
    // return new SuccessModel(listData)
    const result = getList(author,keyword)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  //获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    console.log('detail')
    // const data = getDetail(id)
    // return new SuccessModel(data)
    const result = getDetail(id)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  //新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    console.log('file')
    console.log(req.body)
    // const data = newBlog(req.body)
    // return new SuccessModel(data)
    //假数据，登录时再改成真实数据
    req.body.author = 'lvxiaobu'
    const result = newBlog(req.body)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  //更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      }else{
        return new ErrorModel('更新博客失败！')
      }
    })
  }

  //删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const author = 'feijie'//假数据
    const result = delBlog(id, author)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      }else{
        return new ErrorModel('删除博客失败！')
      }
    })
  }
}

module.exports = handleBlogRouter