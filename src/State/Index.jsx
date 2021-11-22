import { observable, action } from 'mobx';

class State {
    @observable httpUrl = process.env.NODE_ENV === "production" ? window.location.origin || (window.location.protocol +'//' + window.location.host) : 'http://pushengtech.com'; // 域名
    @observable configData = {
        bannerList: [],
        projectList: [],
        videoList: [],
        worksList: [],
    };
    @action('修改配置数据') setConfigData(item){
        this.configData = item
    }
}

export const stateVar = new State();
