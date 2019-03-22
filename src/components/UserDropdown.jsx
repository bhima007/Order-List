import React from 'react';
import { Button, Row } from 'antd'

const UserDropdown = () => {
    return (
        <div>
            <Row className="userDropdownLoginYet">
                Akun Saya
            </Row>
            <Row className="userDropdownLoginYet">
                Pesenan Saya
            </Row>
            <br/>
            <Row>
                <Button type="default" className="userDropdownLoginButton" size="large">Log Out</Button>
            </Row>
        </div>
    );
}

export default UserDropdown;