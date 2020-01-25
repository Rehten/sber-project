import React, {PropsWithChildren} from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';
import {AppState} from "./redux";
import {connect} from "react-redux";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {thunkPostEntity} from "./redux/test-entity/thunks";

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';
import {TestEntity} from "./redux/test-entity/types";
import {AppRoutes} from "./App.routes";
import {PolygonPage} from "./pages/polygon";
import {MainPage} from "./pages/main";

interface Props extends PropsWithChildren<{}> {
    testEntity: TestEntity | null;
    thunkPostEntity: (id: number) => ThunkAction<void, AppState, null, Action<string>>
}

const App = (props: Props) => {
    return (
        <Router>
            <nav>
                <Link to={AppRoutes.Main}>Main</Link>
                <Link to={AppRoutes.Polygon}>Polygon</Link>
            </nav>
            <Switch>
                <Route exact path={AppRoutes.Root} component={MainPage}/>
                <Route exact path={AppRoutes.Main} component={MainPage}/>
                <Route exact path={AppRoutes.Polygon} component={PolygonPage}/>
            </Switch>
        </Router>
    );
};

const mapStateToProps = (state: AppState) => ({
    testEntity: state.testEntity
});

export default connect(
    mapStateToProps,
    {thunkPostEntity}
)(App);
