import React, { Component } from 'react';
import Contact from './Contact';


class Contacts extends Component {
	static defaultProps = {
        contacts: [],
		onRemove: () => console.warn('onRemove not defined'),
		onUpdate: () => console.warn('onUpdate not defined')
	};

	shouldComponentUpdate(nextProps, nextState)
	{
		return nextProps.contacts !== this.props.contacts;
	}

	render() {
		const { contacts, onRemove, onUpdate } = this.props;
		const list = contacts.map(
			contact => (
				<Contact 
					key={contact.id} 
					contact={contact} 
					onRemove={onRemove} 
					onUpdate={onUpdate}
				/>
			)
		);

		return (
            <div>
			<div>{list}</div>
            </div>
		);
	}
}

export default Contacts;