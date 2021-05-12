const { 
  newAnswerFile,
  updateQuestion,
  getQuestionList,
  updateAnswer,
  showAnswer
} = require('../controller/answer')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleAnswerRouter = (req,res) => {
  const method = req.method // GET POST
  const id = req.query.id

  //新建简历
  if (method === 'POST' && req.path === '/api/answer/new') {
    console.log('newAnswer')
    console.log(req.body)
    const result = newAnswerFile(req.body)
    return result.then(data => {
      console.log(data)
      return new SuccessModel(data)
    })
  }
  //更新问题
  if (method === 'POST' && req.path === '/api/question/update') {
    console.log('updateQuestion')
    console.log(req.body)
    const result = updateQuestion(req.body)
    return result.then(val => {
      console.log(val)
      if (val) {
        return new SuccessModel()
      }else{
        return new ErrorModel('问题提交失败！')
      }
    })
  }
  //获取问题列表
  if (method === 'GET' && req.path === '/api/question/list') {
    const result = getQuestionList()
    return result.then(questionListData => {
      console.log('questionListData is' + questionListData)
      return new SuccessModel(questionListData)
    })
  }
  //回答问题
  if (method === 'POST' && req.path === '/api/answer/update') {
    console.log('updateAnswer')
    console.log(req.body)
    const result = updateAnswer(req.body)
    return result.then(val => {
      console.log(val)
      if (val) {
        return new SuccessModel()
      }else{
        return new ErrorModel('回答错误！')
      }
    })
  }
  //查看回答
  if (method === 'GET' && req.path === '/api/answer/show') {
    console.log('showAnswer')
    console.log(req.body)
    const username = req.query.username
    const result = showAnswer(username)
    return result.then(data => {
      console.log(data)
      if (data) {
        return new SuccessModel(data)
      }
    })
  }
}

module.exports = handleAnswerRouter