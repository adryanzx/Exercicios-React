import Titulo from "./components/Titulo";
import Contador from "./components/Contador";
import FormularioSoma from "./components/FormularioSoma";
import FormularioSub from "./components/FormularioSub";
import FormularioMult from "./components/FormularioMult";
import FormularioDiv from "./components/FormularioDivo";
import FormularioMedia from "./components/FormularioMedia";
import FormularioCelsius from "./components/FormularioCelsius";
import FormularioFarenheit from "./components/FormularioFarenheit";
import CircleAreaCalculator from "./components/CircleAreaCalculator";
import RetanguloCalculo from "./components/RentanguloCalculo";
import PerimetroCalculo from "./components/PerimetroCalculo";

function App() {
  return(
    <div>
    <Titulo nome="adryan" sobrenome="ele mesmo"/>
    <Titulo nome="professora vanessa" sobrenome="joguinho"/>
    <Contador/>
    <FormularioSoma/>
    <FormularioSub/>
    <FormularioMult/>
    <FormularioDiv/>
    <FormularioMedia/>
    <FormularioCelsius/>
    <FormularioFarenheit/>
    <CircleAreaCalculator/>
    <RetanguloCalculo/>
    <PerimetroCalculo/>
    </div>
    );
  }

export default App;