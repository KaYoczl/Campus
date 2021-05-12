class BaseModel{
  constructor(data,message){
    if (typeof data === 'string') {
      //下面3句表示可以传对象和字符串，也可以只传第二个字符串
      this.message = data
      data = null
      message = null
    }
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel{
  constructor(data,message){
    super(data,message)
    this.errno = 0
  }
}

class ErrorModel extends BaseModel{
  constructor(data,message){
    super(data,message)
    this.errno = -1
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
//对应返回格式为标准的JSON格式，方便前端提取数据
// JSON.stringify({
//   error:0,
//   data:{
//     xxx
//   },
//   message:'xxx'
// })