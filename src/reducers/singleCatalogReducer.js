export default (state = [], action) => {

    switch (action.type) {
        case 'FETCH_SINGLE_CATALOG':
            return [...state, action.payload]

        default:
            return state
    }
}