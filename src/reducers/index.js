import { combineReducers } from 'redux'
import catalogReducer from './catalogReducer'
import singleCatalogReducer from './singleCatalogReducer'
import favoriteReducer from './favoritesReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'favorites',

    ]
}
const rootReducer = combineReducers({
    catalog: catalogReducer,
    singleCatalog: singleCatalogReducer,
    favorites: favoriteReducer,
})

export default persistReducer(persistConfig, rootReducer)