export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVORITES':
            if (!state.action) {
                return {
                    ...state,
                    action: [...state, action.payload]
                }
            } else {
                const item = state.action.find((i) => i.id === action.payload.id);
                if (!item) {
                    return {
                        ...state,
                        action: [...state.action, action.payload]
                    }
                }
            }
        default:
            return state
    }
}



