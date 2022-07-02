import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import ScrollToTop from "./hooks/useSrollToTop";

const reRenderDom = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <ScrollToTop>
                        <App />
                    </ScrollToTop>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.querySelector('.wrapper')
    );
}

reRenderDom(store.getState())   
store.subscribe(reRenderDom)