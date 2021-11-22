import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {stateVar} from '../../../State';
import { Row, Col, Breadcrumb} from 'antd';

@observer
export default class Details extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const {details} = this.props.location.state;
        return (
            <div className="berCenter_bg">
                <Row type="flex" justify="center" align="top" className="main_width" >
                    <Col span={24}>
                        <div style={{height: 50}}>
                        <Breadcrumb className="right" style={{ margin: '15px 0'}}>
                            <Breadcrumb.Item>案例中心</Breadcrumb.Item>
                            <Breadcrumb.Item>{details.name}</Breadcrumb.Item>
                        </Breadcrumb>
                        </div>
                        <div style={{fontSize: 14, textAlign: 'left',width: 1000,margin: '0 auto'}} dangerouslySetInnerHTML={{__html: details.detailsText}}>
                        </div>
                        <ul style={{marginTop: 30}}>
                            {
                                details.imgs &&
                                details.imgs.map((item, i)=>{
                                    return <li key={i}><img src={stateVar.httpUrl + '/config/img/' + item} alt=""/></li>
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}
