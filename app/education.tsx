import Image from 'next/image';

type EducationProps = {
    escola:string;
    local?:string;
    titulo:string;
    semestre?:string
    inicio?:string;
    conclusao?:string;
    logo: string;
    logoW: number;
    logoH: number;
}

export default function Education({escola, local, titulo, semestre, inicio, conclusao, logo, logoH, logoW}: EducationProps) {
  return (

            <div key={escola} className="flex flex-col sm:flex-row p-4 hover:border-neutral-400 transition delay-20 border-neutral-800 my-2 bg-neutral-900 border-1 rounded-xl">
                <div id="img" className="flex sm:justify-center sm:items-center">
                    <Image src={logo} width={logoW} height={logoH} className="block sm:mx-4 my-[0.5px] rounded-sm" alt="logo"/>
                </div>
                <div id="landing-fei" className="gap-0">
        
                    <div className="flex sm:items-center flex-col sm:flex-row sm:gap-2">
                        <p className="font-bold text-normal">
                            {escola}
                        </p>
                        <p className="font-base text-sm landing-12 text-zinc-400">
                            {local}
                        </p>
                    </div>
                
                    <p className="font-base text-sm landing-12 text-zinc-300">
                        {titulo}
                        </p>
                    <p className="text-sm landing-12 text-zinc-300">
                        {semestre} · {inicio} - {conclusao}
                    </p>
                </div>   
            </div>
    );
}


