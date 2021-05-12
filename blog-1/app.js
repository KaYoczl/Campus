const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const handleRootRouter = require('./src/router/root')
const handleFileRouter = require('./src/router/file')
const handleJobRouter = require('./src/router/job')
const handleMessageRouter = require('./src/router/message')
const handleAnswerRouter = require('./src/router/answer')

//用于处理POST请求的数据
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(
        JSON.parse(postData)
      )
    })
  })
  return promise
}

const serverHandle = (req, res) => {
  //设置返回格式 JSON
  res.setHeader('Content-type', 'application/json')

  //获取path
  const url = req.url
  req.path = url.split('?')[0]

  //解析query
  req.query = querystring.parse(url.split('?')[1])

  //处理POST请求的数据
  getPostData(req).then(postData => {
    req.body = postData

    //处理blog路由
    const blogResult = handleBlogRouter(req,res)
    if (blogResult) {
      blogResult.then(blogData => {
        // console.log(blogData)
        res.end(
          JSON.stringify(blogData)//对象转换成字符串
        )
        return
      })
    }
    // const blogData = handleBlogRouter(req,res)
    // if (blogData) {
    //   res.end(
    //     JSON.stringify(blogData)//对象转换成字符串
    //   )
    //   return
    // }

    //处理user路由
    const userResult = handleUserRouter(req, res)
    if (userResult) {
      userResult.then(userData => {
        res.end(
          JSON.stringify(userData)
        )
      })
      return
    }

    //未命名路由，返回404
    // res.writeHead(404,{"Content-type":"text/plain"})
    // res.write("404 Not Found\n")
    // res.end()

    //处理root路由
    const rootResult = handleRootRouter(req, res)
    if (rootResult) {
      rootResult.then(rootData => {
        res.end(
          JSON.stringify(rootData)
        )
      })
      return
    }

    //处理file路由
    const fileResult = handleFileRouter(req, res)
    if (fileResult) {
      fileResult.then(fileData => {
        res.end(
          JSON.stringify(fileData)
        )
      })
      return
    }

    //处理job路由
    const jobResult = handleJobRouter(req, res)
    if (jobResult) {
      jobResult.then(jobData => {
        res.end(
          JSON.stringify(jobData)
        )
      })
      return
    }

    //处理message路由
    const messageResult = handleMessageRouter(req,res)
    if (messageResult) {
      messageResult.then(messageData => {
        console.log(1)
        res.end(
          JSON.stringify(messageData)//对象转换成字符串
        )
        return
      })
    }

    //处理answer路由
    const answerResult = handleAnswerRouter(req,res)
    if (answerResult) {
      answerResult.then(answerData => {
        res.end(
          JSON.stringify(answerData)//对象转换成字符串
        )
        return
      })
    }
  })
}

module.exports = serverHandle

// process.env.NODE_ENV