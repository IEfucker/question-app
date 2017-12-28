import React, { Component } from 'react';
import './SliderControl.css'
import { Button } from 'element-react'

import 'element-theme-default'

class SliderControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true,
    }
  }

  render() {
    let { hasBeenAnswered } = this.props
    return (
      <div className="slider-control">
        <Button className="next" type="success" size='large' onClick={
          this.next.bind(this)
        } disabled={!hasBeenAnswered}>下一题</Button>
      </div>
    )
  }

  // componentWillReceiveProps(nextProps) {

  //   let { match } = this.props,
  //     { index } = match.params
  //   let { answer} = nextProps,
  //     { newIndex } = nextProps.match.params
  //   console.log(index,newIndex)
  //   if(newIndex){
  //     index = index === newIndex ? index : newIndex
  //   }

  //   console.log(answer[+index - 1], index)
  //   this.setState({
  //     isDisabled: answer[+index - 1] === undefined
  //   })
  // }

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

  goto(index) {
    let { match, history, testPath } = this.props
    history.push(`${testPath}${match.params.id}/${index}`)
  }
}

export default SliderControl;
