// Person A: build the Hero section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #hero so your CSS only affects your section.
section("hero", () => `
  <style>
    #hero .stage {
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      padding: 72px 24px 64px;
      text-align: center;
      background:
        radial-gradient(circle at 50% 120%, ${SITE.color}55 0%, transparent 55%),
        radial-gradient(circle at 85% 15%, #ff7a1a33 0%, transparent 35%),
        linear-gradient(180deg, #1a0b2e 0%, #0b0614 100%);
      border: 2px solid ${SITE.color};
      box-shadow: 0 0 40px ${SITE.color}44, inset 0 0 60px #000;
    }
    #hero .moon {
      position: absolute; top: 22px; right: 28px;
      width: 64px; height: 64px; border-radius: 50%;
      background: #ffe9a8;
      box-shadow: 0 0 30px #ffe9a8aa;
    }
    #hero .bat {
      position: absolute; font-size: 1.6rem;
      animation: hero-fly 7s ease-in-out infinite;
    }
    #hero .bat.b1 { top: 18%; left: 8%; }
    #hero .bat.b2 { top: 30%; left: 78%; animation-delay: -2.5s; font-size: 1.2rem; }
    #hero .bat.b3 { top: 60%; left: 14%; animation-delay: -4.5s; font-size: 1rem; }
    #hero .disco {
      display: inline-block; font-size: 3rem;
      animation: hero-spin 4s linear infinite;
      filter: drop-shadow(0 0 12px ${SITE.color});
    }
    #hero .kicker {
      margin: 8px 0 0;
      font-size: .8rem; letter-spacing: .3em; text-transform: uppercase;
      color: #ff9a3c;
    }
    #hero h1 {
      margin: 6px 0 10px;
      font-size: clamp(2.4rem, 8vw, 4.5rem);
      line-height: 1.05;
      color: #fff;
      text-shadow: 3px 3px 0 #ff7a1a, 6px 6px 0 ${SITE.color};
      animation: hero-groove 1.2s ease-in-out infinite alternate;
    }
    #hero .tagline {
      max-width: 560px; margin: 0 auto 28px;
      font-size: 1.15rem; color: #e6dcf5;
    }
    #hero .cta {
      display: inline-block;
      padding: 16px 34px;
      border-radius: 999px;
      background: ${SITE.color};
      color: #0b0614;
      font-weight: 800; font-size: 1.1rem;
      text-decoration: none;
      box-shadow: 0 0 0 4px #0b0614, 0 0 0 7px #ff7a1a;
      transition: transform .15s ease;
    }
    #hero .cta:hover { transform: translateY(-3px) rotate(-2deg); }
    #hero .floor {
      display: flex; justify-content: center; gap: 18px;
      margin-top: 40px; font-size: 2rem;
    }
    #hero .floor span { animation: hero-bounce .6s ease-in-out infinite alternate; }
    #hero .floor span:nth-child(2) { animation-delay: .15s; }
    #hero .floor span:nth-child(3) { animation-delay: .3s; }
    #hero .floor span:nth-child(4) { animation-delay: .45s; }
    #hero .floor span:nth-child(5) { animation-delay: .6s; }
    @keyframes hero-fly {
      0%, 100% { transform: translate(0, 0) rotate(-8deg); }
      50% { transform: translate(40px, -18px) rotate(8deg); }
    }
    @keyframes hero-spin { to { transform: rotate(360deg); } }
    @keyframes hero-groove {
      from { transform: skewX(-4deg); }
      to { transform: skewX(4deg); }
    }
    @keyframes hero-bounce { to { transform: translateY(-10px); } }
    @media (prefers-reduced-motion: reduce) {
      #hero * { animation: none !important; }
    }
  </style>
  <div class="stage">
    <div class="moon"></div>
    <span class="bat b1">🦇</span>
    <span class="bat b2">🦇</span>
    <span class="bat b3">🦇</span>
    <div class="disco">🪩</div>
    <p class="kicker">Funky Halloween House Party</p>
    <h1>${SITE.name}</h1>
    <p class="tagline">${SITE.tagline}</p>
    <a class="cta" href="#signup">Trick or treat yourself →</a>
    <div class="floor">
      <span>🎃</span><span>🧟</span><span>👻</span><span>🧟‍♀️</span><span>🎃</span>
    </div>
  </div>
`);
