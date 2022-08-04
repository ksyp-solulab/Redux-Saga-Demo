import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import movieReducer from "./feture/movieSlice"
import rootSaga from "./rootSaga";

const sagaMiddelware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movie: movieReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddelware)
})

sagaMiddelware.run(rootSaga);

export default store;