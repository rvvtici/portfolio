import SideNav from "./sidenav";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col dark:bg-neutral-950">
      <div className="flex flex-1 md:flex-row flex-col">
      <SideNav />
        <main className="flex flex-1 flex-col  px-12 py-10 gap-0 md:py-16 md:px-16 ">
          <div>
            <h1 className="flex-1 text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Ravi Macedo Ticianelli Lima
            </h1>
            <p className="text-[13px] leading-5">
              <a
                target="_blank"
                href="https://github.com/rvvtici"
                className=""
                >
                [ github ]
              </a>{" "}
              <a
                target="_blank"
                href="https://linkedin.com/in/rvvtici"
                className=""
                >
                [ linkedin ]
              </a>
            </p>

            
          </div>
          <div className="border-b-1 mt-2 mb-2 border-neutral-800">
          </div>

            <h3 className="text-[11px] tracking-wide font dark:text-zinc-500">
              SOBRE
            </h3>
            <p className="text-[13px] gap-5 tracking-wide font dark:text-zinc-50">
              Desenvolvedor full-stack
            </p>

            <p className="text-[11px] tracking-wide font dark:text-zinc-500">
              Ciência da Computação · São Paulo
            </p>



          <div>
            <h2 className="font-semibold leading-10 dark:text-zinc-50">
              Formação Acadêmica
            </h2>

            <div className="flex w-full border-neutral-800 bg-neutral-900 border-1 rounded-xl">
              <div className="flex p-4 justify-center items-center">
                <Image
                  src="/fei.png"
                  width={30}
                  height={40}
                  className="block"
                  alt="logo fei"
                  />
              </div>
              <div className="flex p-2 justify-start flex-col">
                <h3 className="font-semibold text-[15px]">
                Centro Universitário FEI</h3>
                <h4 className="max-w-sm text-[12px] font dark:text-zinc-500">
                  Bacharelado em Ciência da Computação
                </h4>
                <h4 className="max-w-sm text-[12px] font dark:text-zinc-500">
                  6º semestre | 01/2024 - 12/2027
                </h4>
              
              </div>   
            </div>




          </div>
        </main>
        </div>

        <footer className=" p-2 border-neutral-800 border-t-1 flex justify-center items-center">
          <h4 className="max-w-sm text-[12px] font dark:text-zinc-500">
            Created with Next.js, Tailwind CSS and Vercel <br/>rvvtici © 2026 
          </h4>
        </footer>

          

    </div>


  );
}

