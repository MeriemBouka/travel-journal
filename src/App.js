import './App.css';
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data"


function App() {
  const cards = data.map((item) =>{
    return (
      <Card 
      item = {item}
      />
    )
  })
  return (
    <div className="App">
      <Nav />
      <section>
        {cards}
      </section>
    </div>
  );
}

export default App;
