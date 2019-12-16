import { combineReducers } from "redux-immutable"; // 统一数据格式
import { reducer as loginReducer } from "../page/login/store";
// 合并所有reducer
const reducer = combineReducers({
    login: loginReducer
});
export default reducer;
