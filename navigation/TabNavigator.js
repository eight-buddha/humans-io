import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import MainScreen from "../screens/MainScreen";
import CreateHumanScreen from "../screens/CreateHumanScreen";
import HumanDetailScreen from "../screens/HumanDetailScreen";


const MainNavigator = createStackNavigator({
    Main: MainScreen,
    Detail: {
        screen: HumanDetailScreen,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.humanName}'s Details`,
        }),
    },
    Create: CreateHumanScreen
});


export default createAppContainer(MainNavigator);

