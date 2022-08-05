import { ADD_HUMAN } from '../actions/human';
import Human from '../../models/human';

const initialState = {
  humans: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HUMAN:
      const newHuman = new Human(
        action.humanData.id,
        action.humanData.name,
        action.humanData.image,
      );

      return {
        humans: state.humans.concat(newHuman),
      };
    default:
      return state;
  }
};
