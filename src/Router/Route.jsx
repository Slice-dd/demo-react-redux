import React ,{ Component , PrppTypes } from 'react'
import { Router ,Route , IndexRoute  , useRouterHistory } from 'react-router'
import Counter from '../component/inedx'
import { createHashHistory } from 'history'

class Roots extends Component {
    render () {
        return (
            <div>{this.props.children}</div>
        )
    }
}

// var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
const history =  useRouterHistory(createHashHistory)({ queryKey: true });

const RouterConfig = (
    <Router history={history}>
        <Route path='/' component={Roots}>
            <IndexRoute  component={Counter} />
        </Route>
    </Router>
);
export default RouterConfig