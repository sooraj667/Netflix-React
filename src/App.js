import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from "./components/Banner/Banner";
import RowPosts from "./components/RowPosts/RowPosts";
import { originals,actions } from "../src/urls"



function App() {
  
  return (
    <div className="parent">

    <NavBar/>

    <Banner/>

    <RowPosts url={originals} title="Originals" isSmall={false}/>

    <RowPosts url={actions} title="Actions" isSmall={true}/>

    
    
    
    
    
    
    </div>

  );
}

export default App;
