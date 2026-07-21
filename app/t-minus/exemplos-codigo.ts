export const exemplos = {
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
