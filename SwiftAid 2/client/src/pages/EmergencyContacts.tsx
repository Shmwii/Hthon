import { saveToFile, loadFromFile } from '@/utils/fileStorage';
import { useState } from 'react';

export function EmergencyContacts() {
  const [contacts, setContacts] = useState([]);

  const addContact = () => {
    setContacts([...contacts, { name: '', phone: '', relationship: '' }]);
  };

  return (
    <div>
      <h2>Emergency Contacts</h2>
      {contacts.map((contact, index) => (
        <div key={index}>
          <input type="text" placeholder="Name" value={contact.name} onChange={(e) => {
            const newContacts = [...contacts];
            newContacts[index].name = e.target.value;
            setContacts(newContacts);
          }} />
          <input type="text" placeholder="Phone" value={contact.phone} onChange={(e) => {
            const newContacts = [...contacts];
            newContacts[index].phone = e.target.value;
            setContacts(newContacts);
          }} />
          <input type="text" placeholder="Relationship" value={contact.relationship} onChange={(e) => {
            const newContacts = [...contacts];
            newContacts[index].relationship = e.target.value;
            setContacts(newContacts);
          }} />
        </div>
      ))}
      <button onClick={addContact}>Add Contact</button>
      <button onClick={() => saveToFile('emergencyContacts.txt', contacts)}>Save Contacts</button>
      <input type="file" accept=".txt" onChange={(e) => loadFromFile(e, setContacts)} />
    </div>
  );
}