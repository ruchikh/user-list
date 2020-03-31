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
						<Card body inverse color="primary" className="userboard-card">
							<Button onClick={() => this.toggle(id)}>
								Name :- {real_name}
								<p>Country Name :- {tz}</p>
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

const mapStateToProps = (state) => {
	return {
		userData: state.userData,
	}
}

export default connect(mapStateToProps)(UserBoard);