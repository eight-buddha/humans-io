import {View, Image, StyleSheet, Button} from "react-native";
import {useSelector} from "react-redux";

import Text from "../components/Text";

const HumanDetailScreen = (props) => {
    const humanId = props.navigation.getParam('humanId');
    console.log({humanId})
    const selectedHuman = useSelector(state => state.humans.humans.find(human => human.id === humanId));
    console.log({selectedHuman})

    return (
        <View>
            <Image source={{uri: selectedHuman.image}} style={styles.image} />
            <Text center variant="h1">{selectedHuman.name}</Text>

            <View style={styles.buttonContainer}>
                <Button title="Edit" onPress={() => console.log('Edit')} style={styles.button} />
                <Button title="Delete" onPress={() => console.log('Delete')} style={styles.button} />
            </View>
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
    buttonContainer: {
        // flex: 1,
        // flexDirection: "row",
        // justifyContent: "space-between",
        // backgroundColor: "yellow"
    },
    button: {
        flex:1,
        width: "40%",
        height: 40,
    }
})

export default HumanDetailScreen;