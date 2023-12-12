import React, { Component } from 'react';
import { Phonebookform } from './Phonebooks/Phonebookform';
import { Contacts } from './Contacts/Contacts';
import { SearchFilter } from './SearchFilter/SearchFilter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  addContacts = value => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, value] };
    });
  };
changeTopicFilter=(newTopic)=>{
  this.setState({
    filter: newTopic
  })
}
  render() {
   const{contacts, filter, name, number} = this.state
    const filterContacts=contacts.filter(contact=> contact.name.toLowerCase().includes(filter.toLowerCase))
    return (
      <div>
        <Phonebookform value={this.state} addContacts={this.addContacts} />
        <Contacts dataValue={this.state} />
        <SearchFilter topicFilter={this.state.filter} onChangeTopic={this.changeTopicFilter}/>
      </div>
    );
  }
}
