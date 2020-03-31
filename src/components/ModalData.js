import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

class ModalData extends Component {
    render() {
        const { isOpen, toggle, modalData } = this.props;

        return (
            <div>
                <Modal isOpen={isOpen}>
                    <ModalHeader toggle={toggle}>User Activity Periods</ModalHeader>
                    <ModalBody>
                        {modalData && modalData.activity_periods.map((data, i) => {
                            const { start_time, end_time } = data;

                            return <div key={i}>
                                <p>Start_time :- {start_time}</p>
                                <p>End_time :-- {end_time}</p>
                            </div>
                        })}
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modalData: state.modalData
    }
}

export default connect(mapStateToProps)(ModalData);