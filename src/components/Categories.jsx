import React from 'react';
import { Icon, Menu, Dropdown } from 'antd';

const Categories = () => {

    const menu = (
        <Menu>
            <Menu.Item>
                1st menu item
            </Menu.Item>
            <Menu.Item>
                2nd menu item
            </Menu.Item>
            <Menu.Item>
                3d menu item
            </Menu.Item>
        </Menu>
    )

    return (
        <div>
            <Dropdown overlay={menu} className="headerCategory">
                <a className="ant-dropdown-link" href="#">
                    <b>Kategori </b><Icon type="down" style={{color:'#5D5D5D'}} /></a>
            </Dropdown>
        </div>
    );
}

export default Categories;