import Main from "./pages/MainPage/Main.jsx"
import Login from "./pages/LoginPage/Login.jsx"
import Cart from "./pages/CartPage/Cart.jsx"
import Favorites from "./pages/FavoritesPage/Favorites.jsx"
import Search from "./pages/SearchPage/Search.jsx"
import DevicePage from "./pages/DevicePage/DevicePage.jsx"
import Catalog from "./pages/CatalogPage/CatalogPage.jsx"
import Orders from "./Components/Orders/Orders.jsx"
import MackingOrders from "./pages/MackingAnOrders/MackingOrders.jsx"
import { MAINPAGE_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, CART_ROUTE, FAVORITES_ROUTE, SEARCH_ROUTE, DEVICE_ROUTE, ORDERS_ROUTE, MAORDERS_ROUTE, POPULAR_ROUTE } from "./utils/consts.js"
import Popular from "./pages/PopularPage/Popular.jsx"



export const publicRoutes = [
    {
        path: MAINPAGE_ROUTE,
        Component: Main,
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog,
    },
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
    {
        path: CART_ROUTE,
        Component: Cart,
    },
    {
        path: FAVORITES_ROUTE,
        Component: Favorites,
    },
    {
        path: SEARCH_ROUTE+ '/:id'+ '/:type?',
        Component: Search,
    },
    {
        path: POPULAR_ROUTE,
        Component: Popular,
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage,
    },
    {
        path: ORDERS_ROUTE + '/:id?',
        Component: Orders,
    },
    {
        path: MAORDERS_ROUTE,
        Component: MackingOrders,
    }
]