import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from "../screens/MainScreen";
import CreateHumanScreen from "../screens/CreateHumanScreen";
import HumanDetailScreen from "../screens/HumanDetailScreen";


const MainNavigator = createStackNavigator({
    Listing: MainScreen,
    Detail: {
        screen: HumanDetailScreen,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.humanName}'s Details`,
        }),
    }
});


const TabNavigator = createBottomTabNavigator({
    Main: MainNavigator,
    Create: CreateHumanScreen
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        resetOnBlur: true,
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Main') {
                iconName = focused
                    ? 'ios-people'
                    : 'ios-people-outline';
            } else if (routeName === 'Create') {
                iconName = focused
                    ? 'ios-create'
                    : 'ios-create-outline';
            }

            return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
    }),
});

export default createAppContainer(TabNavigator);

