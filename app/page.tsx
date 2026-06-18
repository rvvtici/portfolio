import SideNav from "./sidenav";

export default function Home() {
  return (
    <div className="flex h-screen flex-col dark:bg-black md:flex-row">
      <SideNav />
      {/*
      <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto bg-zinc-50 font-sans dark:bg-black">
      */}
        <main className="flex flex-row items-center px-16 py-16 gap-6 sm:items-start">
          {/*<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          */}
          <div>

            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Ravi Macedo Ticianelli Lima
            </h1>
            <p className="text-sm max-w-md text-lg leading-8">
              <a
                href="https://github.com/rvvtici"
                className=""
                >
                [ github ]
              </a>{" "}
              <a
                href="https://linkedin.com/in/rvvtici"
                className=""
                >
                [ linkedin ]
              </a>
            </p>
          </div>
          {/*</div>*/}
        </main>
      {/*</div>*/}
    </div>
  );
}

