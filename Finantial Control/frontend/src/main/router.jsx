import React from 'react'
import {Router, Route, Redirect, IndexRoute, hashHistory} from 'react-router'

import App from '../main/app'
import Dashboard from '../Dashboard/dashboard'
import BillingCycle from '../billingCycles/billingCycles'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)