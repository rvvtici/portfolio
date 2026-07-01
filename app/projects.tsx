type ProjectProps = {
    titulo:string;
    descricao:string;
    // imagem?:string;
    info?:string;
    tags?:Tag[];
    links?:Link[];
}

type Link = {
    titulo: string;
    url: string;
}

type Tag = {
    titulo: string;
}


export default function Project({titulo, descricao, imagem, info, tags, links}: ProjectProps) {
  return (
    <div id="card" className="flex py-2 px-4 flex-row mr-[4%] mb-6 p-1 hover:border-neutral-400 transition delay-20 border-neutral-800 my-2 bg-neutral-900 border-1 rounded-xl">
        {/* <div id="img"className="flex justify-center items-center">
            {imagem && <img src={imagem} width={30} height={30} className="block mx-4 rounded-sm" alt={titulo}/>}
        </div> */}
        <div className="">
            <p className="font text-[12px] text-zinc-500">
                {info}
            </p>
            <p className="font-bold text-lg text-white-0">
                {titulo}
            </p>
            <p className="font-base text-sm landing-12 text-zinc-300">
                {descricao}
            </p>

            <div>
                {tags?.map((tag) => (
                    <p className="border-2">
                        {tag.titulo}
                    </p>    
                ))}
            </div>


            <div>
                {links?.map((link) => (
                    <a key={link.url} href={link.url} target="_blank">
                        {link.titulo}
                    </a>
                ))}
            </div>
        </div>  
    </div>
    );
}


