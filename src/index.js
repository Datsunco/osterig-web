import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './StoreData/userStore';
import Store from './StoreData/store';
import ordersStore from './StoreData/ordersStore';
import FavoritesStore from './StoreData/favoritesStore';
import CartStore from './StoreData/cartStore';
import DeviceStore from './StoreData/deviceStore';
import CatalogStore from './StoreData/catalogStore';
import SearchStore from './StoreData/searchStore';
import CheckoutStore from './StoreData/checkoutStore';

const store = new Store()

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Context.Provider value={{
      orders: new ordersStore(),
      favorites: new FavoritesStore(),
      store: new Store(),
      userStore: new UserStore(),
      cart: new CartStore(),
      device: new DeviceStore(),
      catalog: new CatalogStore(),
      search: new SearchStore(),
      checkout: new CheckoutStore(),
    }}>
    <App />
    </Context.Provider>

);

