import Image from "next/image";
import SideNav from "./sidenav";

export default function Home() {
  return (     
    <div className="flex-grow h-screen flex-col md:flex-row md:overflow-y-auto">
      <div className="w-full flex-none md:w-64">
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
              <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                  Ravi Macedo Ticianelli Lima
                </h1>
                  <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  <a
                    href="https://github.com/rvvtici"
                    className="font-medium text-zinc-950 dark:text-zinc-50"
                  >
                    [ github ] 
                  </a>{" "}
                  
                  <a
                    href="https://linkedin.com/in/rvvtici"
                    className="font-medium text-zinc-950 dark:text-zinc-50"
                  >
                    [ linkedin ]
                  </a>{" "}
                </p>
              </div> 
            </main>
          </div>
        </div>
      </div>
  );
}
