import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <h1 className="text-center">Elliot DeMatteis</h1>
            <p className="text-center">My name is Elliot and I'm a site reliability engineer working at Microsoft on Azure Information Protection</p>
      </div>
    );
  }
}
