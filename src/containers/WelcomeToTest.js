import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Welcome from '../components/Welcome'

const mapStateToProps = (state, ownProps) => ({
  testPath:'/test/'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  
})

const WelcomeToTest = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome))

export default WelcomeToTest