const initial_State = {
    user_Data :[],
}

export const todoReducer = (state=initial_State, action) =>{
    switch (action.type) {
        case 'ADD_DATA':
        return{
            ...state,
            user_Data:[...state.user_Data,action.payload]

        }
        case 'RMV_DATA':
            const deleteItem = state.user_Data.filter((e,k)=> k !== action.payload)

                return{
                    ...state,
                    user_Data:deleteItem
                }
        case 'UPDATE_DATA' :
            const updateData = state.user_Data.map((e,k)=> k ==action.d ? action.payload:e)
            return {
                ...state,
                user_Data:updateData
            }

        default:
            return state
    }
}


