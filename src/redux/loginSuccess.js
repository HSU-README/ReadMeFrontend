const initialState = {
	loginCheck: false
}

export default function countingReducer(state = initialState, action) {
	switch (action.type) {
		case 'signIn': {//로그인 되어있는 경우
			return {
				...state,
				loginCheck: true
			}
		}
        case 'signOut':{ //로그아웃 한 경우
            return{
                ...state,
                loginCheck:false
            }
        }
		default: //처음 접속한 경우
			return state
	}
}