import React, { Component } from 'react';
import { Tabs, Card } from 'antd';
import Counter from './Counter';
import BodyContentCardTitle from './BodyContentCardTitle';
import BodyContentCard from './BodyContentCard';

class BodyContentOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Tabs type="line">
                    <Tabs.TabPane tab={<span>Belum Bayar</span>} key="1">
                        <Card title={<BodyContentCardTitle />} className="bodyCard">
                            <BodyContentCard />
                        </Card>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span>Belum Dikirim</span>} key="2"></Tabs.TabPane>
                    <Tabs.TabPane tab={<span>Dalam Pengiriman</span>} key="3"></Tabs.TabPane>
                    <Tabs.TabPane tab={<span>Selesai</span>} key="4"></Tabs.TabPane>
                    <Tabs.TabPane tab={<span>Batal</span>} key="5"></Tabs.TabPane>
                </Tabs>
            </div>
        );
    }
}

export default BodyContentOrder;