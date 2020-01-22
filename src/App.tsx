import React, {PropsWithChildren} from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';
import {AppState} from "./store";
import {connect} from "react-redux";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {thunkSendMessage} from "./thunks";

interface Props extends PropsWithChildren<{}> {
    thunkSendMessage: (message: string) => ThunkAction<void, AppState, null, Action<string>>
}

const App = (props: Props) => {
    return (
        <Router>
            <div>
                <button onClick={() => {
                    props.thunkSendMessage('MyMessage')
                }}>test Redux
                </button>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/foo">Foo</Link>
                    <Link to="/bar">Bar</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={() => <div>Home</div>}/>
                    <Route exact path="/foo" component={() => <div>Foo</div>}/>
                    <Route exact path="/bar" component={() => <div>Bar</div>}/>
                </Switch>
            </div>
        </Router>
    );
};

const mapStateToProps = (state: AppState) => ({
    system: state.system,
    chat: state.chat
});

export default connect(
    mapStateToProps,
    {thunkSendMessage}
)(App);
