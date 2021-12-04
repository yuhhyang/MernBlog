const Reducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return{
                user: null,
                isFetching: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            return{
                user: action.payload,
                isFetching: false,
                error: false
            };
        // 登入成功時 localstorage 會顯示登入者資訊，登出即變成 null
        case "LOGIN_FAILURE":
            return{
                user: null,
                isFetching: false,
                error: true
            };
        case "LOGOUT":
            return{
                user: null,
                isFetching: false,
                error: false
            };
        default:
            return state;
    }
};
export default Reducer;