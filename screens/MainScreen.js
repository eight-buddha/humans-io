import {FlatList, Platform} from "react-native";
import {useSelector} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import HumanItem from "../components/HumanItem";
import CustomHeaderButton from "../components/CustomHeaderButton";

const MainScreen = (props) => {
    const humans = useSelector(state => state.humans.humans);
    return (
        <FlatList
            data={humans}
            renderItem={itemData => <HumanItem
                {...itemData.item}
                onPress={() => {
                    props.navigation.navigate('Detail', {
                        humanName: itemData.item.name,
                        humanId: itemData.item.id
                    })
                }}
            />}
        />
    )
}


MainScreen.navigationOptions = navData => {
    return {
        headerTitle: "Humans",
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Add Place"
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                        onPress={() => {
                            navData.navigation.navigate('Create');
                        }}
                    />
                </HeaderButtons>
            )
        }
    }
}


export default MainScreen;