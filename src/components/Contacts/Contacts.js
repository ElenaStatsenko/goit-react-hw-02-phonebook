export const Contacts = ({ dataValue }) => {
 
  return (
    <div>
      <ul>{dataValue.map(contact =>
      <li key={contact.id}> {contact.name}: {contact.number}
      </li>
      )}</ul>
    </div>
  );
};
