import React from 'react';
import { connect } from 'react-redux'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ROUTES } from './Router';

class MainScreen extends React.Component {

    render() {
console.log(this.props);

        return (
            <View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate(ROUTES.SettingsScreen)}>
                    <Text style={{ alignSelf: "center", fontSize: 30 }}>
                        Go to settings
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(MainScreen)