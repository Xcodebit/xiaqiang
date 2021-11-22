/*右边快捷方式组件*/
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { Popover, Button } from 'antd';
import {Link} from 'react-router';

import './Rightplug.scss';

import qrcode01 from './Img/qrcode01.png';
import addQQ from './Img/addQQ.png';

@observer
export default class RightPlug extends Component {

    render() {
        return (
            <div className="right_plug">
                <ul className="right_list">
                    <li className="email_content">
                        <Popover placement="left" trigger="hover"
                                 content={<div className="phone_content">
                                     <p>Email-1: 269593629@qq.com</p>
                                     <p>Email-2: 369553911@qq.com</p>
                                 </div>}
                        >
                            <i className="email r_p_common"></i>
                        </Popover>
                    </li>
                    <li className="qq_content">
                        <Popover placement="left" trigger="hover"
                                 content={<div className="phone_content">
                                     <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=269593629&site=qq&menu=yes">
                                         <img src={addQQ} alt="加好友" title="269593629"/>
                                     </a>
                                     <br/>
                                     <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=369553911&site=qq&menu=yes">
                                         <img src={addQQ} alt="加好友" title="369553911"/>
                                     </a>
                                 </div>}
                        >
                            <i className="qq r_p_common"></i>
                        </Popover>
                    </li>
                    <li>
                        <Popover placement="left" trigger="hover"
                                 content={<div className="phone_content">
                                     <p>Tel-1: 13678993281</p>
                                     <p>Tel-2: 13042066767</p>
                                 </div>}
                        >
                            <i className="phone r_p_common"></i>
                        </Popover>
                    </li>
                    <li>
                        <Popover placement="left" title='手机扫一扫，加微信' content={<img src={qrcode01} width={180} alt=""/>} trigger="hover">
                            <i className="wechat r_p_common"></i>
                        </Popover>
                    </li>
                </ul>
            </div>
        );
    }
}
