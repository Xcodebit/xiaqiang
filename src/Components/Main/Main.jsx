/**
 * Created by Min on 2017/2/9.
 */
import { observer } from 'mobx-react';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { stateVar } from "../../State";
import RightPlug from '../RightPlug/RightPlug';
import mobx from 'mobx';

import { Row, Col, Menu  } from 'antd';

import './Main.scss';
import logoSrc from './img/logo.png';
import request from "../../Utils/Request";

@observer
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'home',
            configData: {
                bannerList: [],
                projectList: [],
                videoList: [],
                worksList: [],
            }
        };
    }
    componentWillMount() {
        const url = stateVar.httpUrl + '/config/config.json?v=' + new Date().getTime();
        request(url, {
            method: "GET",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then((res) => {
            if(res.worksList){
                this.setState({
                    configData: res
                })
            }
        });
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    };
    render() {
        const SubMenu = Menu.SubMenu;
        const { projectList } = this.state.configData;
        return (
            <div className="container">
                <header>
                    <div className="border_bottom">
                            <img style={{paddingTop: '2px'}} src={logoSrc} alt="logo"/>
                            <div className="menus">
                                <Menu
                                    onClick={this.handleClick}
                                    selectedKeys={[this.state.current]}
                                    mode="horizontal"
                                >
                                    <Menu.Item key="home">
                                        <Link to="/home">首页</Link>
                                    </Menu.Item>
                                    <SubMenu title={<span>关于我们</span>}>
                                        <Menu.Item key="firmIntroduce">
                                            <Link to="/firmIntroduce">公司介绍</Link>
                                        </Menu.Item>
                                        <Menu.Item key="contact">
                                            <Link to="/contact">联系我们</Link>
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu title={<span>系统解决方案</span>}>
                                        {
                                            projectList &&
                                                projectList.map((item, i) => {
                                                    return (
                                                        <Menu.Item key={i}>
                                                            <Link to={
                                                                {
                                                                    pathname: '/relay',
                                                                    state: {
                                                                        project: item
                                                                    }
                                                                }
                                                            }>{item.title}</Link>
                                                        </Menu.Item>
                                                    )
                                                })
                                        }
                                    </SubMenu>
                                    <Menu.Item key="worksCenter">
                                        <Link to="/worksCenter">案例中心</Link>
                                    </Menu.Item>
                                </Menu>
                            </div>
                    </div>
                </header>
                <div className="sub-item">
                    {React.cloneElement(this.props.children, { configData: this.state.configData })}
                </div>
                <RightPlug/>
                <footer>
                    <div>
                        版权所有&copy;2017-{new Date().getFullYear()} 广州普盛科技有限公司 Guangzhou Pusheng Technology Co.,Ltd. 实现数字化管理，创造更好的效益.
                    </div>
                </footer>
            </div>
        );
    }
}


