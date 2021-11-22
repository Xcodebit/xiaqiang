/*网络转播*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Row, Col, Breadcrumb} from 'antd';
import { stateVar } from "../../State";

@observer
export default class relay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const { project } = this.props.location.state;

        return (
            <div className="berCenter_bg">
                <Row type="flex" justify="center" align="top" className="main_width">
                    <Col span={24}>
                        <Breadcrumb className="right" style={{margin: '15px 0'}}>
                            <Breadcrumb.Item>系统解决方案</Breadcrumb.Item>
                            <Breadcrumb.Item>{project.title}</Breadcrumb.Item>
                        </Breadcrumb>
                        {
                            project.content &&
                                project.content.map((item, i) => {
                                    return (
                                        <div key={i}>
                                            <img src={stateVar.httpUrl + '/config/img/' + item} alt=""/>
                                        </div>
                                    )
                                })
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}
