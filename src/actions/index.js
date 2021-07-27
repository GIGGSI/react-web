import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchData = () => async dispatch => {
    const response = await jsonPlaceholder.get('/photos');
    dispatch({ type: 'FETCH_DATA', payload: response.data.filter((item) => item.albumId <= 5) })
}

export const fetchSingleCatalogPage = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/albums/${id}/photos`);

    dispatch({ type: 'FETCH_SINGLE_CATALOG', payload: response.data })
}


export const addFavorites = (albumId, id, title, thumbnailUrl, url,) => (dispatch, getState) => {
    dispatch({
        type: 'ADD_FAVORITES', payload: {
            albumId, id, title, thumbnailUrl, url
        }
    })

}