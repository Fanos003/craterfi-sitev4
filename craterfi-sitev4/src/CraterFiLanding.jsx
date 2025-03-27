export default function CraterFiLanding() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-wide">CraterFi</h1>
        <p className="text-xl text-gray-300">Own your piece of space. Meme-fueled. Moon-bound.</p>
        <a
          href="#"
          className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-300 transition"
        >
          Buy $CRATER
        </a>
      </section>

      <section className="max-w-4xl mx-auto space-y-6">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-2">🧠 What is CraterFi?</h2>
          <p className="text-gray-300">
            CraterFi is the first meme coin where you're not just going to the Moon — you're owning it.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-2">📊 Tokenomics</h2>
          <p className="text-gray-300 mb-2">Total Supply: 1,000,000,000 $CRATER</p>
          <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-white w-full animate-pulse"></div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-2">🚀 Roadmap</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Token Launch on Pump.fun</li>
            <li>Website + X Growth</li>
            <li>CraterFi Meme Campaign</li>
            <li>Community Building + Telegram</li>
            <li>Craterverse Exploration</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-2">🔒 Security & Transparency</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>100% Fair Launch</li>
            <li>No Presale, No VC, No Team Dump</li>
            <li>LP will be burned post-launch</li>
            <li>Mint authority will be renounced post-launch</li>
          </ul>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-16">
        &copy; {new Date().getFullYear()} CraterFi. All rights reserved.
      </footer>
    </div>
  );
}