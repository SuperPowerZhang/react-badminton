export function request(url, data, method) {
    return new Promise((resolve, reject)=>{
        let req=new XMLHttpRequest();
        req.open(method,url);
        req.setRequestHeader("Content-Type", "application/json");
        req.onload=function(){
            const {code}=JSON.parse(req.responseText)
                  //暂时用code代替req.status
                  if(code>=200&&code<400){
                    resolve(req.responseText)
                  }else {
                    reject (req.responseText)
                  }
        };
        req.send(JSON.stringify(data))
    })
}
