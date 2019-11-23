
const defaultState={
    inputValue:'123',
    list:[1,2]
};
/**
 *
 * @param state 之前的state数据
 * @param action dispatch要改变的数据
 * @returns {{inputValue: string, list: number[]}}
 * reduce只能接收state,不能修改state
 */
export default (state=defaultState,action)=>{
    if(action.type==='change_input_value'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState
    }
    return state
}