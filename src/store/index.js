/** this file will hold any configuration
 * in regards to our main redux store
 */

import { createStore } from 'redux';
import reducers from './modules/rootReducer';
import Reactotron from '../config/ReactotronConfig';

const store = createStore(reducers, Reactotron.createEnhancer());

export default store;
