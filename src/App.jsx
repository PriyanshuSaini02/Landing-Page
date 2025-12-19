import { useState } from 'react'
import Section from './Components/Section'
import Header from './Components/Header'
import './App.css'
import Container1 from './Components/Container1'
import Container2 from './Components/Container2'
import Container3 from "./Components/Container3";
import Container4 from "./Components/Container4";
import Container5 from "./Components/Container5";
import Container6 from "./Components/Container6";
import Container7 from "./Components/Container7";
import Container8 from "./Components/Container8";
import Container9 from "./Components/Container9";
import Container10 from "./Components/Container10";
import Container11 from "./Components/Container11";
import Container12 from "./Components/Container12";
import Container13 from "./Components/Container13";
import Footer from './Components/Footer'
import Whatsapp from './Components/Whatsapp';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className='w-screen'>
//         <Header></Header>
//         <Container1></Container1>
//         <Container2></Container2>
//       </div>
//     </>
//   )
// }

// export default App

function App() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Whatsapp />
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />
        <Container8 />
        <Container9 />
        <Container10 />
        <Container11 />
        <Container12 />
        <Container13 />
        <Footer />
      </main>
    </>
  );
}

export default App;
