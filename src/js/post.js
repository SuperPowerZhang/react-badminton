export function post(url,data,method) {
    return new Promise((resolve, reject)=>{
        let req=new XMLHttpRequest();
        req.open(method,url);
        req.setRequestHeader("Content-Type", "application/json");
        console.log(JSON.stringify(data));
        req.onload=function(){
            console.log(req.status,req.responseText)
            const {code}=JSON.parse(req.responseText)
                  //暂时用code代替req.status
                  if(code>=200&&code<400){
                      console.log(112233)
                    resolve(req.responseText)
                  }else {
                    reject (req.responseText)
                  }
        };
        req.send(JSON.stringify(data))
    })
}
