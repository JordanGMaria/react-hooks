import React from "react";
import { Route, Switch, Redirect } from "react-router";
import useMemo from "./useMemo";
import useReducer from "./useReducer";
import useContext from "./useContext";
import useCallback from './useCallback';
import useRef from './useRef';
import useStateuseEffect from './useState-useEffect';

const Routes = () => (
  <Switch>
    <Route exact path="/useMemo" component={useMemo} />
    <Route exact path="/useReducer" component={useReducer} />
    <Route exact path="/useContext" component={useContext} />
    <Route exact path="/useCallback" component={useCallback} />
    <Route exact path="/useRef" component={useRef} />
    <Route exact path="/useState-useEffect" component={useStateuseEffect} />
    <Route exact path="/">
      <Redirect to="/useReducer" />
    </Route>
    <Route exact path="*">
      <Redirect to="/useReducer" />
    </Route>
  </Switch>
);

export default Routes;
