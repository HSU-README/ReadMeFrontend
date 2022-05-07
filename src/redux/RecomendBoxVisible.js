const initialState={
    visibleCheck:false
}

export default function RecomendBoxVisibleReducer(state=initialState,action){
    switch(action.type){
        case 'visible':{
            return{
                ...state,
                visibleCheck:true
            }
        }
        case 'invisible':{
            return{
                ...state,
                visibleCheck:false
            }
        }
        default:
            return state
    }
}