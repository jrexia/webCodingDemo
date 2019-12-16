import * as constants from './constants'
import {fromJS} from 'immutable'; // 使用immutable生成一个不可改变的immutable对象


const defaultState =fromJS({
    inputValue: '123',
    list      : [1, 2]
});
/**
 *
 * @param state 之前的state数据
 * @param action dispatch要改变的数据
 * @returns {{inputValue: string, list: number[]}}
 * reduce只能接收state,不能修改state
 */
export default (state = defaultState, action) => {
    if (action.type === constants.INPUT_VALUE) {
        // immutable的set方法,会结合之前immutable对象的值和set设置的值,返回一个全新的对象
        return state.set('inputValue', action.value)
    }
    return state
}