import React from 'react';
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native';

class SettingsScreen extends React.Component {

    render() {

        return (
            <View>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                <Text style={{ alignSelf: "center", fontSize: 30 }}>
                    Go to main
                </Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(SettingsScreen)