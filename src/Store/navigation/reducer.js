import Navigator, { ROUTES } from '../../Navigation/Router'
import { createNavigationReducer, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const navigationMiddleware = createReactNavigationReduxMiddleware(
    state => state.navigation,
);

const nav = createNavigationReducer(Navigator)

export {nav , navigationMiddleware}

