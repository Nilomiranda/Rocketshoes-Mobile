import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const tron = Reactotron.configure()
  .use(reactotronRedux())
  .useReactNative()
  .connect();

console.tron = tron;

export default tron;
