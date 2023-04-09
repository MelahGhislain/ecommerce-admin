import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard')));
const ProductPage = Loadable(lazy(() => import('../pages/product')));
const AddProduct = Loadable(lazy(() => import('../pages/product/addProduct')));
const CategoryPage = Loadable(lazy(() => import('../pages/category')));
const AddCategory = Loadable(lazy(() => import('../pages/category/add')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            element: <DashboardDefault />
        },
        {
            path: 'product',
            element: <ProductPage />
        },
        {
            path: 'product/add',
            element: <AddProduct />
        },
        {
            path: 'category',
            element: <CategoryPage />
        },
        {
            path: 'category/add',
            element: <AddCategory />
        }
    ]
};

export default MainRoutes;
