import { createStore } from 'redux';

function reducer(state={sort_type:"",currentGame:{season:2020, game:2, goal:2, pass:11, goalPass:0, ratio:89.40}}, action) {
  switch(action.type) {
    case 'SET_SORT_TYPE': return { ...state, sort_type: action.filter };
    case 'SET_CURRENT_GAME': return { ...state, currentGame: action.game };
    default: return state;
  }
}

const store = createStore(reducer);

export default store;