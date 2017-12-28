import React, { Component } from 'react';
import './Slider.css'
import SliderControlContainer from '../containers/SliderControlContainer'
import { Carousel, Radio } from 'element-react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cIndex: 0,
    }
  }

  render() {
    let { test, answer } = this.props
    return (
      <div className="slider-wrap">
        <div className="slider">
          <Carousel ref='carousel' autoplay={false} arrow="never" indicatorPosition='none'>
            {/* <Carousel afterChange={onChange} dots={false}> */}
            {/* <ul className="slide-contain question-list"> */}
            {test.map((q, index) => (
              <Carousel.Item
                key={index}
              >
                <div className="question">{index + 1}. {q.question}</div>
                <ul className="option-list">
                  {q.options.map((opt, oIndex) => (
                    <li
                      key={oIndex}
                    >
                      <Radio value={oIndex} checked={answer[index] === oIndex} onChange={
                        this.onChange.bind(this)
                      }>{opt}</Radio>
                    </li>
                  ))}
                </ul>
              </Carousel.Item>
            ))}
            {/* </ul> */}
          </Carousel>
        </div>
        <SliderControlContainer />
      </div>
    )
  }

  componentWillMount() {
    let { getTest, match } = this.props,
      { id } = match.params
    getTest(id)
  }

  componentWillReceiveProps(nextProps) {
    // will be true
    // const locationChanged = nextProps.location !== this.props.location

    // INCORRECT, will *always* be false because history is mutable.
    // const locationChanged = nextProps.history.location !== this.props.history.location
    let { match } = nextProps,
      { index } = match.params
    this.setState({
      cIndex: +index - 1
    })
  }

  // Invoked immediately after the component's updates are flushed to the DOM
  componentDidUpdate() {
    this.refs.carousel.setActiveItem(+this.state.cIndex)
  }

  onChange(value) {
    const { chooseAnswer } = this.props
    chooseAnswer(this.state.cIndex, value)
  }

  next() {
    this.refs.carousel.next()
  }

  prev() {
    this.refs.carousel.prev()
  }

  setActiveItem(index) {
    this.refs.carousel.setActiveItem(index)
  }

}

export default Slider;
