import {View, StyleSheet, Button} from "react-native";
import {useDispatch} from "react-redux";
import {useCallback, useState} from "react";

import TextInput from "../components/TextInput";
import Text from "../components/Text"
import ImagePicker from "../components/ImagePicker";
import * as humanActions from "../store/actions/human";

const CreateHumanScreen = (props) => {
    const [humanName, setHumanName] = useState('');
    const [image, setImage] = useState('');

    const dispatch = useDispatch();

    const imageTakenHandler = useCallback(imagePath => {
        setImage(imagePath);
    }, []);

    const handleSave = useCallback(() => {
        dispatch(humanActions.addHuman(humanName, image))
        props.navigation.navigate("Main");
    }, [humanName, image]);

    return (
        <View style={styles.container}>
            <Text variant="h1" center>Add New Human</Text>
            <View style={styles.innerContainer}>
                <ImagePicker onImageTaken={imageTakenHandler} />

                <TextInput
                    placeholder="Human name"
                    onChangeText={(name) => setHumanName(name)}
                />
                <Button title="Save" onPress={handleSave} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 40,
    },
    innerContainer: {
        paddingHorizontal: 8,
        width: "100%",
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#a3a3a3"
    }
})


export default CreateHumanScreen;