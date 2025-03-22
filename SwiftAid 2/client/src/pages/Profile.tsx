import { saveToFile, loadFromFile } from '@/utils/fileStorage';
import { useState } from 'react';

export default function Profile() {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  return (
    <div>
      <h2>Profile</h2>
      <input type="text" placeholder="First Name" value={profileData.firstName} onChange={(e) => setProfileData({...profileData, firstName: e.target.value})} />
      <input type="text" placeholder="Last Name" value={profileData.lastName} onChange={(e) => setProfileData({...profileData, lastName: e.target.value})} />
      <input type="text" placeholder="Phone" value={profileData.phone} onChange={(e) => setProfileData({...profileData, phone: e.target.value})} />
      <input type="email" placeholder="Email" value={profileData.email} onChange={(e) => setProfileData({...profileData, email: e.target.value})} />
      <button onClick={() => saveToFile('profileData.txt', profileData)}>Save Profile</button>
      <input type="file" accept=".txt" onChange={(e) => loadFromFile(e, setProfileData)} />
    </div>
  );
}