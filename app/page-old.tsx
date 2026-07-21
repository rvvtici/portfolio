import SideNav from "./sidenav";
import Image from 'next/image';
import Project from "./projects";
import Education from "./education";
import Experience from "./experiences";

export default function Home() {
  return (
  
    <div id="root" className="">
    {/* <div id="root"> */}

    <main className="flex lg:px-[16%] flex-row bg-neutral-950">


      {/* <div id="left-sidebar" className="text-sm flex-row justify-center items-center border-1 py-30 px-5 border-neutral-800">
        <p>teste</p>
        <p>a</p>
        <p>b</p>
        <p>c</p>
      </div> */}





      
      <div id ="center" className="flex flex-col border-1 border-neutral-800">
      
      {/* <SideNav /> */}
        {/* <main className="flex flex-1 flex-col gap-0 "> */}

          <div id="landing-name">
            <h1 className="flex-1 px-[30px] pt-[60px] sm:text-4xl text-7xl font-bold tracking-tight 
            text-black dark:text-zinc-50  mt-5">
              Ravi Macedo Ticianelli Lima
            </h1>
          </div>


          <div id="sobre" className="px-[30px] border-b-1 mb-1 mt-20 border-neutral-800 pb-[20px]">
            <div id="sobre-txt">
              <p className="tracking-wide sm:text-sm text-[22px] font dark:text-zinc-400">
                SOBRE
              </p>
              <p className="font-medium  tracking-wide font-stretch sm:text-base text-[26px] sm:leading-6 leading-8 dark:text-zinc-50">
                Desenvolvedor full-stack com interesse em sistemas, design de produto e cloud. 
              </p>
              <p className="sm:text-base text-[24px] tracking-wide font mb-1 dark:text-zinc-300">
                Ciência da Computação · São Paulo [...] Lorem ipsum 
              </p>
            </div>
            <div id="sobre-contato" className="sm:text-base text-[24px] flex flex-row gap-2 m-[0px]">
              
              <a target="_blank" href="rvvtici@gmail.com">
                <div className="flex flex-row border-neutral-800 bg-neutral-900 hover:border-neutral-700 border-1 px-2 py-[0.75px] rounded-md">
                  {/* <Image src="/fei.png" width={20} height={10} className="block p-[1px]" alt="logo github"/> */}
                  <p className="pt-[2px] ">
                    Email
                  </p>
                </div>
              </a>

              <a target="_blank" href="https://github.com/rvvtici">
                <div className="flex flex-row border-neutral-800 bg-neutral-900 hover:border-neutral-700 border-1 px-2 py-[0.75px] rounded-md">
                  <Image src="/github.png" width={30} height={30} className="block p-[1px]" alt="logo github"/>
                  <p className="pt-[2px]">
                    GitHub
                  </p>
                </div>
              </a>
              <a target="_blank" href="https://linkedin.com/in/rvvtici">
                <div className="flex flex-row border-neutral-800 bg-neutral-900 hover:border-neutral-700 border-1 px-2 py-[0.75px] rounded-md">
                  <Image src="/linkedin.png" width={30} height={24} className="block p-1" alt="logo linkedin"/>
                  <p className="pt-[2px]">
                    LinkedIn
                  </p>
                </div>
              </a>

              <a target="_blank" href="/Currículo - Ravi Macedo Ticianelli Lima.pdf">
                <div className="flex flex-row border-neutral-800 bg-neutral-900 hover:border-neutral-700 border-1 px-2 py-[0.75px] rounded-md">
                  <p className="pt-[2px]">
                    ↗ Currículo
                  </p>
                </div>
              </a>

            </div>
          </div>







        <div className="px-[30px] border-b-1 my-2 border-neutral-800 pb-[20px]">
          <h2 className="sm:text-base text-[30px] font-bold dark:text-zinc-50 text-lg">
              Experiência Profissional
          </h2>
          <Experience
       
            titulo="Desenvolvedor em Automação de Processos"
            empresa="Zeppelin Systems Latin America"
            tipoDuracao="Estágio | 04/2026 - atual"
            descricao="
            Desenvolvimento e manutenção de sistemas de automação de processos internos, previamente manuais, essenciais para a empresa e utilizados diariamente por dezenas de colaboradores internos e externos, em parceria com o setor de Gestão da Qualidade (SGQ). Criação de fluxos com lógica condicional, integração entre sistemas e tratamento de dados de entrada/saída, além da documentação técnica para usuário, administrador e desenvolvedor."
            habilidades = {[
              {titulo: "Lógica de Programação"},
              {titulo: "Comunicação"},
              {titulo: "Trabalho em Equipe"},
              {titulo: "Documentação Técnica"},
              {titulo: "Organização"},

            ]}
            logo="/zeppelin.jpg"
            logoW={30}
            logoH={30}
            ferramentas = {[
              {titulo: "Power Automate"},
              {titulo: "Excel"},
              {titulo: "TypeScript"},
              {titulo: "Word"},
              {titulo: "Microsoft Office"},
            ]}
            >
            
          </Experience>
        </div>









        <div className="px-[30px] border-b-1 my-2 border-neutral-800 pb-[20px]">
          <h2 className=" font-bold dark:text-zinc-50 text-lg">
              Formação Acadêmica
          </h2>
          <Education 
            escola="Centro Universitário FEI" 
            local="São Bernardo do Campo"
            titulo="Bacharelado em Ciência da Computação"
            semestre="6º semestre"
            inicio="01/2024"
            conclusao="12/2027"
            logo="/fei.png"
            logoW={30}
            logoH={30}
            >
          </Education>
        </div>




        <div className="px-[30px]  my-2  pb-[20px]">
        {/* <div className="px-[30px] border-b-1 my-2 border-neutral-800 pb-[20px]"> */}
          <h2 className=" font-bold dark:text-zinc-50 text-lg">
            Projetos
          </h2>

          <Project 
            info="COMPILADOR · LINGUAGEM DE PROGRAMAÇÃO · BACK-END" 
            titulo="Linguagem de Programação: T-Minus" 
            descricao="
            Criação da linguagem de programação T-Minus e de seu compilador, desenvolvido em Java. O compilador traduz código escrito na linguagem criada para Pascal, contemplando do zero todas as suas etapas essenciais: análise léxica, análise sintática com geração de AST e análise semântica."
            tags = {[
              {titulo: "Next.js"},
              {titulo: "Tailwind CSS"},
              {titulo: "Vercel"},

            ]}
            links={[
              {titulo: "Live Demo", tipo:"base", url: "/t-minus"},
              {titulo: "GitHub", tipo:"base", url: "https://github.com/rvvtici/portfolio"},
            ]}
          >
          </Project>

          <Project 
            info="ARQUITETURA DE DADOS · FULL-STACK" 
            titulo="Sistema Aeroportuário" 
            descricao="
            Sistema de operações aeroportuárias com arquitetura poliglota de dados: PostgreSQL como fonte de verdade transacional, Cassandra para auditoria e rastreabilidade de eventos, e Redis para status operacional em tempo real, com sincronização automática entre os bancos.
            "
            tags = {[
              {titulo: "Next.js"},
              {titulo: "Tailwind CSS"},
              {titulo: "Vercel"},

            ]}
            links={[
              {titulo: "GitHub", tipo:"base", url: "https://github.com/rvvtici/portfolio"}
            ]}
          >
          </Project>


          <Project 
            info="FRONT-END · PESSOAL" 
            titulo="Portfólio Pessoal" 
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, tellus viverra suscipit molestie, metus diam finibus nunc, sed tristique nunc eros a magna. Nulla vulputate leo vitae est gravida, non euismod ligula rutrum. Phasellus metus sapien, mollis ut feugiat in, mattis tempus odio. Donec eget magna placerat, faucibus felis vel, consequat ipsum. Phasellus vel accumsan nunc. Integer at molestie dui, ac dictum dui. Curabitur auctor et quam nec aliquam."
            tags = {[
              {titulo: "Next.js"},
              {titulo: "Tailwind CSS"},
              {titulo: "Vercel"},

            ]}
            links={[
              {titulo: "GitHub", tipo:"base", url: "https://github.com/rvvtici/portfolio"}
            ]}
          >
          </Project>

          <Project 
            info="FULL-STACK" 
            titulo="Clínica Médica" 
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, tellus viverra suscipit molestie, metus diam finibus nunc, sed tristique nunc eros a magna. Nulla vulputate leo vitae est gravida, non euismod ligula rutrum. Phasellus metus sapien, mollis ut feugiat in, mattis tempus odio. Donec eget magna placerat, faucibus felis vel, consequat ipsum. Phasellus vel accumsan nunc. Integer at molestie dui, ac dictum dui. Curabitur auctor et quam nec aliquam."
            tags = {[
              {titulo: "Next.js"},
              {titulo: "Tailwind CSS"},
              {titulo: "Vercel"},

            ]}
            links={[
              {titulo: "Live Demo", tipo: "demo", url: "https://snack.expo.dev/@rvvtici/clinica-medica"},
              {titulo: "GitHub", tipo: "base", url: "https://github.com/rvvtici/portfolio"},
              
            ]}
          >
          </Project>


          <Project 
            info="FULL-STACK" 
            titulo="Aplicativo de Livraria" 
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, tellus viverra suscipit molestie, metus diam finibus nunc, sed tristique nunc eros a magna. Nulla vulputate leo vitae est gravida, non euismod ligula rutrum. Phasellus metus sapien, mollis ut feugiat in, mattis tempus odio. Donec eget magna placerat, faucibus felis vel, consequat ipsum. Phasellus vel accumsan nunc. Integer at molestie dui, ac dictum dui. Curabitur auctor et quam nec aliquam."
            tags = {[
              {titulo: "Next.js"},
              {titulo: "Tailwind CSS"},
              {titulo: "Vercel"},

            ]}
            links={[
              {titulo: "GitHub", tipo:"base", url: "https://github.com/rvvtici/portfolio"}
            ]}
          >
          </Project>

          <Project 
            info="FULL-STACK" 
            titulo="Plataforma de Áudio Digitais" 
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, tellus viverra suscipit molestie, metus diam finibus nunc, sed tristique nunc eros a magna. Nulla vulputate leo vitae est gravida, non euismod ligula rutrum. Phasellus metus sapien, mollis ut feugiat in, mattis tempus odio. Donec eget magna placerat, faucibus felis vel, consequat ipsum. Phasellus vel accumsan nunc. Integer at molestie dui, ac dictum dui. Curabitur auctor et quam nec aliquam."
            tags = {[
              {titulo: "Next.js"},
              {titulo: "Tailwind CSS"},
              {titulo: "Vercel"},

            ]}
            links={[
              {titulo: "GitHub", tipo:"base", url: "https://github.com/rvvtici/portfolio"}
            ]}
          >
          </Project>


          <Project 
            info="FULL-STACK" 
            titulo="Restaurante SQL" 
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, tellus viverra suscipit molestie, metus diam finibus nunc, sed tristique nunc eros a magna. Nulla vulputate leo vitae est gravida, non euismod ligula rutrum. Phasellus metus sapien, mollis ut feugiat in, mattis tempus odio. Donec eget magna placerat, faucibus felis vel, consequat ipsum. Phasellus vel accumsan nunc. Integer at molestie dui, ac dictum dui. Curabitur auctor et quam nec aliquam."
            tags = {[
              {titulo: "Next.js"},
              {titulo: "Tailwind CSS"},
              {titulo: "Vercel"},

            ]}
            links={[
              {titulo: "GitHub", tipo:"base", url: "https://github.com/rvvtici/portfolio"}
            ]}
          >
          </Project>





        </div>
        
        </div>
      </main>
  
        <footer className="text-xs text-zinc-500 p-1 flex justify-center items-center flex-col ">
          <p>
            Created with Next.js, Tailwind CSS and Vercel
          </p>
          <p>
            rvvtici © 2026 
          </p>
        </footer>



    </div>


  );
}

