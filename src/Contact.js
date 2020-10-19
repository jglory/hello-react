import React from 'react';
import Values from './Values/Package';


class Contact extends React.Component
{
	static defaultProps = {
        contact: new Values.Contact(0, '이름', '010-0000-0000')
	};

	state = {
		editing: false,
		contact: new Values.Contact(this.props.contact.id, this.props.contact.name, this.props.contact.phone)
	}
    
	handleRemove = function (e) {
        this.props.onRemove(this.props.contact.id);
	}

	handleToggleEdit = function () {
		this.setState({ editing: !this.state.editing });
	}

	handleChange = function (e) {
		//let contact = new Values.Contact(this.state.contact.id, this.state.contact.name, this.state.contact.phone);
		let contact = this.state.contact.clone();
		contact[e.target.name] = e.target.value;
		this.setState({ contact: contact });
	}

	componentDidUpdate = function (prevProps, prevState) {
		const { contact, onUpdate } = this.props;
		if (prevState.editing===false && this.state.editing) {
			this.setState({contact: contact});
		}

		if (prevState.editing && this.state.editing===false) {
			onUpdate(contact.id, this.state.contact);
		}
	}

	render = function () {
		const style = {
			border: "1px solid black",
			padding: "8px",
			margin: "8px"
		};
		
		if (this.state.editing) {
			const {name, phone} = this.state.contact;
			return (
				<div style={style}>
					<div>
						<input
							value={name}
							name="name"
							placeholder="이름"
							onChange={this.handleChange.bind(this)}
						/>
					</div>
					<div>
						<input
							value={phone}
							name="phone"
							placeholder="전화번호"
							onChange={this.handleChange.bind(this)}
						/>
					</div>
					<button onClick={this.handleToggleEdit.bind(this)}>적용</button>
					<button onClick={this.handleRemove.bind(this)}>삭제</button>
				</div>
			);
		} else {
			const {name, phone} = this.props.contact;
			return (
				<div style={style}>
					<div><b>{name}</b></div>
					<div>{phone}</div>
					<button onClick={this.handleToggleEdit.bind(this)}>적용</button>
					<button onClick={this.handleRemove.bind(this)}>삭제</button>
				</div>
			);
		}
	}
}

export default Contact;