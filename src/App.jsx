function App() {
  return (
    <div className="flex min-h-lvh flex-col bg-indigo-400">
      <header className="z-40 py-8">
        <img className="mx-auto h-11" src="/assets/logo.png" alt="" />
      </header>
      <div className="w-100 z-40 mx-auto my-auto flex flex-grow flex-col items-center justify-center gap-10 px-6 lg:w-11/12 xl:w-9/12 2xl:w-7/12">
        <h1 className="text-center text-5xl leading-snug text-white md:text-7xl md:leading-snug">
          Making brands standout through design
        </h1>

        <button className="text-md rounded-full border border-slate-400 bg-white/30 px-7 py-3 text-xl text-white transition-all duration-300 hover:bg-white/40">
          <a href="mailto:contact@jasperlab.com">Contact us</a>
        </button>
      </div>
      <img
        src="/assets/shine.svg"
        alt="background glow"
        className="absolute top-0 z-30"
      />
      <div className="absolute top-0 z-20 h-full w-full bg-black/50"></div>
      <div className="absolute top-0 z-0 h-full w-full">
        <video
          src="/assets/bg-video.mp4"
          loop
          autoPlay
          muted
          playsInline
          className="absolute top-0 h-full w-full object-cover"
        ></video>
      </div>
    </div>
  );
}

export default App;
