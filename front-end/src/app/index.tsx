/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { DetailedPage } from './components/DetailedPage/Loadable';
import { SignInPage } from './components/SignInPage/Loadable';
import { SignUpPage } from './components/SignUpPage/Loadable';
import { Header } from './containers/Header';
import { SignoutPage } from './components/SignoutPage/Loadable';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:id" component={DetailedPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signout" component={SignoutPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}
