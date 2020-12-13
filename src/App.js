
function App() {
  function  get(url) {
    return new Promise(function(resolve,reject){
      let req=new XMLHttpRequest()
      console.log(111111)
      console.log(url)
      req.open('GET',url)
      req.onload=function(){
        if(req.status===200){
          resolve(req.response)
        }else {
          reject (Error(req.response))
        }
      }
      req.onerror=function () {
        reject(Error("Network Error"))
      }
      req.send()
    })
  }
  get('http://badminton.amberwuwu.com/blog/api/category/').then((response)=>{
    console.log('成功了，真意外',response)
  },(error)=>{
    console.error('oh no',error)
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>
         hello
        </p>
      </header>
    </div>
  );
}

export default App;
