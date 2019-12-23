import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) { // 初期化処理で実行されるメソッド
    super(props)
    console.log(this.state)
    this.state = { count: 0 } // 初期化時の処理としてオブジェクトが作成される
  }
  handlePlusButton = () => {
    // this.state = { count: this.state.count } // 直接stateをいじったらアカン！って怒られるよ
    this.setState({ count: this.state.count + 1 }) // 状態を変えるときはsetStateを絶対使おう！！
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count -1 })
  }
  render(){
    console.log(this.state)
    return (
      <React.Fragment>
        <div>
          count: {this.state.count}
        </div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
