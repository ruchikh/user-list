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
						<Card body inverse style={{ backgroundColor: '#00203fff' }} className="userboard-card">
							<Button onClick={() => this.toggle(id)} className="userboard-button">
								<h6>Name :- {real_name}</h6>
								<h6>Country Name :- {tz}</h6>
							</Button>
							<CardText>Click on the user Link to see the User Details</CardText>
						</Card>
						{isOpen && <ModalData toggle={this.toggle} isOpen={isOpen} />}
					</div>
				})
				}
			</div >
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userData: state.userData,
	}
}

export default connect(mapStateToProps)(UserBoard);