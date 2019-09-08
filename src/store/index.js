/** this file will hold any configuration
 * in regards to our main redux store
 */

import { createStore } from 'redux';
import reducers from './modules/rootReducer';

const store = createStore(reducers);

export default store;
