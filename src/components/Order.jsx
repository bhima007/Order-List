import React, { Component } from 'react';
import { Row } from 'antd';
import './Style.css';
import Header from './Header';
import TopHeader from './TopHeader';
import Body from './Body';

class Order extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div>
                    <Row>
                        <TopHeader />
                    </Row>
                    <Row>
                        <Header />
                    </Row>
                </div>
                <div>
                    <Body />
                </div>
            </div>
        );
    }
}

export default Order;