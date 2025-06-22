import './App.css'
import { getDatabase , ref , set } from "firebase/database";
import { app } from './firebase';
import Card from './components/Card';
function App() {
    const database = getDatabase(app);
    const putData=()=>{
        set(ref(database,'users/wasim/'),{
        name:"Sritama",
        role : "Developer Wife of Wasim "
    });
    alert('Data Added !');
    }
    


  return (
    <>
     <h2>Hello World</h2>
     <button onClick={putData}>Put data</button>
     <Card/>

    </>
  )
}

export default App
