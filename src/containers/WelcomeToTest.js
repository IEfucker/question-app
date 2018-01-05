import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import Welcome from "../components/Welcome"

const mapStateToProps = () => ({
	testPath:"/test/"
})

const mapDispatchToProps = () => ({

})

const WelcomeToTest = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Welcome))

export default WelcomeToTest
