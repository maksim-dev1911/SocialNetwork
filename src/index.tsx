import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./store";
import ErrorBoundary from "./components/App/ErrorBoundary/ErrorBoundary";

const store = setupStore();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ErrorBoundary>
                <App/>
            </ErrorBoundary>
        </BrowserRouter>
    </Provider>
);
