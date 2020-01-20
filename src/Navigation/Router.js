import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./MainScreen";
import SettingsScreen from "./SettingsScreen";

export const ROUTES = {
    MainScreen: 'MainScreen',
    SettingsScreen: 'SettingsScreen'
}

const Router = createStackNavigator({

    [ROUTES.MainScreen]: {
        screen: MainScreen,
        navigationOptions: {
            title: 'Main screen',
            headerStyle: { backgroundColor: '#f05555' },
            headerTintColor: '#ffffff',
          }
    },

    [ROUTES.SettingsScreen]: {
        screen: SettingsScreen,
        navigationOptions: {
            title: 'Settings screen',
            headerStyle: { backgroundColor: '#f05555' },
            headerTintColor: '#ffffff',
          }
    }

});

export default Router