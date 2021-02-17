//获取开始结束时间放在一个字符串中
export const getTime=(a,b)=>{
    let a1=new Date(a)
    let b1=new Date(b)
    return ""+a1.getFullYear()+"-"+(a1.getMonth()+1)+"-"+a1.getDate()+" "
        +a1.getHours()+":"+(a1.getMinutes()<10?"0"+a1.getMinutes():a1.getMinutes())+"-"+b1.getHours()+":"+(b1.getMinutes()<10?"0"+b1.getMinutes():b1.getMinutes())
}
