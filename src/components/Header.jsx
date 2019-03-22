import React from 'react';
import { Row, Col } from 'antd';
import SearchBox from './SearchBox';
import HeaderLogoKanan from './HeaderLogoKanan';
import Categories from './Categories';
import TabHeader from './TabHeader';
import User from './User';
import Greeting from './Greeting';
import LeftLogoHeader from './LeftLogoHeader';
import lg_mp_medium from './mp-icon/lg_mp_medium.png';

const Header = () => {
    return (
        <div className="headerBorder">
            <Row className="headerUp">
                <Col span={6} >
                    <LeftLogoHeader
                        leftLogo={lg_mp_medium}
                    />
                </Col>
                <Col span={12} >
                    <SearchBox />
                </Col>
                <Col span={5} >
                    <HeaderLogoKanan />
                </Col>
            </Row>
            <Row >
                <Col span={3} >
                    <Categories />
                </Col>
                <Col span={10}>
                    <TabHeader />
                </Col>
                <Col span={6}>
                    <Greeting />
                </Col>
                <Col span={5} >
                    <User />
                </Col>
            </Row>
        </div>
    );
}

export default Header;