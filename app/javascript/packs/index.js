import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";

import apollo from "../utils/apollo";
import store from '../store';

import Cafe from '../pages/Cafe';

render(
	<Provider store={store}>
		<ApolloProvider client={apollo()}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Cafe} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
	</Provider>,
	document.querySelector("#root")
);
