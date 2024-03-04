import * as React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import { observer} from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '.';



function App() {
  const { cart, store, favorites } = useContext(Context);

  store.setFavStore(favorites)
  return (
    <BrowserRouter>
          <AppRouter/>
    </BrowserRouter>
  );
}

export default observer(App); 
