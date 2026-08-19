'use client';

//todo: responsividade textarea celular, OK exemplos em exemplos.ts, OK bg-auto ou bg-cover, rotacao background, OK selection

import { useState } from 'react';
import { GeistSans } from "geist/font/sans";
import { exemplos } from "./exemplos-codigo";
import Image from 'next/image';

const API_URL = 'https://t-minus-r53c.onrender.com/api/compilar';

export default function Compilador() {
  const [codigo, setCodigo] = useState('');
  const [resultado, setResultado] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);
  const [tituloTminus, setTituloTminus] = useState("T-Minus");
  const [exemploSelecionado, setExemploSelecionado] = useState<string | null>(null);

  // recebe o codigo de exemplo como parametro e usa setCodigo pra colocar no textarea
  function carregarExemplo(numero: string, exemplo: { nome: string; codigo: string }) {
    setCodigo(exemplo.codigo);
    setResultado('');
    setErro(false);
    setTituloTminus(`T-Minus - ${exemplo.nome}`);
    setExemploSelecionado(numero);
  }

  async function traduzir() { // async -> funcao pode demorar. sem async n pode usar await embaixo
    if (!codigo.trim()) return;

    setCarregando(true);
    setErro(false);
    setResultado('');

    try { // fetch (javascript) serve para fazer requisicoes http. 
      // quando chama o fetch, o render responde-o c a chamada especfiica
      const res = await fetch(API_URL, { // espera o fetchh acontecer pra dps ir pras proimas linhas
        method: 'POST', //post envia uma informacao e espera uma resposta. GET apenas pede uma resposta.
        //qnd se acessa a API_URL ele nao mostra nd pq so aceita post. GET é acessar o site. 
        //POST é acessar, oferecer um dado e esperar outro de volta
        headers: { 'Content-Type': 'text/plain' },
        body: codigo,
      });

      const texto = await res.text();

      if (!res.ok) { //ok -> boolean respondendo se a resposta foi completada com sucesso
        setErro(true);
      }

      setResultado(texto);
    } catch (e) { //catch para caso n seja possiel fazer fetch
      setErro(true);
      setResultado('Erro ao conectar com o compilador. O servidor está rodando?');
    }

    setCarregando(false); // ao completar, para de carregar
  }

  // src="/linkedin.png"
  //bg-[url(https://www.nasa.gov/wp-content/uploads/2026/07/55379860699-326a74df60-o.jpg)] 
  //bg-[url(/wallpaper-tminus.png)] 
  
  
  //bg-auto ou bg-cover
  return (
    <>
    <div className={`${GeistSans.className} relative
         flex justify-center flex-col h-full lg:h-screen lg:p-0 p-10 items-center
        selection:bg-white selection:text-black
        `}>
      <Image
        src="/wallpaper-tminus.png"
        alt=""
        fill
        priority
        className="object-cover -z-10"
      />

      {/* <div className={`${GeistSans.className} 
        bg-[url(/wallpaper-tminus.png)] 
        bg-auto flex justify-center flex-col h-full lg:h-screen lg:p-0 p-10 items-center
        selection:bg-white selection:text-black
        `}> */}








          
        <h1 className="font-bold text-6xl mb-">T-Minus</h1>
      <p className="font-base text-xs lg:mx-70 mb-1 text-white text-center">
        linguagem de programação desenvolvida em Java com compilador traduzindo para Pascal.
      </p>
      
      <div id="tminus-pascal" className="flex flex-col gap-2 lg:flex-row mt-2">
        
        <div id="tminus" className="flex lg:flex-row flex-col gap-[5.5]">
          {/* arrow function -> () é o parametro. a funcao carregarExemplo eh chamada dps de clicar*/}
        <div id="tminus-botoes" className="flex lg:flex-col flex-row items-center justify-center lg:justify-normal text-xs gap-1">
          {Object.entries(exemplos).map(([numero, exemplo]) => (
            <button
              key={numero}
              onClick={() => carregarExemplo(numero, exemplo)}
              title={`T-Minus - ${exemplo.nome}`}
              className={`font-semibold border-1 px-[4px] rounded-sm hover:cursor-pointer
                ${exemploSelecionado === numero 
                  ? 'bg-white text-black border-white' 
                  : 'text-zinc-300 bg-black/20 hover:bg-white/40'
                }`}
            >
              {numero}
            </button>
          ))}
        </div>

          <div id="tminus-txtarea-botaotraduzir" className="flex flex-col">

            <h3 className="text-xs flex justify-center items-center bg-white text-black">{tituloTminus}</h3>
            <textarea
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              rows={16}
              spellCheck={false}
              className="w-[300px] sm:w-[420px] text-xs p-4 box-border border-1 bg-black/20 border-zinc-400
                focus:outline-none focus:border-white focus:bg-black/40"
            />
            <button
              onClick={traduzir}
              disabled={carregando}
              className="text-xs border-1 lg:mb-0 mb-2 rounded-xs mt-1 bg-black/30 text-zinc-300
               hover:bg-black hover:cursor-pointer hover:bg-white hover:text-black hover:border-white"
            >
              
              {carregando ? 'conectando ao servidor! aguarde cerca de 40s...' : 'Traduzir para Pascal'}
            </button>
          </div>
        </div>
                {/* className={`w-[420px] text-xs p-4 box-border border-1 rounded-sm focus:outline-none ${
                  erro ? 'bg-red-100 border-red-300' : 'bg-zinc-800 border-zinc-700'


                }`} */}



          {/* só renderiza a caixa de resultado quando existir algo pra mostrar */}
          {/* {resultado && ( */}
            <div id="pascal">
              <h3 className="text-xs flex justify-center items-center bg-white text-black">{erro ? 'Erro' : 'Pascal'}</h3>
              <textarea
                readOnly
                value={resultado}
                rows={16}
                spellCheck={false}
                className="w-[300px] sm:w-[420px] text-xs p-4 box-border border-1 bg-black/20 border-zinc-400
                focus:outline-none focus:border-white focus:bg-black/40
                "
              />
            </div>
          {/* )} */}
        </div>

        {/* <p>para conferir o resultado do pascal, basta acessar: https://onecompiler.com/pascal#draft-snrb</p> */}
        {/* <p className="text-sm"> rvvtici @ 2026</p> */}

      </div>
      </>
  );
}