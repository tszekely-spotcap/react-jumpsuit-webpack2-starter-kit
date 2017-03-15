import React from 'react';

// import { Component, Actions } from 'jumpsuit';
import Component from 'jumpsuit/lib/component';
import { Actions } from 'jumpstate';

import './Home.less';

const Home = Component({
  render() {
    return (
      <section className="home">
        <div
          className="home__hero"
          style={{ backgroundImage: `url('${this.props.image}')` }} />

        <h1>Home</h1>

        <strong className="home__date">Current date: { this.props.date.toString() }</strong>

        <button
          className="home__button"
          onClick={() => Actions.setDate(new Date())}>
          Update
        </button>

        <button
          className="home__button"
          onClick={Actions.setImage}>
          Update image
        </button>
      </section>
    );
  }
}, state => ({
  date: state.app.currentDate,
  image: state.app.image
}));

export default Home;
