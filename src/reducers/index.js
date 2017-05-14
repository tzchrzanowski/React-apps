import{combineReducers} from 'redux';
import champion from './championReducer';

const rootReducer = combineReducers({
    champion
});

export default rootReducer;
