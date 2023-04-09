// assets
import { AppstoreAddOutlined, DropboxOutlined } from '@ant-design/icons';

// icons
const icons = {
    AppstoreAddOutlined,
    DropboxOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'product',
    title: 'Product Management',
    type: 'group',
    children: [
        {
            id: 'view-product',
            title: 'Products',
            type: 'item',
            url: '/product',
            icon: icons.DropboxOutlined,
            breadcrumbs: false
        },
        {
            id: 'add-product',
            title: 'Add Product',
            type: 'item',
            url: '/product/add',
            icon: icons.AppstoreAddOutlined,
            breadcrumbs: false
        }
    ]
};

export default pages;
