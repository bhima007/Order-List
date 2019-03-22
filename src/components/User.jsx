import React, { Component } from 'react';
import { Icon, Dropdown, Menu } from 'antd';
import UserDropdownLogin from './UserDropdownLogin';
import UserDropdown from './UserDropdown';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLog: false
        }
    }

    menuUser = () => {
        return (
            <Menu className="userDropdownLogin">
                <UserDropdown />
            </Menu>)
    }
    menuLogin = () => {
        return (
            <Menu className="userDropdownLogin">
                <UserDropdownLogin />
            </Menu>
        )
    };

    dropdownLogin = () => {
        return (
            <Dropdown overlay={this.menuUser()} placement="bottomCenter" trigger={['click']} className="headerUser">
                <a className="ant-dropdown-link" href="#">
                    <Icon type="user" style={{ color: '#5D5D5D' }} /><b style={{color:"#4A4A4A"}}> Customer </b><Icon type="down" style={{ color: '#5D5D5D' }} />
                </a>
            </Dropdown>
        )
    }

    dropdownLoginYet = () => {
        return (
            <Dropdown overlay={this.menuLogin()} trigger={['click']} className="headerUser">
                <a className="ant-dropdown-link" href="#">
                    <Icon type="user" style={{ color: '#5D5D5D' }} /><b style={{color:"#4A4A4A"}}> Login </b><Icon type="down" style={{ color: '#5D5D5D' }} />
                </a>
            </Dropdown >
        )
    }

    render() {
        const { userLog } = this.state

        return (
            <div>
                {userLog ?
                    this.dropdownLogin() : this.dropdownLoginYet()
                }
            </div>
        );
    }
}

export default User;
