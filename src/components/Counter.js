import React, { Component } from "react"
import "./Counter.css"

class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// 记录秒数
			seconds: 0,
		}
	}
	render() {
		let time = this.getTimeFromSeconds(this.state.seconds)
		return (
			<span className="timer">{time}</span>
		)
	}
	componentDidMount() {
		this.count(() => {
			this.setState({
				seconds: this.state.seconds + 1
			})
		})
	}
	count(cb) {
		setTimeout(() => {
			cb()
			this.count(cb)
		}, 1000)
	}
	/**
   * 时间秒数格式化
   * @param s 时间戳（单位：秒）
   * @returns {*} 格式化后的时分秒
   * 如果h<1，省略小时数
   */
	getTimeFromSeconds(s) {
		let t = ""
		let hour = Math.floor(s / 3600)
		let min = Math.floor(s / 60) % 60
		let sec = s % 60
		// 小于1小时省略
		if (hour > 0) {
			if (hour < 10) {
				t = "0" + hour + ":"
			} else {
				t = hour + ":"
			}
		}

		if (min < 10) { t += "0" }
		t += min + ":"
		if (sec < 10) { t += "0" }
		t += sec

		return t
	}


}

export default Counter
