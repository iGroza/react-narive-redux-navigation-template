import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createReduxContainer, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import Router from './Router'

const reduxContainer = createReduxContainer(Router);
const mapStateToProps = (state) => ({
    state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(reduxContainer);

// create nav component
class ReduxNavigation extends PureComponent {
    render() {
        const { dispatch, state } = this.props; 
        return <AppWithNavigationState dispatch={dispatch} state={state} />;
    }
}

const ReduxNavigationState = connect(mapStateToProps)(ReduxNavigation);

export { ReduxNavigationState };