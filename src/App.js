import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import FoodList from './components/Food/FoodList';
import Header from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <div className='body'>
        <Header />
        <FoodList />
      </div>
    </Provider>
  );
}

export default App;
