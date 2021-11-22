
export const main = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Main/Main').default);
    }, 'main');
};

export const home = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Home/Home').default);
    }, 'home');
};
// 数字化手术室
export const digitalOperating = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Home/Explain/Explain').default);
    }, 'digitalOperating');
};
// 一体化手术室转播
export const rebroadcast = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Home/Replay/Replay').default);
    }, 'rebroadcast');
};
// 在线视频
export const onlineVideo = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Home/Video/Video').default);
    }, 'onlineVideo');
};
export const firmIntroduce = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/FirmInfo/FirmInfo').default);
    }, 'firmIntroduce');
};
// 联系我们
export const contact = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Contact/Contact').default);
    }, 'contact');
};
// 转播
export const relay = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/relay/relay').default);
    }, 'relay');
};

// 案例中心
export const worksCenter = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/WorksCenter/WorksCenter').default);
    }, 'worksCenter');
};
// 案例中心/详情
export const details = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/WorksCenter/details/Details').default);
    }, 'details');
};

