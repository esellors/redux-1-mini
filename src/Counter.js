import React, { Component } from 'react';
import store, {INCREMENT, DECREMENT} from './store';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: store.getState()
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        store: store.getState()
      })
    })
  }
  increment(amt) {
    console.log('inc')
    store.dispatch({
      type: INCREMENT,
      payload: amt
    })
  }
  decrement(amt) {
    console.log('dec')
    store.dispatch({
      type: DECREMENT,
      payload: amt
    })
  }
  render() {
    console.log(this.state.store);

    let {currentValue} = this.state;

    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => this.increment(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => this.increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => this.decrement(1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => this.decrement(5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={true}
              onClick={() => null}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={true}
              onClick={() => null}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.state.store, null, 2)}</pre>
        </section>
      </div>
    );
  }
}

export default Counter;
