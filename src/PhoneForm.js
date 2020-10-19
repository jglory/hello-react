import React, {Component} from 'react';
import Values from './Values/Package';

class PhoneForm extends Component
{
    state = { contact: new Values.Contact(0, '', '') };

    handleChange = function (e)
    {
        let o = this.state.contact.clone();
        o[e.target.name] = e.target.value;
        this.setState({
            contact: o
        });
    };

    handleSubmit = function (e) {
        e.preventDefault();
        this.props.onCreate(this.state.contact);
        this.setState({
            contact: new Values.Contact(0, '', '')
        });
    };

    render = function () {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input 
                    placeholder="이름"
                    value={this.state.contact.name}
                    onChange={this.handleChange.bind(this)}
                    name="name"
                />
                <input 
                    placeholder="전화번호"
                    value={this.state.contact.phone}
                    onChange={this.handleChange.bind(this)}
                    name="phone"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;