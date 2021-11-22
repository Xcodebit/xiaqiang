import React, {Component} from 'react';
import { Link } from 'react-router';
import { Carousel, Button  } from 'antd';
import {stateVar} from "../../State";

import './Home.scss';

import item1Src from './img/item1.jpg';
import szh from './img/szh.png';
import znh from './img/znh.png';
import item1_icon from './img/item1_icon.png';

export default class Home extends Component {

    render() {
        const { bannerList } = this.props.configData;
        return (
            <div>
                <div style={{width:1100, height: 400, margin: '30px auto 0'}}>
                    <Carousel autoplay effect="fade">
                        {
                            bannerList.map((item, i) => {
                                return <div key={i}><img src={stateVar.httpUrl + '/config/img/banner/' + item.img} alt={item.title}/></div>
                            })
                        }
                    </Carousel>
                </div>
                <main>
                    <ul className="dataList clear">
                        <li className="list">
                            <div className="tit">
                                <i>
                                    <img src={item1_icon} width="41" height="41" alt=""/>
                                    数字化手术室
                                </i>
                            </div>
                            <div className="content">
                                <img src={szh}  alt=""/>
                                <p className="ellipsis">将传统的手术麻醉和数字化手术室相结合，搭建全数字化的信息服务平台，实现设备及信息高度集成，重塑医护业务流程 统的手术麻醉和数字化手术室相结合，搭建全数字化的信息服务平台，实现设备及信息高度集成，重塑医护业务流。</p>

                                <a className="button_a enter" href="#/digitalOperating">查看详细</a>
                            </div>
                        </li>
                        <li className="list">
                            <div className="tit">
                                <i>
                                    <img src={item1_icon} width="41" height="41" alt=""/>
                                    一体化手术室转播
                                </i>
                            </div>
                            <div className="content">
                                <img src={item1Src}  alt=""/>
                                <p className="ellipsis">基于IP网络，集3D/2D高清手术直播、视音频实时双向交互、手术录制、点播功能于一体手术转播系统。手术室与会议室视音频传输低延时（高清&lt;=200毫秒），实时播放。系统为分布式控制结构，采用了软交换技术、高清晰度的数字视频编码技术和多项自有的音视频压缩和传输控制技术。院内可以使用医院现有局域网或光纤，院外可以使用电信、联通或移动的专线网络，实现院内、院外的手术转播功能。</p>
                                <a className="button_a enter" href="#/rebroadcast">查看详细</a>
                            </div>
                        </li>
                        <li className="list">
                            <div className="tit">
                                <i>
                                    <img src={item1_icon} width="41" height="41" alt=""/>
                                    智能会议系统
                                </i>
                            </div>
                            <div className="content">
                                <img src={znh}  alt=""/>
                                <p className="ellipsis">轻松实现远程会议、远程培训和异地协作办公，支持丰富的多媒体教学和课件管理，可实现多方互动、全网直播 。</p>
                                <Button className="enter" type="primary">查看详细</Button>
                            </div>
                        </li>
                        <li className="list">
                            <div className="tit">
                                <i>
                                    <img src={item1_icon} width="41" height="41" alt=""/>
                                    在线视频
                                </i>
                            </div>
                            <div className="content videobg">
                                {/*<Button className="enter" type="primary">*/}
                                    <a className="button_a enter" href="#/onlineVideo">查看详细</a>
                                {/*</Button>*/}
                            </div>
                        </li>
                    </ul>
                </main>
            </div>
        );
    }
}
