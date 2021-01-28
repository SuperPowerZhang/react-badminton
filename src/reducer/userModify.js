const initState={
    user_register:{
        username:'',
        weChat:'',
        password:'',
    },
    user_login:{
        id:'',
        state:false,
        username:'',
        password:'',
        token: ""
    },
    user_modify:{
        username:'',
        new_username:'',
        weChat:'',
        password:'',
        new_password:''
    }
};


const user_newModifier=(state=initState,action)=>{
    switch(action.type){
        case 'CHANGE_USERNAME':
            return {...state,user_register: {...state.user_register,username:action.value}}
        case 'CHANGE_WECHAT':
            return {...state,user_register: {...state.user_register,weChat:action.value}}
        case 'CHANGE_PASSWORD':
            return {...state,user_register: {...state.user_register,password:action.value}}
        case 'RENEW_PASSWORD':
            return {...state,user_register: {...state.user_register,new_password:action.value}}
        case 'CHANGE_LOGINUSERNAME':
            return {...state,user_login: {...state.user_login,username:action.value}}
        case 'CHANGE_LOGINPASSWORD':
            return {...state,user_login: {...state.user_login,password:action.value}}
        case 'LOGIN':
            return {...state,user_login: {...initState.user_login}}
        case 'REGISTER':
            return {...state,user_register: {...initState.user_register}}
        case 'SETTOKEN':
            return{...state, user_login:{...state.user_login,token: action.value }}
        case 'SETLOGINSTATETRUE':
                return{...state, user_login:{...state.user_login,state: true}}
        case 'SETLOGINSTATEFALSE':
            return{...state, user_login:{...state.user_login,state: false}}
        case 'SETLOGINID':
            return {...state,user_login:{...state.user_login,id: action.value}}
    }
    return state;
}
export  {user_newModifier}
