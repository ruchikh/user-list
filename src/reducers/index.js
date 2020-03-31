const initialState = {
    userData: [],
    modalData: {}
}

export default function rootReducer(state = initialState, action) {
    console.log(action.data)
    switch (action.type) {
        case 'FETCH_DATA': {
            return {
                ...state,
                userData: action.data[0].members,
            }
        }
        case 'MODAL_DATA': {
            const currentId = action.id;
            const filterData = state.userData.filter(item => item.id === currentId);
            return {
                ...state,
                modalData: filterData[0]
            }
        }

        default: return state;
    }
}