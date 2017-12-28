import React from 'react'
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom'
import './Welcome.css'
// import testImg from '../assets/images/avatar.png'
import { Button } from 'element-react'

// test id
// 59142002e30f813544c277fb
const Welcome = ({ match, history, testPath }) => (
  <div className="contain Grid v">
    <div className="welcome">
      <p>欢迎</p>
      {/* <p>背景图片</p>
      <div className="testImg"></div>
      <p>img标签</p>
      <img src={testImg} alt="test pack"/> */}
    </div>
    <Button className="start" type="primary" size='large' onClick={() => {
      history.push(`${testPath}${match.params.id}/1`)
    }}>开始</Button>
  </div >
)

Welcome.PropTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  testPath: PropTypes.string.isRequired
}
export default Welcome