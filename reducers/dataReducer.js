const initialState = {
    data: []
}

export default function dataReducer(state = initialState, action) {
    switch(action.type) {
        case 'SOMETHING':
            return state;

        default:
            return state;
    }
}