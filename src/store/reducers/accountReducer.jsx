const accountReducer = (state = [], action) => {
    switch (action.type) {
        case "add":
            if (checkMovieExist(state, action.payload)) {
                console.log("TODO: Remove duplicates");
            }
            return [...state, action.payload];

        default:
            return state;
    }
};

const checkMovieExist = (state, movieName) => {
    return state.find(state => state.Title === movieName);
};

export default accountReducer;
