import * as constants from './constants'

export const inputValue=()=>({
    type: constants.INPUT_VALUE
});


export const setInputValue=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:constants.INPUT_VALUE,
            value:data
        })
    }
}