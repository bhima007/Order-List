import React from 'react';
import Sepatu from './Product/Sepatu.jpg';
import { Col, Row } from 'antd';

const BodyContentCardTitle = () => {
    return (
        <div>
            <Row justify="space-around" className="bodyContentCardTitleRow">
                <Col span="3">
                    <img src={Sepatu} className="bodyContentCardTitleImage" alt="" />
                </Col>
                <Col span="19">
                    <Row>
                        <b className="bodyCardContentTitleProduct">Sepatu</b>
                        <p className="bodyCardContentTitleDetail">beli sepatu</p>
                    </Row>
                    <Row>
                        <p className="bodyContentCardTitleCount">Jumlah: 1 pcs</p>
                    </Row>
                </Col>
                <Col span="1">
                    <p className="bodyContentCardTitlePrice">Rp. 9.999.999</p>
                </Col>
            </Row>
        </div>
    );
}

export default BodyContentCardTitle;