import Image from 'next/image';
import assert from 'node:assert';

type ExperienceProps = {
    titulo:string;
    empresa:string;
    tipoDuracao:string;
    descricao:string;
    habilidades?: Tag[];
    ferramentas?: Tag[];
    logo:string;
    tags?:Tag[];
    logoH: number;
    logoW: number;
}


type Tag = {
    titulo: string;
}


export default function Experience({titulo,empresa,tipoDuracao,descricao,habilidades,ferramentas,tags,logo,logoH,logoW}: ExperienceProps) {
  return (

            <div key={titulo} className="flex flex-col sm:flex-row p-4 hover:border-neutral-400 transition delay-20 border-neutral-800 my-2 bg-neutral-900 border-1 rounded-xl">
                <div id="img" className="flex sm:justify-center sm:items-start my-1">
                    <Image src={logo} width={logoW} height={logoH} className="block sm:mx-8 rounded-sm" alt="logo"/>
                </div>
                <div className="gap-0">
        
                    <div className="flex sm:items-center flex-col sm:flex-row sm:gap-0">
                        <p className="font-bold sm:text-normal text-[20px]">
                            {titulo} ·
                        </p>
                        <p className="font-base sm:text-sm text-[26px] leading-8 text-zinc-350">
                            {empresa}
                        </p>
                    </div>
                
                    <p className="font-base sm:text-sm text-[26px] leading-8 text-zinc-400">
                        {tipoDuracao}
                        </p>
                <p className="font-base sm:text-sm text-[26px] leading-4 font">
                    {descricao}
                </p>

                    <div className="flex flex-row gap-[3px]">
                        {/* <p className="font-semibold text-sm text-zinc-300">
                            Habilidades:
                        </p>
                        <p className="font-base text-sm text-zinc-400">
                            Lógica de Programação, Comunicação, Organização, Trabalho em Equipe, Documentação Técnica
                        </p> */}
                        <p className="sm:text-sm text-[26px] font-semibold">Habilidades: </p>
                        {habilidades?.map((tag) => (
                            //arrumar aq quebra de linha
                            <p key={tag.titulo} className="flex flex-wrap whitespace-nowrap text-zinc-300 border-neutral-800 hover:border-neutral-700 sm:text-sm text-[26px] border-1 px-2 py-[0.2px] rounded-md">
                                {tag.titulo}
                            </p>    
                        ))}
                    </div>


                    <div className="flex flex-row gap-[3px]">
                        {/* <p className="font-semibold text-sm text-zinc-300">
                            Habilidades:
                        </p>
                        <p className="font-base text-sm text-zinc-400">
                            Lógica de Programação, Comunicação, Organização, Trabalho em Equipe, Documentação Técnica
                        </p> */}
                        <p className="text-sm font-semibold">
                            Ferramentas: 
                        </p>
                        {ferramentas?.map((tag) => (
                            <p key={tag.titulo} className="whitespace-nowrap text-zinc-300 border-neutral-800 hover:border-neutral-700 text-sm border-1 px-2 py-[0.2px] rounded-md">
                                {tag.titulo}
                            </p>    
                        ))}
                    </div>


                </div>   
            </div>
    );
}


