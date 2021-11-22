import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

import Routes from './Router/Index';

import './Style/base.scss';


render(
    <Router history={hashHistory} routes={Routes.routes()} />,
    document.getElementById('app'),
);
