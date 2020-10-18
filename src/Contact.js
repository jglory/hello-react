import React, { Component } from 'react';
import Values from './Values/Package';


class Contact extends Component
{
	static defaultProps = {
        contact: new Values.Contact(0, '이름', '010-0000-0000')
    };
    
    handleRemove (e) {
        this.props.onRemove(this.props.contact.id);
	}
	
	handleUpdate (e) {
		this.props.onUpdate(this.props.contact.id, this.props.contact);
	}

	render() {
		console.log('Contact.render : '+this.props.contact.id);
		const style = {
			border: "1px solid black",
			padding: "8px",
			margin: "8px"
		};

		const { name, phone, id } = this.props.contact;

		return (
			<div style={style}>
				<div><b>{name}</b></div>
				<div>{phone}</div>
                <button onClick={this.handleRemove.bind(this)}>삭제</button>
			</div>
		);
	}
}

export default Contact;