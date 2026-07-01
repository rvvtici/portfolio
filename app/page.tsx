import SideNav from "./sidenav";
import Image from 'next/image';
import Project from "./projects";

export default function Home() {
  return (
    // <body className="flex h-screen px-[10%] flex-col dark:bg-neutral-950">
    // <body className="flex h-screen px-[10%] flex-row bg-neutral-950">
  <body>
  
  <main className="flex px-[16%] flex-row bg-neutral-950">
     <div id="left-sidebar" className="text-sm flex-row justify-center items-center border-1 py-[20%] px-[2%] border-neutral-800">
        <p>teste</p>
        <p>a</p>
        <p>b</p>
      </div>
      
      <div id ="center" className="flex flex-col border-1 border-neutral-800">
      
      {/* <SideNav /> */}
        {/* <main className="flex flex-1 flex-col gap-0 "> */}

          <div id="landing-name">
            <h1 className="flex-1 px-[30px] pt-[60px] pb-[30px] text-4xl font-bold tracking-tight 
            text-black dark:text-zinc-50 border-b-1 mt-5 mb-5 border-neutral-800">
              Ravi Macedo Ticianelli Lima
            </h1>
          </div>
            


          <div id="sobre" className="px-[30px] border-b-1 border-neutral-800 pb-[20px]">
            <div id="sobre-txt">
              <p className="tracking-wide text-xs font dark:text-zinc-500">
                SOBRE
              </p>
              <p className="font-semibold tracking-normal text-base landing-4 dark:text-zinc-50">
                Desenvolvedor Full-Stack [...]
              </p>
              <p className="text-sm tracking-wide font dark:text-zinc-500">
                Ciência da Computação · São Paulo [...]
              </p>
            </div>
            <div id="sobre-contato" className="flex flex-row gap-2 m-[0px]">
              <a target="_blank" href="https://github.com/rvvtici">
                <div className="flex flex-row border-neutral-800 bg-neutral-900 hover:border-neutral-700 border-1 px-2 py-[0.75px] rounded-md">
                  <Image src="/github.png" width={20} height={10} className="block p-[1px]" alt="logo github"/>
                  <p className="pt-[2px] text-[11px]">
                    GitHub
                  </p>
                </div>
              </a>
              <a target="_blank" href="https://linkedin.com/in/rvvtici">
                <div className="flex flex-row border-neutral-800 bg-neutral-900 hover:border-neutral-700 border-1 px-2 py-[0.75px] rounded-md">
                  <Image src="/linkedin.png" width={20} height={10} className="block p-1" alt="logo linkedin"/>
                  <p className="pt-[2px] text-[11px]">
                    LinkedIn
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div id ="exp-prof" className ="px-[30px] border-b-1 mt-4 mb-4 border-neutral-800">
            <h2 className=" font-bold dark:text-zinc-50 text-lg">
              Experiência Profissional
            </h2>
            <div id="zeppelin" className="flex flex-row p-1 mr-[4%] mb-6 hover:border-neutral-400 border-neutral-800 my-1 bg-neutral-900 border-1 rounded-xl">
              <div id="img-zeppelin"className="flex justify-center items-center">
                <Image src="/zeppelin.jpg" width={30} height={30} className="block mx-8 rounded-sm" alt="logo zeppelin"/>
              </div>
              <div id="landing-zeppelin" className="gap-0">
                
                <div className="flex items-center flex-row gap-2">
                  <p className="font-bold text-normal">
                    Desenvolvedor em Automação de Processos · Zeppelin 
                  </p>
                  <p className="font-base text-sm landing-12 text-zinc-400">
                     Estágio | 04/2026 - atual
                  </p>
                </div>
                <p className="font-base text-sm landing-12 text-zinc-400">
                  Responsável pelo desenvolvimento e manutenção da automação de processos essenciais para empresa, utilizados diariamente por 
                  colaboradores internos e externos, ao lado do setor de Sistema de Gestão da Qualidade (SGQ). Além disso, responsável pela 
                  documentação técnica do usuário, administrador e desenvolvedor.
                </p>
                <div className="flex flex-row gap-1">
                  <p className="font-semibold text-sm text-zinc-300">
                    Habilidades:
                  </p>
                  <p className="font-base text-sm text-zinc-400">
                    Lógica de Programação, Comunicação, Organização, Trabalho em Equipe, Documentação Técnica
                  </p>
                </div>
                <div className="flex flex-row gap-1">
                  <p className="font-semibold text-sm text-zinc-300">
                    Ferramentas:
                  </p>
                  <p className="font-base text-sm text-zinc-400">
                    Power Automate, Power Automate, Excel, TypeScript, Word, Microsoft Office
                  </p>
                </div>
                



              </div>   
            </div>
          </div>

          <div id ="education" className ="px-[30px] border-b-1 mb-4 border-neutral-800">
            <h2 className=" font-bold dark:text-zinc-50 text-lg">
              Formação Acadêmica
            </h2>
            <div id="fei" className="flex flex-row mr-[4%] mb-6 p-1 hover:border-neutral-400 transition delay-20 border-neutral-800 my-2 bg-neutral-900 border-1 rounded-xl">
              <div id="img-fei"className="flex justify-center items-center">
                <Image src="/fei.png" width={30} height={30} className="block mx-4 rounded-sm" alt="logo-fei"/>
              </div>
              <div id="landing-fei" className="gap-0">
  
                <div className="flex items-center flex-row gap-2">
                  <p className="font-bold text-normal">
                    Centro Universitário FEI
                  </p>
                  <p className="font-base text-sm landing-12 text-zinc-400">
                     São Bernardo do Campo
                  </p>
                </div>
                <p className="font-base text-sm landing-12 text-zinc-400">
                  Bacharelado em Ciência da Computação
                </p>
                <p className="font-base text-sm landing-12 text-zinc-400">
                  6º semestre | 01/2024 - 12/2027
                </p>
              </div>   
            </div>
          </div>


        <div className="ml-6">
          <h2 className=" font-bold dark:text-zinc-50 text-lg">
            Projetos
          </h2>
          <Project 
            info="FRONT-END · PESSOAL" 
            titulo="Portfólio Pessoal" 
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis, tellus viverra suscipit molestie, metus diam finibus nunc, sed tristique nunc eros a magna. Nulla vulputate leo vitae est gravida, non euismod ligula rutrum. Phasellus metus sapien, mollis ut feugiat in, mattis tempus odio. Donec eget magna placerat, faucibus felis vel, consequat ipsum. Phasellus vel accumsan nunc. Integer at molestie dui, ac dictum dui. Curabitur auctor et quam nec aliquam."
            tags = {[
              {titulo: "Next.js"},
              {titulo: "Tailwind CSS"},
              {titulo: "Vercel"}

            ]}
            links={[
              {titulo: "GitHub", url: "https://github.com/rvvtici/portfolio"}
            ]}
          >
            
          </Project>






        </div>
        
        {/* </main> */}
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

    </body>


  );
}

