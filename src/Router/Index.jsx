import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    home,
    main,
    firmIntroduce,
    contact,
    relay,
    worksCenter,
    digitalOperating,
    rebroadcast,
    details,
    onlineVideo,
} from './Chunks';

const routes = params => (
    <Route path="/" getComponent={main}>
        <IndexRoute getComponent={home} />
        <Route path="/home" getComponent={home} params={params} />
        <Route path="/digitalOperating" getComponent={digitalOperating} params={params} />
        <Route path="/rebroadcast" getComponent={rebroadcast} params={params} />
        <Route path="/contact" getComponent={contact} params={params} />
        <Route path="/onlineVideo" getComponent={onlineVideo} params={params} />
        <Route path="/relay" getComponent={relay} params={params} />
        <Route path="/firmIntroduce" getComponent={firmIntroduce} params={params} />

        <Route path="/worksCenter" getComponent={worksCenter} params={params} />
        <Route path="/details" getComponent={details} params={params} />
    </Route>
);

export default { routes };
