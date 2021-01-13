import styled from 'styled-components'

const Header=styled.header`
margin-top: 60px;
margin-bottom: 40px;
position: relative;
height: 38px;
>h1{
position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    font-size: 38px;
}
@media(max-width:600px){
        margin-top: 30px;
        margin-bottom: 20px;
        position: relative;
        height: 26px;
   >h1{
        font-size: 26px;
    }
`
const Main=styled.main`
max-width: 1200px;
position: relative;
>section{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 480px;
    padding: 20px;
    background-color: #fff;
    font-size: 18px;
    border-radius: 6px;
    >h3{
    font-size: 26px;
    height: 27px;
    margin-top: 20px;
    margin-bottom: 20px;
    }
    @media(max-width:600px){
        padding: 10px;
        font-size: 16px;
    >h3{
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
}
form {
    width: 400px;
    >span {
    display: block;
    margin-top: 4px;
    margin-bottom: 8px;
    }
    @media(max-width:600px){
        width: 300px;
    }
}
>.form label{
    margin-top: 10px;
        @media(max-width:600px){
         margin-top: 6px;
        }
}
input, .submit {
    width: 400px;
    height: 40px;
    border: 1px solid rgb(174, 191, 207);
    border-radius: 6px;
    margin-top: 4px;
    margin-bottom: 8px;
    font-size: 18px;
    padding: 5px 16px;
            @media(max-width:600px){
       margin-top: 4px;
        width: 300px;
        height: 28px;
        font-size: 16px;
        border-radius: 4px;
        padding: 3px 10px;
    }
}
.submit {
    color: #fff;
    margin-top: 16px;
    background-color: rgb(46, 164, 79);

}
.otherLinks{
    position: relative;
    width: 400px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding-top:16px;
    paddind-bottom:16px;
    @media(max-width:600px){
          width: 300px;
        margin-bottom: 10px;
        padding-top:10px;
        paddind-bottom:10px;
        }
}
div .link {
    position: absolute;
    display: inline-block;
    width: 200px;
    left:0 ;
    top: 0;
    text-align: center;
    font-size:16px;
    color:rgb(3, 102, 214);
    @media(max-width:600px){
          display: inline-block;
        width: 120px;
        left:25px;
        top: 0;
        text-align: center;
        font-size:14px;
        font-weight: 700;
        color: rgb(3, 102, 214);
        }
}
div a.right{
    left: 200px;
    @media(max-width:600px){
         left: 150px;
        }
}
}

`

const User=({user,changeUsername,changeWeChat,changePassword,renewPassword})=>{
    const {username,weChat,password,new_password}=user
    return (
        <>
        <Header>
            <h1>小羽毛报名系统</h1>
        </Header>
        < Main >
        < section >
            <p className="tips">提示话术——可能没有</p>
            <form className="form" action="" method="post">
                <h3> 标题替换</h3>
                <label>
                    <span>用户名:</span>
                    <input onChange={e=>{changeUsername(e.target.value)
                    }} type="text" name='username' required="required"  value={username} />
                </label>
        <label>
            <span>微信群昵称:</span>
            <input type="text" onChange={e=>changeWeChat(e.target.value)} name='weChat' required="required" value={weChat} />
        </label>
        <label>
            <span>密码:</span>
            <input type="password" onChange={e=>changePassword(e.target.value)} name='password' required="required" value={password}/>
        </label>
        <label>
            <span>新密码:</span>
            <input type="password" onChange={e=>renewPassword(e.target.value)} name='new_password' required="new_password" value={new_password}/>
        </label>
        <button type="submit" className="submit">确定</button>
    </form>
    <div className="otherLinks">
        <a className="link left" href="{{ unit_2 }}">登录链接</a>
        <a className="link right" href="{{ unit_1 }}">注册链接</a>
    </div>
</section>
</Main>
    </>
    )
}

export default  User;
