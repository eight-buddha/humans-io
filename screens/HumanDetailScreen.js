import {View, Image, StyleSheet} from "react-native";
import {useSelector} from "react-redux";

import Text from "../components/Text";

const HumanDetailScreen = (props) => {
    const humanId = props.navigation.getParam('humanId');
    const selectedHuman = useSelector(state => state.humans.humans.find(human => human.id === humanId));

    return (
        <View>
            <Image source={{uri: selectedHuman.image}} style={styles.image} />
            <Text center variant="h1">{selectedHuman.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: "35%",
        minHeight: 300,
        width: "100%",
        backgroundColor: "#ccc"
    },
})

export default HumanDetailScreen;