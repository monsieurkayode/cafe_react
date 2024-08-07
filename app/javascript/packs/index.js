import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import { ToastContainer } from 'react-toastify';

import apollo from "../utils/apollo";
import store from '../store';

import Cafe from '../pages/Cafe';
import AddUpdateMenu from '../pages/AddUpdateMenu';

const container = document.querySelector("#root")
const root = createRoot(container)

root.render(
	<Provider store={store}>
		<ApolloProvider client={apollo()}>
      <BrowserRouter>
        <ToastContainer hideProgressBar={true} />
        <Switch>
          <Route exact path={['/new', '/:id']} component={AddUpdateMenu} />
          <Route exact path='/' component={Cafe} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
	</Provider>
);
