import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import { ToastContainer } from 'react-toastify';

import apollo from "../utils/apollo";
import store from '../store';

import Cafe from '../pages/Cafe';
import AddMenu from '../pages/AddMenu';

render(
	<Provider store={store}>
		<ApolloProvider client={apollo()}>
      <BrowserRouter>
        <ToastContainer hideProgressBar={true} />
        <Switch>
          <Route exact path='/new' component={AddMenu} />
          <Route exact path='/' component={Cafe} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
	</Provider>,
	document.querySelector("#root")
);
