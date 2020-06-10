import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { FourOhFour } from './components/FourOhFour';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/Projects" component={Projects} />
                <Route component={FourOhFour} />
            </Switch>
      </Layout>
    );
  }
}
