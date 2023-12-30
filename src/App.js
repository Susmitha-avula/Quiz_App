import Navigation from './Quiz/Navigation';
import { createContext, useState } from 'react';
export var NameContext=createContext()
function App() {
  var [Name,setName]=useState("User")
  var [AnsQues,setAnsQues]=useState(0)
  var [UnAnsQues,setUnAnsQues]=useState(0)
  var [CorQues,setCorQues]=useState(0)
  return (
    <NameContext.Provider value={{Name,setName,AnsQues,setAnsQues,UnAnsQues,setUnAnsQues,CorQues,setCorQues}}>
      <Navigation/>
    </NameContext.Provider>
  );
}

export default App;
