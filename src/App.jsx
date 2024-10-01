function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-indigo-400">
      <header className="z-40 py-8">
        <img className="mx-auto h-11" src="/assets/logo.png" alt="" />
      </header>
      <div className="w-100 z-40 mx-auto my-auto flex flex-grow flex-col items-center justify-center gap-10 px-6 lg:w-11/12 xl:w-9/12 2xl:w-[900px]">
        <h1 className="text-center text-5xl leading-snug text-white md:text-7xl md:leading-snug">
          Making brands standout through design
        </h1>

        <button className="text-md rounded-full border border-slate-400 px-7 py-3 text-xl text-white transition-all duration-300 hover:bg-white/40">
          <a
            href="https://wwfl5fudzr0.typeform.com/to/I4OYMe7x"
            target="_blank"
          >
            Contact us
          </a>
        </button>
      </div>
      <img
        src="/assets/shine.svg"
        alt="background glow"
        className="absolute top-0 z-30 opacity-60"
      />
      <div className="absolute top-0 z-20 min-h-full w-full bg-black/50"></div>
      <div className="absolute top-0 z-0 min-h-full w-full">
        <video
          src="/assets/bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-video absolute top-0 h-full w-full object-cover"
        ></video>
      </div>
    </div>
  );
}

export default App;
