import React from "react";
import './App.css';
import ProfilePhoto from "./component/profile/ProfilPhoto";
import FullName from "./component/profile/FullName";
import Address from "./component/profile/Address"

const App = () => (
 <div className='app'>
   <ProfilePhoto />
   <FullName />
   <Address />
 </div>
);
export default App;
