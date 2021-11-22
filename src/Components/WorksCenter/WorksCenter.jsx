/*案例中心*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import mobx from "mobx";
import {Row, Col, Card} from 'antd';
import {Link} from 'react-router';
import {stateVar} from '../../State';

import './WorksCenter.scss';

@observer
export default class WorksCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const {worksList} = this.props.configData;

        return (
            <div className="berCenter_bg worksCenter">
                <Row type="flex" justify="center" align="top" className="main_width">
                    <Col span={24}>
                        <ul className="w_c_content clear">
                            {
                                worksList.map((item, i) => {
                                    return (
                                        <li key={i} className="clear">
                                            <p className="w_c_date left">{item.time}</p>
                                            <ul className="works_c_list left">
                                                {
                                                    item.content.map((val, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <Link
                                                                    to={
                                                                        {
                                                                            pathname: "/details",
                                                                            state: {
                                                                                details: val
                                                                            }
                                                                        }
                                                                    }
                                                                >
                                                                    <Card style={{width: 240}} bodyStyle={{padding: 0}}>
                                                                        <div className="custom-image">
                                                                            <img alt="example" width="100%"
                                                                                 src={stateVar.httpUrl + '/config/img/' + val.imgTitle}
                                                                                 style={{display: 'block'}}/>
                                                                        </div>
                                                                        <div className="custom-card">
                                                                            <h2>{val.name}</h2>
                                                                        </div>
                                                                    </Card>
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }

                        </ul>

                    </Col>
                </Row>
            </div>
        )
    }
}
