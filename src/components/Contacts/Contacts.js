
export const Contacts = ({ dataValue: { contacts } }) => {
  console.log(contacts);
  return (
    <div>
      <ul>{contacts.map(contact =>
       
      <li key={contact.id}> {contact.name}: {contact.number}

      </li>
      
      )}</ul>
    </div>
  );
};
