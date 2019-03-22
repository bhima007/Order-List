import React from 'react';
import { Row, Col, Button } from 'antd';

const BodyContentCard = () => {
    return (
        <div>
            <Row justify="space-around" className="bodyContentCardRow">
                <Row>
                    <Col span={16} >
                        <text className="bodyContentPayBefore">Bayar Sebelum</text><br />
                        <text className="bodyContentPayDate">29-02-2019 13:20</text>
                    </Col>
                    <Col span={8} >
                        <text className="bodyContentCardTotal-Cancel">Total Pesenan : </text><b className="bodyCardTotalPrize"> Rp. 9.999.999</b>
                    </Col>
                </Row>
                <br />
                <Row gutter={16}>
                    <Col span={14} >
                        <Button className="bodyContentCardTotal-Cancel">Batalkan Pesenan</Button>
                    </Col>
                    <Col span={10} >
                        <Button className="bodyCardContentButtonPayNow">Bayar Sekarang</Button>
                        <Button type="default" className="bodyCardContentButtonDetail">Detail Pesenan</Button>
                    </Col>
                </Row>
            </Row>

        </div>
    );
}

export default BodyContentCard;