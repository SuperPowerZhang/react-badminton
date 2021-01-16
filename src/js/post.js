export function post(url,data) {
    return new Promise((resolve, reject)=>{
        let req=new XMLHttpRequest();
        req.open('POST',url);
        req.setRequestHeader("Content-Type", "application/json");
        console.log(JSON.stringify(data));
        req.onload=function(){
            console.log(req.responseText)
                  if(req.status>=200&&req.status<400){
                    resolve(req.response)
                  }else {
                    reject (Error(req.response))
                  }
        };
        req.send(JSON.stringify(data))
    })
}
