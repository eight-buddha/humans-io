import  {TextInput as RNTextInput, StyleSheet} from "react-native";

const TextInput = (props) => {
    return (
        <RNTextInput
            {...props}
            style={styles.input}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 4,
        borderWidth: 1,
        borderColor: "#d1d5db",
        borderRadius: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "#f9fafb",
        color: "#4b5563",
        height: 40,
        width: "100%",
        fontSize: 18,
    }
});

export default TextInput;