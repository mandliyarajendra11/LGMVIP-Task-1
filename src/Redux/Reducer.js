const initialData={
    list:[]
}
export const Reducer=(state=initialData,action)=>{
switch(action.type)
{
    case "add":
    const {id,data}=action.payload;
    return {
        ...state,
        list:[
            ...state.list,
            {
                id:id,
                data:data
        }
        ]
    }
    case "clear all":
        return {
            list:[]
        }
    case "delete":
        const val=state.list.filter((ele)=>action.id!==ele.id)
        return {
            ...state,
            list:val
        }
    default :return state 

}
}
