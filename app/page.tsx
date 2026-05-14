export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Privacy Protection
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Is Your Salary Being{" "}
          <span className="text-[#58a6ff]">Sold Right Now?</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Data brokers and job sites expose your salary information without your consent.
          We scan 50+ sources and alert you the moment your pay data surfaces online.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Scanning — $12/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. Instant setup.</p>

        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">50+</div>
            <div className="text-xs text-[#8b949e] mt-1">Data brokers monitored</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">24h</div>
            <div className="text-xs text-[#8b949e] mt-1">Scan frequency</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">Real-time</div>
            <div className="text-xs text-[#8b949e] mt-1">Email alerts</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Scan 50+ data broker sites",
              "Monitor job boards & salary aggregators",
              "Instant email alerts on exposure",
              "Monthly privacy report",
              "Opt-out request assistance",
              "Cancel anytime"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the scanner work?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              You submit your name, employer, and job title. Our system runs daily automated scans across 50+ data broker sites, salary aggregators, and job boards, comparing results against your profile and alerting you to any matches.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What sites do you monitor?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              We monitor major data brokers (Spokeo, BeenVerified, Whitepages), salary sites (Glassdoor, Levels.fyi, Payscale), LinkedIn, and dozens of regional job boards and people-search engines.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What happens when my data is found?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              You receive an immediate email alert with the source, what data was exposed, and step-by-step opt-out instructions. Pro subscribers also get assisted opt-out requests sent on their behalf.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Salary Data Protection Scanner. All rights reserved.
      </footer>
    </main>
  );
}
