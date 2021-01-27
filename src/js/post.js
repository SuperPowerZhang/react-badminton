export function post(url,data) {
    return new Promise((resolve, reject)=>{
        let req=new XMLHttpRequest();
        req.open('POST',url);
        req.setRequestHeader("Content-Type", "application/json");
        console.log(JSON.stringify(data));
        req.onload=function(){
            console.log(req.status,req.responseText)
                  if(req.status>=200&&req.status<400){
                      console.log(112233)
                    resolve(req.responseText)
                  }else {
                    reject (req.responseText)
                  }
        };
        req.send(JSON.stringify(data))
    })
}
