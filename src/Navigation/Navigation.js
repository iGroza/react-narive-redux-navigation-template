import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ReduxNavigationState } from './ReduxNavigation';

class Navigation extends Component {
    render() {
        console.log(this.props);
        return (
            <ReduxNavigationState/>
        )
    }
}

const mapNavStateToProps = state => ({
    state: state.nav
})

export default connect(null, mapNavStateToProps)(Navigation)