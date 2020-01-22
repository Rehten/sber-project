import React, {PropsWithChildren} from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';
import {AppState} from "./store";
import {connect} from "react-redux";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {thunkSendMessage} from "./thunks";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import List, { Item } from 'devextreme-react/list';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';

interface Props extends PropsWithChildren<{}> {
    thunkSendMessage: (message: string) => ThunkAction<void, AppState, null, Action<string>>
}

const App = (props: Props) => {
    return (
        <Router>
            <div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors: any = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
                <button onClick={() => {
                    props.thunkSendMessage('MyMessage')
                }}>test Redux
                </button>
                <List>
                    <Item>orange</Item>
                    <Item>white</Item>
                    <Item>black</Item>
                </List>
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
