import React, { Component, Suspense } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Logout from './containers/Auth/Logout/Logout'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'
import Spinner from './components/UI/Spinner/Spinner'
const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'))
const Orders = React.lazy(() => import('./containers/Orders/Orders'))
const Auth = React.lazy(() => import('./containers/Auth/Auth'))

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup()
  }
  render() {



    let routes = (
      <Suspense  fallback={<Spinner/>}>
        <Switch>
          <Route path="/auth" exact component={Auth}/>
          <Route path="/" exact component={BurgerBuilder}/>
          <Redirect to='/' />
        </Switch>
      </Suspense>
    )

    if (this.props.isAuthenticated){
      routes = (
        <Suspense  fallback={<Spinner/>}>
          <Switch>
            <Route path="/auth" exact component={Auth}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/logout" exact component={Logout}/>
            <Route path="/" exact component={BurgerBuilder}/>
            <Redirect to='/' />
          </Switch>
        </Suspense>
      )
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
