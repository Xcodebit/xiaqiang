/*联系我们*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';

import './Contact.scss';
import ct_01 from './img/ct_01.jpg';
import qrcode01 from '../RightPlug/Img/qrcode01.png';
import qrcode02 from '../RightPlug/Img/qrcode02.png';

@observer
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    componentDidMount () {
        this.getBMap();
    }

    getBMap() {
        var BMap = window.BMap;
        var map = new BMap.Map("allmap"); // 创建Map实例

        let point = new BMap.Point(113.445284,23.176786);
        map.centerAndZoom(point, 12); // 初始化地图,设置中心点坐标和地图级别
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);

        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity("广州"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    }

    render() {
        return (
            <div className="contact clear">
                <img style={{marginTop: 10}} width='100%' src={ct_01} alt=""/>
                <div
                    id='allmap'
                    className="map_p right"
                    style={{
                        width:'600px',
                        height:'500px'
                    }} />

                <div className="text">
                    <p>地址：广州市高新技术产业开发区科珠路232号3栋526房</p>
                    <p>电话：13678993281，13042066767</p>
                    <p>QQ：269593629，369553911</p>
                    <p>邮箱：269593629@qq.com，369553911@qq.com</p>
                    <p>微信：
                        <img width={150} style={{verticalAlign: 'top', marginRight: 10}} src={qrcode01} alt=""/>
                        <img width={150} style={{verticalAlign: 'top'}} src={qrcode02} alt=""/>
                    </p>
                </div>
            </div>
        )
    }
}
