import React, { Component } from 'react';
import BodySider from './BodySider';
import { Col } from 'antd';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="bodyPageAll">
                
                <Col>
                    <div>
                        <BodySider />
                    </div>
                </Col>

            </div>
        );
    }
}

export default Body;