const gifsReducer = (state = {}, action) => {
    console.log('state', state);
    switch (action.type) {
        case 'SET GIF':
            return action.payload;
        default:
            return state;
    }
}

export default gifsReducer;