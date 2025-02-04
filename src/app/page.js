'use client';

import React, { useState, useEffect } from 'react';
import { Brain, Building } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-16">
      <div className="flex justify-center gap-4 mb-8">
        <div className="bg-zinc-900/50 backdrop-blur px-8 py-6 rounded-lg border border-zinc-800 animate-fade-in min-w-[160px]">
          <div className="text-7xl font-light mb-2">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-zinc-500 text-sm mt-2 font-light tracking-widest">HOURS</div>
        </div>
        <div className="text-7xl font-light self-center animate-pulse">:</div>
        <div className="bg-zinc-900/50 backdrop-blur px-8 py-6 rounded-lg border border-zinc-800 animate-fade-in min-w-[160px]">
          <div className="text-7xl font-light mb-2">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-zinc-500 text-sm mt-2 font-light tracking-widest">MINUTES</div>
        </div>
        <div className="text-7xl font-light self-center animate-pulse">:</div>
        <div className="bg-zinc-900/50 backdrop-blur px-8 py-6 rounded-lg border border-zinc-800 animate-fade-in min-w-[160px]">
          <div className="text-7xl font-light mb-2">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-zinc-500 text-sm mt-2 font-light tracking-widest">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

const WalletSubmission = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (walletAddress) {
      setIsSubmitted(true);
      // Here you can add API call to submit the wallet address
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center mb-24">
      <div className="space-y-6 mb-12">
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg px-6 py-4 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-light tracking-wider text-purple-300 mb-4">Verify OG Status</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Hold minimum 10,000 $BDuck tokens to be eligible
          </p>
        </div>

        <div className="bg-zinc-900/30 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-light tracking-wider text-purple-300 mb-4">About $BDuck Token</h3>
          <p className="text-lg text-zinc-300 leading-relaxed">
            $BDuck is the governance token of BlackDuck DAO. Each token represents one vote in the DAO,
            empowering holders to participate in important decisions and shape the future of our ecosystem.
          </p>
        </div>

        <p className="text-lg text-zinc-300 leading-relaxed">
          Submit your wallet address to claim your OG status and unlock exclusive benefits:
          <span className="block mt-4 text-purple-300/90">
            • DAO Governance Rights (1 token = 1 vote)<br/>
            • Early Access to Features<br/>
            • Exclusive Airdrops<br/>
            • Revenue Sharing
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Enter your wallet address"
            className="w-full px-6 py-4 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium tracking-wider transition-all duration-300 hover:scale-105"
        >
          {isSubmitted ? 'Submitted Successfully!' : 'Submit Address'}
        </button>
      </form>

      <div className="mt-12">
        <div className="text-4xl font-light tracking-[0.3em] text-zinc-300">COMING SOON</div>
        <div className="text-2xl font-medium tracking-[0.2em] text-purple-400 animate-pulse mt-4">$DUCK</div>
      </div>
    </div>
  );
};

const TeamMember = ({ role, name, description }) => (
  <div className="bg-zinc-900/30 backdrop-blur rounded-lg p-4 border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 group">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 overflow-hidden rounded-full bg-zinc-800 flex-shrink-0">
        <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-zinc-800"></div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-light tracking-wider truncate">{name}</h3>
        <div className="text-purple-400 text-sm font-medium tracking-widest">{role}</div>
        <p className="text-zinc-400 text-sm leading-relaxed mt-2 line-clamp-2">{description}</p>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white bg-gradient-to-b from-purple-900/20">
      {/* Header / Navigation */}
      <nav className="p-8 flex justify-between items-center">
        <div className="text-lg font-light tracking-widest border border-zinc-800/50 px-4 py-2 rounded-lg">
          BVC
        </div>
        <div className="flex items-center gap-6">
          <div className="text-lg font-light tracking-widest border border-zinc-800/50 px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            DUCK VENTURES
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-500 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 group relative">
            <div className="w-full h-full relative">
              {/* 光效背景 */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 animate-pulse"/>

              {/* SVG Duck */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full relative z-10">
                <defs>
                  <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style={{stopColor:'#4a1c77'}}/>
                    <stop offset="100%" style={{stopColor:'#2a0845'}}/>
                  </radialGradient>
                  <filter id="neonGlow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <linearGradient id="metallic" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#666'}}/>
                    <stop offset="50%" style={{stopColor:'#888'}}/>
                    <stop offset="100%" style={{stopColor:'#666'}}/>
                  </linearGradient>
                </defs>

                <circle cx="50" cy="50" r="48" fill="url(#bgGradient)" className="group-hover:animate-pulse"/>
                <path d="M25 35 C25 25 75 25 75 35" fill="none" stroke="url(#metallic)" strokeWidth="4" filter="url(#neonGlow)" className="animate-pulse"/>
                <path d="M30 40 Q50 30 70 40 Q80 50 50 70 Q20 50 30 40" fill="white" filter="url(#neonGlow)"/>
                <g filter="url(#neonGlow)">
                  <ellipse cx="40" cy="45" rx="8" ry="10" fill="#222"/>
                  <ellipse cx="60" cy="45" rx="8" ry="10" fill="#222"/>
                  <circle cx="42" cy="45" r="2" fill="#00ffff" className="animate-pulse"/>
                  <circle cx="62" cy="45" r="2" fill="#00ffff" className="animate-pulse"/>
                </g>
                <path d="M40 55 Q50 58 60 55 Q50 65 40 55" fill="#ff9900" filter="url(#neonGlow)"/>
                <path d="M20 40 L30 30 L40 35 L50 30 L60 35 L70 30 L80 40"
                      stroke="#ff00ff"
                      strokeWidth="2"
                      fill="none"
                      filter="url(#neonGlow)"
                      className="animate-pulse"/>
              </svg>

              {/* 外发光效果 */}
              <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-500"/>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Title */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-8xl font-light tracking-widest italic text-center mb-16"
             style={{
               fontFamily: "'Times New Roman', serif",
               letterSpacing: '0.2em',
               textShadow: '0 0 40px rgba(255,255,255,0.1)'
             }}>
          Black Duck
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 relative">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>

        {/* Project Introduction */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-12 transform hover:scale-[1.02] transition-all duration-500">
            <h1 className="text-3xl font-light mb-6 tracking-[0.2em] bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Black Duck
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed tracking-wider mb-6">
              A DAO organization built on Solana, dedicated to AI development and applications.
            </p>
            <div className="text-lg text-purple-400/90 italic tracking-wide font-light">
              Building the future of AI on Solana blockchain
            </div>
          </div>
        </div>

        {/* OG Countdown Section */}
        <div className="text-center mb-8">
          <div className="text-2xl font-light tracking-wider text-purple-300 mb-4">OG Status Claim</div>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
            Hold 10,000 $BlackDuck tokens to claim your OG status.
            Don't miss this exclusive opportunity to be part of our founding community.
          </p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />
        <div className="text-center mb-16">
          <p className="text-zinc-400 tracking-wider">Time remaining to claim OG status</p>
        </div>

        {/* Wallet Submission */}
        <WalletSubmission />

        <div className="flex gap-24 max-w-7xl mx-auto mb-32">
          {/* Left Card */}
          <div className="flex-1 bg-zinc-900/50 backdrop-blur rounded-lg p-8 border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2">
            <div className="mb-6">
              <Brain className="w-12 h-12 text-purple-500" />
            </div>
            <h2 className="text-4xl font-light mb-4 italic">I am the best.</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              We are looking for the best of the best. If you are ready for a new challenge
              and want to show your potential, take our brief assessment. We evaluate talent
              based on critical thinking, creativity, and problem-solving abilities.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md transition-all duration-300 hover:scale-105">
              Take Assessment
            </button>
          </div>

          {/* Right Card */}
          <div className="flex-1 bg-zinc-900/50 backdrop-blur rounded-lg p-8 border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2">
            <div className="mb-6">
              <Building className="w-12 h-12 text-zinc-400" />
            </div>
            <h2 className="text-4xl font-light mb-4 italic">I need the best.</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              If you are leading a team and looking for exceptional talent, join us.
              We can help you find and connect with highly qualified candidates who
              match your requirements and culture.
            </p>
            <button className="border border-zinc-600 hover:bg-zinc-800 px-8 py-3 rounded-md transition-all duration-300 hover:scale-105">
              Join Us
            </button>
          </div>
        </div>

        {/* Team Section */}
        <section className="max-w-4xl mx-auto pb-24">
          <h2 className="text-3xl font-light text-center mb-4 tracking-widest">Core Team</h2>
          <p className="text-zinc-400 text-center mb-12 tracking-wider">Meet the visionaries behind Black Duck</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TeamMember
              name="James Wilson"
              role="CEO & Founder"
              description="Visionary leader with 15+ years experience in blockchain and Web3 technologies."
            />
            <TeamMember
              name="Sarah Chen"
              role="CTO"
              description="Technical genius behind our infrastructure. Previously led development at major Web3 projects."
            />
            <TeamMember
              name="Michael Zhang"
              role="Head of Research"
              description="PhD in Cryptography. Leading our research initiatives in DeFi innovations."
            />
            <TeamMember
              name="Elena Rodriguez"
              role="Chief Strategy Officer"
              description="Strategic mastermind with deep expertise in DeFi protocols and market analysis."
            />
          </div>

          <div className="text-center mt-12">
            <button className="border border-zinc-600 hover:bg-zinc-800 px-6 py-2 rounded-md transition-all duration-300 hover:scale-105 text-sm tracking-wider">
              View Full Team
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-zinc-600">
        <p className="text-sm">© 2025 Black Duck. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;