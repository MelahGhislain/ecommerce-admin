// assets
import { CodeSandboxOutlined, DeploymentUnitOutlined } from '@ant-design/icons';

// icons
const icons = {
    CodeSandboxOutlined,
    DeploymentUnitOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'category',
    title: 'Category Management',
    type: 'group',
    children: [
        {
            id: 'view-category',
            title: 'Categories',
            type: 'item',
            url: '/category',
            icon: icons.CodeSandboxOutlined,
            breadcrumbs: false
        },
        {
            id: 'add-category',
            title: 'Add Category',
            type: 'item',
            url: '/category/add',
            icon: icons.DeploymentUnitOutlined,
            breadcrumbs: false
        }
    ]
};

export default utilities;
