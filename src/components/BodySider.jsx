import React, { Component } from 'react';
import { Icon, Tabs, Col } from 'antd';
import BodyContentOrder from './BodyContentOrder';
import BodyAvatar from './BodyAvatar';

class BodySider extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <BodyAvatar />
                <Tabs type="card" tabPosition="left" defaultActiveKey="2" >
                    <Tabs.TabPane tab={<span><Icon type="user"></Icon>Akun Saya</span>} key="1">
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span><Icon type="rocket"></Icon>Pesenan Saya</span>} key="2">
                        <BodyContentOrder />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        );
    }
}

export default BodySider;
