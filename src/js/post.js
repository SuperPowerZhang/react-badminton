export function post(url,data) {
    return new Promise((resolve, reject)=>{
        let req=new XMLHttpRequest();
        req.open('POST',url);
        req.setRequestHeader("Content-Type", "application/json");
        req.onload=function(){
                  if(req.status===200){
                    resolve(req.response)
                  }else {
                    reject (Error(req.response))
                  }
        };
        req.send(JSON.stringify(data))
    })
}
