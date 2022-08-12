export const ADD = (items) =>{
    return{
        type:"ADD_DATA",
        payload:items,
    }
}

export const RMV = (id) =>{
    return{
        type:"RMV_DATA",
        payload:id,
    }
}

export const UPD = (item,id) =>{
    return{
        type:"UPDATE_DATA",
        payload:item,
        d:id
    }
}



