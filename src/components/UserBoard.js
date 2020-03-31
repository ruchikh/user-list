import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardText } from 'reactstrap';

import { fetchData, modalData } from '../actions/actionCreator';
import ModalData from './ModalData';

class UserBoard extends Component {

	state = {
		isOpen: false,
	}

	componentDidMount() {
		this.props.dispatch(fetchData());
	}

	toggle = (id) => {
		console.log('insidetoggle')
		this.setState({
			isOpen: !this.state.isOpen,
		})

		this.props.dispatch(modalData(id))
	}

	render() {
		const { userData } = this.props,
			{ isOpen } = this.state;

		return (
			<div className="userboard">
				<h3 className="userboard-header">User List</h3>
				{userData && userData.map((item, i) => {
					const { id, real_name, tz } = item;

					return <div key={i}>
						<Card body inverse color="primary" className="userboard-card">
							<Button onClick={() => this.toggle(id)}>
								Name :- {real_name}
								<p>Country_Name :- {tz}</p>
							</Button>
							<CardText>Click on the user Link to see the user Details</CardText>
						</Card>
						{isOpen && <ModalData toggle={this.toggle} isOpen={isOpen} />}
					</div>
				})}
			</div >
		);
	}
}

// const UserDeatails = (props) => {
// 	const { isOpen, toggle, item } = props;
// 	console.log(props, 'props')

// 	return (
// 		<div>
// 			<Modal isOpen={isOpen}>
// 				<ModalHeader toggle={toggle}>User Time Range</ModalHeader				<ModalBody>
// 					{item && item.activity_periods.map((data, i) => {
// 						console.log(data, 'data')
// 						return <div>
// 							<p>start_time{data.start_time}</p>
// 							<p>End_time_time{data.end_time}</p>
// 						</div>
// 					})}
// 				</ModalBody>
// 			</Modal>
// 		</div>
// 	)
// }

const mapStateToProps = (state) => {
	return {
		userData: state.userData,
	}
}

export default connect(mapStateToProps)(UserBoard);