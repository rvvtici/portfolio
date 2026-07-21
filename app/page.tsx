'use client';

import SideNav from "./sidenav";
import Image from 'next/image';
import Project from "./projects";
import Education from "./education";
import Experience from "./experiences";
import { useState } from "react";

function Carrossel(){
  const [aba, setAba] = useState("projetos");

  const conteudo = {
    projetos: <p>teste1</p>,

    habilidades: <p>teste2</p>,

    interesses: <p>teste3</p>,
  };

  return (
    <div>
      <div className="flex gap-2 justify-center">
        <button onClick={() => setAba("projetos")}>projetos</button>
        <button onClick={() => setAba("habilidades")}>habilidades</button>
        <button onClick={() => setAba("interesses")}><p className="underline">interesses</p></button>
      </div>

      <div className="transition delay-200" >{conteudo[aba]}</div>
    </div>
  );
}


export default function Home() {
  return (
  

<div className="h-screen bg- bg-cover bg-[#121935] text-white">
 

<main className="text-sm mx-90 p-20">
  
  <div className="flex flex-row justify-center">
    <div className="">    
        <Image src="/icon2.jpeg" width={300} height={300} className="block p-[1px]" alt="logo github"/>
    </div>

<div className="flex mx-1 flex-col">
    <h1 className="font-bold text-xl">ravi macedo ticianelli lima</h1>
    <p>estudante de ciência da computação @ <a target="_blank" href="https://fei.edu.br" className="text-cyan-500 font-semibold underline hover:pointer">fei</a></p>
    <p>desenvolvedor full-stack</p>
    <p>atualmente: estágiario -  desenvolvimento de automação de processos @ <a href="https://www.zeppelin-la.com/" className="text-cyan-500 font-semibold underline hover:pointer">zeppelin systems latin america</a></p>    
    
      
    <div id="links" className="flex flex-row gap-2">
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

  <div>
    <h2 className="text-base font-bold">
        projetos
    </h2>

    <div className="flex flex-row">
      <p><span className="font-semibold">→ t-minus:</span> criação de linguagem de programação em Java com compilador p/ Pascal
      <a target="_blank" href="/t-minus" className="hover:pointer"> [demo] </a>
      <a target="_blank" href="https://github.com/rvvtici/t-minus" className="hover:pointer"> [github] </a>
      {/* <a> [sobre] </a> */}
        </p>
    </div>

        <div className="flex flex-row">
      <p><span className="font-semibold">→ glider:</span> 
         sistema de gestão aerportuárioa - arquitetura de banco de dados
      <a target="_blank" href="/t-minus" className="hover:pointer"> [demo] </a>
      <a target="_blank" href="https://github.com/rvvtici/t-minus" className="hover:pointer"> [github] </a>
      {/* <a> [sobre] </a> */}
        </p>
    </div>

        <div className="flex flex-row">
      <p><span className="font-semibold">→ clínica médica:</span> 
        full stack: web & app p/ pacientes, medicos e atendentes [github]
      <a target="_blank" href="/t-minus" className="hover:pointer"> [demo] </a>
      <a target="_blank" href="https://github.com/rvvtici/t-minus" className="hover:pointer"> [github] </a>
      {/* <a> [sobre] </a> */}
        </p>
    </div>

        <div className="flex flex-row">
      <p><span className="font-semibold">→ t-minus:</span> criação de linguagem de programação em Java com compilador p/ Pascal
      <a target="_blank" href="/t-minus" className="hover:pointer"> [demo] </a>
      <a target="_blank" href="https://github.com/rvvtici/t-minus" className="hover:pointer"> [github] </a>
      {/* <a> [sobre] </a> */}
        </p>
    </div>

  </div>
  

<h2 className="font-bold">
  ferramentas & habilidades:
</h2>
linguagens: python,  java, js, ts, c, c++ [maratona], 
frontend: nextjs, talwind css, react
backend: django, springboot
database: postgresql, mongodb, cassandra, redis, firebase
servers: vercel; render
ferramentas: docker

<h2 className="font-bold">
  interesses
</h2>
criação geral, principalmente visdev & concept art
programação competitiva
jogos
aplicações/ux únicas e marcantes
fantasia
leitura


</main>
</div>


  );
}

