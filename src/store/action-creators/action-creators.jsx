export const addFavourite = amount => {
    return dispatch => {
        dispatch({
            type: "add",
            payload: amount,
        });
    };
};
