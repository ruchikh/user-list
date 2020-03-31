const url = 'https://5e81a49ec130270016a37378.mockapi.io/api/v1/users';

export function fetchData() {
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(data =>
                dispatch({
                    type: 'FETCH_DATA',
                    data
                })
            )
    }
}


export function modalData(id) {
    return {
        type: 'MODAL_DATA',
        id
    }
}