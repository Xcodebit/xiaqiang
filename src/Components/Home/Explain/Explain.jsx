/*数字化手术室*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col, Breadcrumb } from 'antd';

import digital01 from './Img/digital01.png';
import digital02 from './Img/digital02.png';
import digital03 from './Img/digital03.png';
import digital04 from './Img/digital04.png';
import digital05 from './Img/digital05.png';
import digital06 from './Img/digital06.png';
import digital07 from './Img/digital07.png';

@observer
export default class Explain extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const appArr = [
            digital01,
            digital02,
            digital03,
            digital04,
            digital05,
            digital06,
            digital07
        ];
        return (
            <div className="berCenter_bg">
                <Row type="flex" justify="center" align="top" className="main_width" >
                    <Col span={24}>
                        <Breadcrumb className="right" style={{ margin: '15px 0'}}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>数字化手术室</Breadcrumb.Item>
                        </Breadcrumb>
                        <ul>
                            {
                                appArr.map((item, i)=>{
                                    return <li key={item}><img src={item} width={1200} alt=""/></li>
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}
