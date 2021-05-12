const { exec } = require('../db/mysql')

//新建回答
const newAnswerFile = (answerData = {}) => {
  //userData是一个博客对象，包含username,password等属性
  const username = answerData.username
  const sql = `
    insert into answers (username) values ('${username}')
  `
  return exec(sql).then(newAnswerData => {
    console.log('newAnswerData is ', newAnswerData)
    return {
      id: newAnswerData.insertId
    }
  })
}

//更新问题
const updateQuestion = (questionData = {}) => {
  //blogData是一个博客对象，包含title content等属性
  const username = questionData.username
  const title = questionData.title
  const question = questionData.question
  const sql = `
    update answers set title='${title}',question='${question}' where username='${username}'
  `
  return exec(sql).then(updateQuestionData => {
    console.log('updateQuestionData is ', updateQuestionData)
    if (updateQuestionData.affectedRows > 0) {
      return true
    }
    return false
  })
}

//处理问题列表
const getQuestionList = () => {
  let sql = ` select * from answers where question <> 'null' order by id desc; `

  //返回promise
  return exec(sql)
}

//回答问题
const updateAnswer = (answerData = {}) => {
  //blogData是一个博客对象，包含title content等属性
  const id = answerData.id
  const answer = answerData.answer
  const sql = `
    update answers set answer='${answer}' where id='${id}'
  `
  return exec(sql).then(updateAnswerData => {
    console.log('updateAnswerData is ', updateAnswerData)
    if (updateAnswerData.affectedRows > 0) {
      return true
    }
    return false
  })
}

//查看回答
const showAnswer = (username) => {
  const sql = ` select answer from answers where username='${username}' `
  return exec(sql).then(rows => {
    return rows[0]
  })
}
module.exports = {
  newAnswerFile,
  updateQuestion,
  getQuestionList,
  updateAnswer,
  showAnswer
}