const initialState={
    loginCheck:0
}

export default function loginCheck(state=initialState, action){
    switch(action.type){
        case 'signIn':{
            return{
                ...state,
                loginCheck:state.loginCheck+1
            }
        }
        case 'signOut':{
            return{
                ...state,
                loginCheck:state.loginCheck-1
            }
        }
        default:
            return state
    }
}