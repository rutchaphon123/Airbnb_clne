      
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
function App() {
  const item = data.map(item => <Card id={item.id} img={item.coverImg} Name={item.title} review={item.stats.reviewCount} country={item.location} />)
  return (
    <div className="App">
    <Navbar/>
    <Hero head="Online Experiences" para="Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home."/>
    <section className='card--container'>{item}</section>
    
    </div>
  );
}

export default App;
