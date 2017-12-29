import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SliderControl from '../components/SliderControl'

const mapStateToProps = (state, ownProps) => {
  let { match } = ownProps,
    { index } = match.params
  return {
    testPath: '/test/',
    hasBeenAnswered: state.answer[+index - 1] !== undefined,
    length:state.questions.length
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const SliderControlContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderControl))

export default SliderControlContainer