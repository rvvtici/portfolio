'use client';

import SideNav from "./sidenav";
import Image from 'next/image';
import Project from "./projects";
import Education from "./education";
import Experience from "./experiences";
import { useState } from "react";

// function Carrossel(){
//   const [aba, setAba] = useState("projetos");

//   const conteudo = {
//     projetos: <p>teste1</p>,

//     habilidades: <p>teste2</p>,

//     interesses: <p>teste3</p>,
//   };

//   return (
//     <div>
//       <div className="flex gap-2 justify-center">
//         <button onClick={() => setAba("projetos")}>projetos</button>
//         <button onClick={() => setAba("habilidades")}>habilidades</button>
//         <button onClick={() => setAba("interesses")}><p className="underline">interesses</p></button>
//       </div>

//       <div className="transition delay-200" >{conteudo[aba]}</div>
//     </div>
//   );
// }


export default function Home() {
  return (
  

<div className="h-screen bg-cover bg-[url(/781330.png)] text-white">
 {/* bg-[url(/781330.png)] */}
{/* bg-[#121935] */}


{/* bg-zinc-900/80 */}
<main className="text-sm sm:mx-0 md:mx-44 lg:mx-70 xl:mx-90 lg:pt-10 selection:bg-cyan-700 ">
  
<div className="flex sm:flex-row flex-col pt-4 justify-center bg-zinc-400/30 itens-center">
  <div className="shrink-0 w-[200px] h-[200px]">
    <Image
      src="/icon1.png"
      loading="eager"
      width={200}
      height={200}
      className="pr-[10px] pb-2 w-full h-full"
      alt="icon site"
    />
  </div>

  <div className="flex mx-1 flex-col min-w-0">
    <h1 className="font-bold text-xl">ravi macedo ticianelli lima</h1>
    <p>estudante de ciência da computação @ <a target="_blank" href="https://fei.edu.br" className="text-cyan-500 font-semibold underline hover:pointer">fei</a></p>
    <p>desenvolvedor full-stack</p>
    <p>atualmente: estágiario -  desenvolvimento de automação de processos @ <a href="https://www.zeppelin-la.com/" className="text-cyan-500 font-semibold underline hover:pointer">zeppelin systems latin america</a></p>    
    
      
    <div id="links" className="flex flex-row pt-4 gap-2">
      <a target="_blank" href="https://github.com/rvvtici" className="text-cyan-500 font-semibold underline hover:pointer">
        <p>
          github
        </p>
      </a>
      //
      <a target="_blank" href="https://linkedin.com/in/rvvtici" className="text-cyan-500 font-semibold underline hover:pointer">
        <p>
          linkedin
        </p>
      </a>
      //
      <a target="_blank" href="/Currículo - Ravi Macedo Ticianelli Lima.pdf" className="text-cyan-500 font-semibold underline hover:pointer">
        <p>
          currículo 
        </p>
      </a>//
      <a target="_blank" href="mailto:rvvtici@gmail.com" className="text-cyan-500 font-semibold underline hover:pointer">
        <p>
          email
        </p>
      </a>
      </div>                  
    
    </div>


  </div>



  {/* <Carrossel /> */}

  <div className="flex flex-col bg-zinc-950/45 justify-end">

  <div className="flex mt-2 mx-0 p-2 flex-col">
    <h2 className="text-lg mt-2 font-bold">
        projetos
    </h2>

    <div className="flex flex-row">
      <p><span className="font-semibold">→ t-minus:</span> criação de linguagem de programação em java com compilador p/ pascal
      <a target="_blank" href="/t-minus" className="hover:pointer"> <span className="text-cyan-500 font-semibold underline hover:pointer">[demo]</span> </a>
      <a target="_blank" href="https://github.com/rvvtici/t-minus" className="text-cyan-500 font-semibold underline hover:pointer"> [github] </a>
      {/* <a> [sobre] </a> */}
        </p>
    </div>

    <div className="flex flex-row">
      <p><span className="font-semibold">→ glider:</span> sistema de gestão aeroportuária c/ arquitetura em múltiplos bancos de dados, 
       voltado para operações internas & monitoramento em tempo real <a target="_blank" href="https://github.com/rvvtici/sistema-gestao-aeroportuaria" className="text-cyan-500 font-semibold underline hover:pointer">[github]</a>
      </p>
    </div>

      <div className="flex flex-row">
      <p><span className="font-semibold">→ clínica médica:</span> full stack: sistema web & aplicativo p/ pacientes, médicos e atendentes
      {/* <a target="_blank" href="https://snack.expo.dev/@rvvtici/clinica-medica" className="hover:pointer"> <span className="text-cyan-500 font-semibold underline hover:pointer">[demo app]</span> </a> */} <a target="_blank" href="https://github.com/rvvtici/clinica-medica" className="text-cyan-500 font-semibold underline hover:pointer"> [github] </a>
      
        </p>
    </div>
  </div>
  
  <div className="mt-2 mx-0 p-2">

  <h2 className="text-lg font-bold">
      ferramentas & habilidades
  </h2>
  <p>
    <span className="font-semibold">linguagens:</span> python, java, c, c++, react, javascript, typescript
  </p>
  <p>

<span className="font-semibold">
  frontend:
</span> nextjs, talwind css, react
  </p>

  <p>
<span className="font-semibold">
  backend:
</span> django, springboot
  </p>
  <p>
<span className="font-semibold">
  database:
</span> postgresql, mongodb, cassandra, redis, firebase
  </p>
  <p>
<span className="font-semibold">
  servers:
</span> vercel, render
  </p>
  <p>
<span className="font-semibold">
  ferramentas:
</span> docker
  </p>


  </div>

<div className="bg-slate-950/40 mt-2 mx-0 p-2">

  <h2 className="text-lg font-bold">
      interesses
  </h2>
  <p>
    criação em geral, principalmente visdev & concept art. programação competitiva, jogos, fantasia e leitura.
  </p>
</div>

</div>
  
</main>
</div>


  );
}

