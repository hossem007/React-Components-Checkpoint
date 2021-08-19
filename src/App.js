import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Componenet/Profile/ProfilePhoto';
import FullName from './Componenet/Profile/FullName';
import Address from './Componenet/Profile/Address';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      
    </div>
  );
}

export default App;
