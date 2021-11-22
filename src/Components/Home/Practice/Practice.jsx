/*数字化手术室*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col, Breadcrumb, Anchor } from 'antd';
const { Link } = Anchor;

import rebro01 from './Img/rebro01.png';
import rebro02 from './Img/rebro02.png';
import rebro03 from './Img/rebro03.png';
import rebro04 from './Img/rebro04.png';
import rebro05 from './Img/rebro05.png';
import rebro06 from './Img/rebro06.png';
import rebro07 from './Img/rebro07.png';
import rebro08 from './Img/rebro08.png';
import rebro09 from './Img/rebro09.png';
import rebro10 from './Img/rebro10.png';
import rebro11 from './Img/rebro11.png';
import rebro12 from './Img/rebro12.png';
import rebro13 from './Img/rebro13.png';
import rebro14 from './Img/rebro14.png';
import rebro15 from './Img/rebro15.png';

@observer
export default class Practice extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const appArr = [
            rebro01,
            rebro02,
            rebro03,
            rebro04,
            rebro05,
            rebro06,
            rebro07,
            rebro08,
            rebro09,
            rebro10,
            rebro11,
            rebro12,
            rebro13,
            rebro14,
            rebro15
        ];
        return (
            <div className="berCenter_bg">
                <Row type="flex" justify="center" align="top" className="main_width" >
                    <Col span={24}>
                        <Breadcrumb className="right" style={{ margin: '15px 0'}}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>一体化手术室转播</Breadcrumb.Item>
                        </Breadcrumb>
                        <ul>
                            {
                                appArr.map((item, i)=>{
                                    return <li key={item}><img src={item} alt=""/></li>
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}
