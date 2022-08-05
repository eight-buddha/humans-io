import {FlatList} from "react-native";
import {useSelector} from "react-redux";

import HumanItem from "../components/HumanItem";

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


MainScreen.navigationOptions = {
    headerTitle: "Humans"
}


export default MainScreen;