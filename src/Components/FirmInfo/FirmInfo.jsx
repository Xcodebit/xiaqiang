/*公司介绍*/
import React, {Component} from 'react';
import { Breadcrumb } from 'antd';

import './FirmInfo.scss'

import firm01 from '../../Images/firm01.jpg'
import firm02 from './img/firm02.jpg'

export default class FirmInfo extends Component {

    render() {
        return(
            <div>
                <div className="firm_infroduce">
                    <div className="breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item>关于我们</Breadcrumb.Item>
                            <Breadcrumb.Item>公司介绍</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <img src={firm01}  alt=""/>
                    <div className="firm_main">
                        <div className="content_text">
                            <div>
                                <p className="c_t_title">关于我们</p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;广州普盛科技有限公司（Guangzhou Pusheng Technology Co.,Ltd）是一家集品牌代理、产品研发、工程设计、产品销售、技术培训为一体的综合性解决方案服务商。公司致力于为政府、企业、教育、医疗、公益等行业提供专业的多媒体解决方案。主营业务范围有智能会议系统、大屏幕拼接系统、数字化手术室系统、手术示教转播系统等。
                                </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;公司在研发和设计中不断吸取行业的经验及意见，将各行业优秀的意见及需求应用到产品中去，不断完善产品的功能和性能。以其高性价比、高可用性、高稳定性的产品赢得众多用户的信赖。公司坚持以市场需求为基础，创新为动力，不断追求企业的长久发展，为每一位客户提供专业的服务！
                                </p>
                            </div>
                            <div style={{width: 720,margin : "20px auto" }}>
                                <img src={firm02} alt=""/>
                            </div>
                            <div>
                                <p className="c_t_title">服务理念</p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;广州普盛科技有限公司坚持创新、诚信、合作、共赢的企业精神，以服务客户为企业的根本原则和最高宗旨：客户的需求是我们工作的导向，服务客户是我们工作的目标。我们要以认真负责的态度，精益求精的质量，为用户提供一流的技术支持和售后服务。
                                </p>
                                <p>“让用户更满意”是我们永远的追求！</p>
                            </div>
                            <div>
                                <p className="c_t_title">公司文化</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;创新包括产品、技术、服务各方面的创新。不断改善，为客户提供更新的应用体验，是我们研发产品的动力。</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;诚信是最基本的商业道德。我们不刻意包装和夸大的宣传自己，对待客户实事求是。</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;合作是我们工作和发展的模式。与行业内的公司培养良好的合作关系，拒绝恶性竞争。</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;共赢是我们的目标。互惠互利，帮助客户、合作伙伴创造最大的价值，与客户、合作伙伴共同成长。</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
