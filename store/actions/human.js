//import * as FileSystem from "expo-file-system";


export const ADD_HUMAN = "ADD_HUMAN";

export const addHuman = (name, image) => {
    return {
        type: ADD_HUMAN,
        humanData: {
            id: (new Date()).getTime(),
            name,
            image: "https://i1.sndcdn.com/artworks-000650294095-pjdx6p-t240x240.jpg"
        }
    };
    // return async dispatch => {
    //     const fileName = image.split('/').pop();
    //     const newPath = FileSystem.documentDirectory;// + fileName;

    //     try {

    //         await FileSystem.moveAsync({
    //             from: image,
    //             to: newPath + fileName
    //         });

    //         return {
    //             type: ADD_HUMAN,
    //             humanData: {
    //                 id: (new Date()).getTime(),
    //                 name,
    //                 image: newPath
    //             }
    //         };
    //     } catch (e) {
    //         console.log(e);
    //         throw e;
    //     }
    // }
}