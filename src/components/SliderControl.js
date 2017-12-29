import React, { Component } from 'react';
import './SliderControl.css'
import { Button } from 'element-react'

import 'element-theme-default'

class SliderControl extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    let { hasBeenAnswered, match, length } = this.props,
      { index } = match.params
    return (
      <div className="slider-control">
        {+index > 1 ? (
          <Button className="prev" type="success" size='large' onClick={
            this.prev.bind(this)
          }>上一题</Button>
        ) : ("")}
        {+index < +length ? (
          <Button className="next" type="success" size='large' onClick={
            this.next.bind(this)
          } disabled={!hasBeenAnswered}>下一题</Button>
        ) : ("")}
        {+index === +length ? (
          <Button className="next" type="success" size='large' onClick={
            this.end.bind(this)
          } disabled={!hasBeenAnswered}>结束</Button>
        ) : ("")}

      </div>
    )
  }

  next() {
    let { match } = this.props,
      index = match.params.index
    this.goto(+index + 1)
  }

  prev() {
    let { match } = this.props,
      index = match.params.index
    this.goto(+index - 1)
  }

  end() {
    console.log('end')
  }

  goto(index) {
    let { match, history, testPath } = this.props
    history.push(`${testPath}${match.params.id}/${index}`)
  }
}

export default SliderControl;
