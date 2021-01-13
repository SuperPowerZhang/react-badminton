import NewUserInfo from './container/NewUserInfo'

function App() {
  // function  get(url,args,option) {
  //   return new Promise(function(resolve,reject){
  //     let req=new XMLHttpRequest()
  //     console.log(url)
  //     req.open('POST',url)
  //     req.setRequestHeader("Content-Type", "application/json")
  //     if(option){
  //       console.log('设置')
  //       req.setRequestHeader("WWW-Authenticate", `JWT realm=\"api\"`)
  //     }
  //     req.onload=function(){
  //       if(req.status===200){
  //         resolve(req.response)
  //       }else {
  //         reject (Error(req.response))
  //       }
  //     }
  //     req.onerror=function () {
  //       reject(Error("Network Error"))
  //     }
  //     console.log(JSON.stringify(args))
  //     req.send(JSON.stringify(args))
  //   })
  // }
  // get('/new_user/api/login',{"username":"测试1214","password": "ceshi1214"}).then((response)=>{
  //   console.log('haha',response)
  //   let token=JSON.parse(response)["token"]
  //   console.log(token)
  //   get('/blog/api/category/',{"Authorization":"JWT "+token},true).then((response1)=>{
  //     console.log(response1)
  //   })
  // //  {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMDIsInVzZXJuYW1lIjoiXHU2ZDRiXHU4YmQ1MTIxNCIsImV4cCI6MTYwNzk1MDU3OSwiZW1haWwiOiIiLCJvcmlnX2lhdCI6MTYwNzg2NDE3OX0.FxuWOUlObuH9F7NWnu2_aSioSpAD3JrOSoEQh0qlS5Y"}
  // // 后面要在发送请求的时候加上token，Authorization: JWT 上面的token
  // },(error)=>{
  //   console.error('oh no',error)
  // })
  return (
    <div className="App">
      <NewUserInfo/>
      <header className="App-header">
        <p>
         hello
        </p>
      </header>
    </div>
  );
}

export default App;
