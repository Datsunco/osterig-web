import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './StoreData/userStore';
import Store from './StoreData/store';
import FavoritesStore from './StoreData/favoritesStore';
import CartStore from './StoreData/cartStore';
import DeviceStore from './StoreData/deviceStore';
import CatalogStore from './StoreData/catalogStore';
import SearchStore from './StoreData/searchStore';

const store = new Store()

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Context.Provider value={{
      favorites: new FavoritesStore(),
      store: new Store(),
      userStore: new UserStore(),
      cart: new CartStore(),
      device: new DeviceStore(),
      catalog: new CatalogStore(),
      search: new SearchStore()
    }}>
    <App />
    </Context.Provider>

);

