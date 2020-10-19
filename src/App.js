import React, { Component } from 'react';
import Values from './Values/Package';
import PhoneForm from './PhoneForm';
import Contacts from './Contacts';


class App extends Component {
	id = 2;
	state = {
		contacts: [
			new Values.Contact(0, '김민준', '010-1000-0000'),
			new Values.Contact(1, '홍길동', '010-2000-0000')
        ],
        keyword: ''
    }
    
    handleChange = function (e)
    {
        this.setState({
            keyword: e.target.value
        })
    };

    handleCreate = function (data)
    {
		const { contacts } = this.state;
		this.setState({
			contacts: contacts.concat(new Values.Contact(this.id++, data.name, data.phone))
		});
    };
    
    handleRemove = function (id)
    {
        const { contacts } = this.state;
        this.setState({
            contacts: contacts.filter(function (val) {
                return val.id !== id;
            })
        });
    };

    handleUpdate = function (id, data)
    {
        this.setState({
            contacts: this.state.contacts.map(contact => id === contact.id ? {...contact, ...data} : contact)
        });
    };

	render = function () {
        const { contacts, keyword } = this.state;
        const filtered = contacts.filter(function (contact) {
            return contact.name.indexOf(keyword)!==-1;
        });
        return (
            <div className="App">
                Contacts
                <PhoneForm onCreate={this.handleCreate.bind(this)} /> 
                <p>
                <input 
                    placeholder="검색할 이름을 입력하세요." 
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.keyword}/>
                </p>
                
                <Contacts 
                    contacts={filtered} 
                    onRemove={this.handleRemove.bind(this)} 
                    onUpdate={this.handleUpdate.bind(this)}
                />
            </div>
        );
	}.bind(this);
}

export default App;
