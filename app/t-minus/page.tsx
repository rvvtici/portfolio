'use client';

//todo: responsividade textarea celular, exemplos em exemplos.md, bg-auto ou bg-cover, rotacao background, selection: bg white txt black

import { useState } from 'react';
import { GeistSans } from "geist/font/sans";

const API_URL = 'https://t-minus-r53c.onrender.com/api/compilar';
const exemplos = {
  1: {
    nome: 'Inicial',
    codigo: `acesso_livre nave TESTE <<\n\tacesso_livre iniciar_missao <> <<\n\t\ttransmitir<"Missao iniciada">\n\t>>\n>>`,
  },
  2: {
    nome: 'Declaração de Variáveis pt.1',
    codigo: `acesso_livre nave TESTE <<
Unidade combustivel => 100
Precisao velocidade => 27.5
Sinal Estavel => ativo
Sinal Instavel => inativo
Mensagem planetaDestino => "Marte"
Estimativa gravidade => 9.8
Distancia Estelar => 9460730472580800
Pulso codMissao => "A"
Carga nivelRadiacao => 127           
Eco anguloOrbital => 360
transmitir <combustivel>
transmitir <velocidade>
transmitir <Estavel>
transmitir <Instavel>
transmitir <planetaDestino>
transmitir <gravidade>
transmitir <Estelar>
transmitir <codMissao>
transmitir <nivelRadiacao>
transmitir <anguloOrbital>
>>`,
  },
  3: {
    nome: 'Declaração de Variáveis pt.2',
    codigo: `acesso_livre nave TESTE
Precisao calculo => combustivel * velocidade
Unidade resto => combustivel % 3
Precisao media => <combustivel + velocidade> / 2
Unidade decremento => combustivel - 10

Sinal maisRapido => velocidade maior_que 20.0
Sinal maisLento => velocidade menor_que 20.0
Sinal igualOuMaior => combustivel maior_igual_que 100
Sinal igualOuMenor => combustivel menor_igual_que 100
Sinal igual => combustivel ==> 100
Sinal diferente => combustivel != 100
Sinal missaoOk => sistemaEstavel && combustivel maior_que 50
Sinal alertaGeral => !sistemaEstavel || combustivel menor_que 10
>>`,
  },
  4: {
    nome: 'Leitura',
    codigo: `acesso_livre nave HAILMARY <<          
        Unidade combustivel => capturar
>>`,
  },
  5: {
    nome: 'Expressão Aritmética',
    codigo: `acesso_livre nave HAILMARY <<          
 Unidade resultado => 2 + 3 * 4
    	 transmitir<resultado>
>>`,
  },
  6: {
    nome: 'Potência',
    codigo: `acesso_livre nave HAILMARY<<
        Unidade resultado => 2 ** 8
        transmitir<resultado>
>>`,
  },
  7: {
    nome: 'Condicional',
    codigo: `acesso_livre nave HAILMARY<<
            Unidade nivel => 30
            trajeto<nivel menor_que 20> <<
                 transmitir<"Critico">
           >>  recalcular trajeto<nivel menor_que 50> <<
            	transmitir<"Baixo">
            >> abortar <<
           		transmitir<"OK">
            >>
>>`,
  },
  8: {
    nome: 'Laço While',
    codigo: `acesso_livre nave HAILMARY<<
           orbita<Unidade i onde i menor_que 10> <<
          	    transmitir<i>
            >>
>>`,
  },
  9: {
    nome: 'Laço For (passo um)',
    codigo: `acesso_livre nave HAILMARY<<
         	percorrer<Unidade de i 0 ate 10 com passo 1> <<
                 transmitir<i>
            >>
>>`,
  },
  10: {
    nome: 'Laço For (passo maior do que um)',
    codigo: `acesso_livre nave HAILMARY<<
         	percorrer<Unidade de i 0 ate 10 com passo 2> <<
                 transmitir<i>
            >>
>>`,
  },
  11: {
    nome: 'Função',
    codigo: `
    acesso_livre nave HAILMARY <<
          Unidade dobrar<Unidade x><<
            	retornar x + x
          >>
>>
          `,
  },
  12: {
    nome: 'Chamada de Função',
    codigo: `
    acesso_livre nave HAILMARY <<
           Unidade dobrar<Unidade x> <<
            	retornar x + x
            >>
            Unidade resultado => dobrar<10>
            transmitir<resultado>
>>`

,
  },
};

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

  return (
    // src="/linkedin.png"
    //bg-[url(https://www.nasa.gov/wp-content/uploads/2026/07/55379860699-326a74df60-o.jpg)] 
    //bg-[url(/wallpaper-tminus.png)] 


    //bg-auto ou bg-cover
    <div className={`${GeistSans.className} 
    bg-[url(/wallpaper-tminus.png)] 
    
    bg-auto flex justify-center flex-col lg:h-screen lg:p-0 p-10 items-center`}>
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
              className="w-[420px] text-xs p-4 box-border border-1 bg-black/20 border-zinc-300 rounded-sm 
                focus:outline-none focus:border-white"
            />
            <button
              onClick={traduzir}
              disabled={carregando}
              className="text-sm border-1 lg:mb-0 mb-2 rounded-sm mt-1 bg-white text-black hover:bg-black hover:text-white hover:border-zinc-400 hover:cursor-pointer"
            >
              {carregando ? 'Compilando...' : 'Traduzir para Pascal'}
            </button>
          </div>
        </div>
                {/* className={`w-[420px] text-xs p-4 box-border border-1 rounded-sm focus:outline-none ${
                  erro ? 'bg-red-100 border-red-300' : 'bg-zinc-800 border-zinc-700'


                }`} */}



          {/* só renderiza a caixa de resultado quando existir algo pra mostrar */}
          {resultado && (
            <div id="pascal">
              <h3 className="text-xs flex justify-center items-center bg-white text-black">{erro ? 'Erro:' : 'Pascal gerado:'}</h3>
              <textarea
                readOnly
                value={resultado}
                rows={16}
                spellCheck={false}
                className="w-[420px] text-xs p-4 box-border border-1 bg-black/20 border-zinc-300 rounded-sm 
                focus:outline-none focus:border-white"
              />
            </div>
          )}
        </div>

        {/* <p>para conferir o resultado do pascal, basta acessar: https://onecompiler.com/pascal#draft-snrb</p> */}
        {/* <p className="text-sm"> rvvtici @ 2026</p> */}

      </div>
  );
}