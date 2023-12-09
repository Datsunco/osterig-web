import Main from "./pages/MainPage/Main.jsx"
import Login from "./pages/LoginPage/Login.jsx"
import Cart from "./pages/CartPage/Cart.jsx"
import Favorites from "./pages/FavoritesPage/Favorites.jsx"
import Search from "./pages/SearchPage/Search.jsx"
import DevicePage from "./pages/DevicePage/DevicePage.jsx"
import Catalog from "./pages/CatalogPage/CatalogPage.jsx"
import { MAINPAGE_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, CART_ROUTE, FAVORITES_ROUTE, SEARCH_ROUTE, DEVICE_ROUTE} from "./utils/consts.js"


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
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    }
]