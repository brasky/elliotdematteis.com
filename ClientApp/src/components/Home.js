import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <h1 className="text-center">Hello</h1>
            <p className="text-center">My name is Elliot and this will eventually be a website about me.</p>

      </div>
    );
  }
}
