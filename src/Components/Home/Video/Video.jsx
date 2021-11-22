/*在线视频*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Row, Col, Breadcrumb, Pagination  } from 'antd';
import {stateVar} from "../../../State";

@observer
export default class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
        };
    };

    onChangePagination(page){
        this.setState({
            current: page,
        })

    };
    render() {
        const { current } = this.state;
        const videoList = this.props.configData.videoList ? this.props.configData.videoList : [];
        return (
            <div className="berCenter_bg">
                <Row type="flex" justify="center" align="top" className="main_width" >
                    <Col span={24}>
                        <Breadcrumb className="right" style={{ margin: '15px 0'}}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>在线视频</Breadcrumb.Item>
                        </Breadcrumb>
                        <ul style={{marginTop: 60}}>
                            {
                                videoList[current-1] &&
                                [videoList[current-1]].map((item, i)=>{
                                    return (
                                        <li key={i}>
                                            <p style={{fontSize: 14, margin:15, textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}</p>
                                            <div  style={{border: '1px solid #ccc',marginBottom: 30, minHeight: 700}}>
                                                <video src={stateVar.httpUrl + '/config/video/' + item.videoUrl} width={1200} controls="controls">
                                                    您的浏览器不支持 video 标签。
                                                </video>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="right">
                            <Pagination current={current}
                                        total={videoList.length}
                                        pageSize={1}
                                        onChange={(page)=>this.onChangePagination(page)}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
