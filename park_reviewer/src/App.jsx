import './App.css';
import Heading from './heading';
import NavBar from './navbar';
import Map from './map';
import Footer from './footer';
import SearchBar from './searchbar';
import ActivityList from './activityList';

//https://coolors.co/palette/2c6e49-4c956c-fefee3-ffc9b9-d68c45

function App() {
  return (
    <body>
    <NavBar />
    <Heading />
    <SearchBar />
    <Map />
    <div className='listWrapper'>
     <ActivityList location="The UK" />
     <ActivityList location="Bromsgrove" />
    </div>
    <Footer />
    </body>
  );
}

export default App;
