'use client';

import { useState } from 'react';
import { GeistSans } from "geist/font/sans";

const API_URL = 'https://t-minus-r53c.onrender.com/api/compilar';

const exemplos = {
  1: `acesso_livre nave TESTE <<\n\tacesso_livre iniciar_missao <> <<\n\t\ttransmitir<"Missão iniciada">\n\t>>\n>>`,
  2: `acesso_livre nave TESTE<<
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
>>`,
  3: `acesso_livre nave TESTE<<
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
  4: `acesso_livre nave HAILMARY <<          
        Unidade combustivel => capturar
>>`,
  5: `acesso_livre nave HAILMARY <<          
 Unidade resultado => 2 + 3 * 4
    	 transmitir<resultado>
>>`,
  6: `acesso_livre nave HAILMARY <<
        Unidade resultado => 2 ** 8
        transmitir<resultado>
>>`,
  7: `acesso_livre nave HAILMARY <<
            Unidade nivel => 30
            trajeto<nivel menor_que 20> <<
                 transmitir<"Critico">
           >>  recalcular trajeto<nivel menor_que 50> <<
            	transmitir<"Baixo">
            >> abortar <<
           		transmitir<"OK">
            >>
>>`,
  8: `acesso_livre nave HAILMARY <<
           orbita<Unidade i onde i menor_que 10> <<
          	    transmitir<i>
            >>
>>`,
  9: `acesso_livre nave HAILMARY <<
         	percorrer<Unidade de i 0 ate 10 com passo 1> <<
                 transmitir<i>
            >>
>>`,
  10: `acesso_livre nave HAILMARY <<
         	percorrer<Unidade de i 0 ate 10 com passo 2> <<
                 transmitir<i>
            >>
>>`,
  11: `acesso_livre nave HAILMARY <<
          Unidade dobrar<Unidade x> <<
            	retornar x + x
          >>
>>`,
  12: `acesso_livre nave HAILMARY <<
           Unidade dobrar<Unidade x> <<
            	retornar x + x
            >>
            Unidade resultado => dobrar<10>
            transmitir<resultado>
>>`,
};

export default function Compilador() {
  const [codigo, setCodigo] = useState('');
  const [resultado, setResultado] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);

  // recebe o codigo de exemplo como parametro e usa setCodigo pra colocar no textarea
  function carregarExemplo(codigoExemplo: string) {
    setCodigo(codigoExemplo);
    setResultado(''); // limpa resultado anterior ao trocar de exemplo
    setErro(false);
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
    <div className={`${GeistSans.className} flex justify-center flex-col items-center m-2`}>
      <h1 className="font-bold text-6xl">T-Minus</h1>
      <p className="font-base text-xs mx-70 text-zinc-300 text-center">
        desenvolvido em Java e capaz de traduzir código para a linguagem Pascal.
      </p>

      <div id="tminus-pascal" className="mt-2">
        <div className="flex flex-row gap-4">
          {/* arrow function -> () é o parametro. a funcao carregarExemplo eh chamada dps de clicar*/}
          <div id="exemplos" className="flex flex-col text-xs gap-1">
            {Object.entries(exemplos).map(([numero, codigoExemplo]) => (
              <button
                key={numero}
                onClick={() => carregarExemplo(codigoExemplo)}
                className="border-zinc-700 border-1 px-[4px] rounded-sm hover:bg-zinc-800 hover:border-zinc-400 hover:cursor-pointer"
              >
                {numero}
              </button>
            ))}
          </div>

          <div id="txtarea-botaotraduzir" className="flex flex-col">
            <textarea
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              rows={16}
              placeholder="t-minus"
              spellCheck={false}
              className="w-[420px] text-xs p-4 box-border border-1 border-zinc-700 rounded-sm focus:outline-none focus:border-zinc-400"
            />

            <button
              onClick={traduzir}
              disabled={carregando}
              className="text-base disabled:cursor-not-allowed mt-2 hover:bg-zinc-800 hover:border-zinc-400 hover:cursor-pointer"
            >
              {carregando ? 'Compilando...' : 'Traduzir para Pascal'}
            </button>
          </div>

          {/* só renderiza a caixa de resultado quando existir algo pra mostrar */}
          {resultado && (
            <div className="flex flex-col">
              <h3 className="text-xs mb-1">{erro ? 'Erro:' : 'Pascal gerado:'}</h3>
              <textarea
                readOnly
                value={resultado}
                rows={16}
                spellCheck={false}
                className={`w-[420px] text-xs p-4 box-border border-1 rounded-sm focus:outline-none ${
                  erro ? 'bg-red-100 border-red-300' : 'bg-zinc-800 border-zinc-700'
                }`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}