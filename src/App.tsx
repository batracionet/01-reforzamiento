// import { TiposBasicos } from "./typescript/TiposBasicos";
// import { Contador } from "./components/Contador";
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";

import { ContadorConHook } from "./components/ContadorConHook";




const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS - React</h1>
      <hr/>
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Contador /> */}
      <ContadorConHook />
    </div>
  )
}

export default App;
