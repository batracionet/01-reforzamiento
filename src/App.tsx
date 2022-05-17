// import { TiposBasicos } from "./typescript/TiposBasicos";

import { Contador } from "./components/Contador";

// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";


const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS - React</h1>
      <hr/>
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      <Contador />
    </div>
  )
}

export default App;
