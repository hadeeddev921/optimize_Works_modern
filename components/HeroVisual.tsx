export function HeroVisual() {
  // Kept as raw SVG for fidelity with original HTML (avoids JSX attribute rewrites).
  return (
    <div
      className="hero-visual"
      aria-hidden="true"
      dangerouslySetInnerHTML={{
        __html: `
<div class="tech-card">
  <div class="tc-header">
    <span class="tc-dot tc-dot-r"></span><span class="tc-dot tc-dot-y"></span><span class="tc-dot tc-dot-g"></span>
    <span class="tc-title">AI Workflow Engine</span>
  </div>
  <svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
    <defs>
      <filter id="glow-s" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="glow-m" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <linearGradient id="lg-teal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4db8e0"/><stop offset="100%" stop-color="#2a6aa0"/></linearGradient>
      <linearGradient id="lg-blue" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3060c0"/><stop offset="100%" stop-color="#1a3580"/></linearGradient>
      <linearGradient id="lg-green" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#28c880"/><stop offset="100%" stop-color="#1a7050"/></linearGradient>
      <linearGradient id="lg-purple" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#9060e0"/><stop offset="100%" stop-color="#5030a0"/></linearGradient>
      <radialGradient id="rg-center" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#4db8e0" stop-opacity="0.15"/><stop offset="100%" stop-color="#4db8e0" stop-opacity="0"/></radialGradient>
      <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 20h10M30 20h10M20 0v10M20 30v10" stroke="rgba(77,184,224,0.12)" stroke-width="0.8" fill="none"/>
        <circle cx="20" cy="20" r="1.5" fill="rgba(77,184,224,0.18)"/>
        <circle cx="0" cy="0" r="1" fill="rgba(77,184,224,0.1)"/><circle cx="40" cy="0" r="1" fill="rgba(77,184,224,0.1)"/>
        <circle cx="0" cy="40" r="1" fill="rgba(77,184,224,0.1)"/><circle cx="40" cy="40" r="1" fill="rgba(77,184,224,0.1)"/>
      </pattern>
      <style>
        .flow-line{stroke-dasharray:6 4;animation:dash 2s linear infinite}
        .flow-line-slow{stroke-dasharray:6 4;animation:dash 3.5s linear infinite}
        .flow-line-rev{stroke-dasharray:6 4;animation:dash-rev 2.5s linear infinite}
        @keyframes dash{to{stroke-dashoffset:-20}}
        @keyframes dash-rev{to{stroke-dashoffset:20}}
        .node-pulse{animation:node-blink 2.4s ease-in-out infinite}
        .node-pulse-2{animation:node-blink 2.4s ease-in-out infinite;animation-delay:.8s}
        .node-pulse-3{animation:node-blink 2.4s ease-in-out infinite;animation-delay:1.6s}
        @keyframes node-blink{0%,100%{opacity:1}50%{opacity:.4}}
        .bar-anim{animation:bar-grow 3s ease-out infinite alternate}
        @keyframes bar-grow{from{transform:scaleY(0.4)}to{transform:scaleY(1)}}
        .scan-line{animation:scan 4s linear infinite}
        @keyframes scan{0%{transform:translateY(0)}100%{transform:translateY(300px)}}
      </style>
    </defs>
    <rect width="460" height="340" fill="url(#circuit)" rx="8"/>
    <ellipse cx="230" cy="170" rx="200" ry="150" fill="url(#rg-center)"/>
    <rect x="0" y="-2" width="460" height="2" fill="rgba(77,184,224,0.06)" class="scan-line"/>
    <circle cx="230" cy="155" r="52" fill="none" stroke="rgba(77,184,224,0.12)" stroke-width="12" filter="url(#glow-m)"/>
    <circle cx="230" cy="155" r="44" fill="none" stroke="rgba(77,184,224,0.2)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <circle cx="230" cy="155" r="36" fill="rgba(0,20,60,0.9)" stroke="rgba(77,184,224,0.4)" stroke-width="1.5"/>
    <circle cx="230" cy="155" r="28" fill="url(#lg-blue)" filter="url(#glow-s)"/>
    <g transform="translate(218,143)">
      <rect x="0" y="2" width="24" height="20" rx="3" fill="none" stroke="#4db8e0" stroke-width="1.4"/>
      <line x1="5" y1="2" x2="5" y2="0" stroke="#4db8e0" stroke-width="1.2"/><line x1="12" y1="2" x2="12" y2="0" stroke="#4db8e0" stroke-width="1.2"/><line x1="19" y1="2" x2="19" y2="0" stroke="#4db8e0" stroke-width="1.2"/>
      <line x1="5" y1="22" x2="5" y2="24" stroke="#4db8e0" stroke-width="1.2"/><line x1="12" y1="22" x2="12" y2="24" stroke="#4db8e0" stroke-width="1.2"/><line x1="19" y1="22" x2="19" y2="24" stroke="#4db8e0" stroke-width="1.2"/>
      <line x1="0" y1="8" x2="-2" y2="8" stroke="#4db8e0" stroke-width="1.2"/><line x1="0" y1="14" x2="-2" y2="14" stroke="#4db8e0" stroke-width="1.2"/>
      <line x1="24" y1="8" x2="26" y2="8" stroke="#4db8e0" stroke-width="1.2"/><line x1="24" y1="14" x2="26" y2="14" stroke="#4db8e0" stroke-width="1.2"/>
      <line x1="8" y1="6" x2="16" y2="6" stroke="#4db8e0" stroke-width="0.9" opacity=".7"/><line x1="8" y1="10" x2="16" y2="10" stroke="#4db8e0" stroke-width="0.9" opacity=".7"/><line x1="8" y1="14" x2="16" y2="14" stroke="#4db8e0" stroke-width="0.9" opacity=".7"/>
      <line x1="8" y1="6" x2="8" y2="14" stroke="#4db8e0" stroke-width="0.9" opacity=".7"/><line x1="12" y1="6" x2="12" y2="14" stroke="#4db8e0" stroke-width="0.9" opacity=".7"/><line x1="16" y1="6" x2="16" y2="14" stroke="#4db8e0" stroke-width="0.9" opacity=".7"/>
    </g>
    <text x="230" y="199" text-anchor="middle" font-family="Outfit,sans-serif" font-size="8.5" font-weight="700" fill="#4db8e0" letter-spacing="1.5" opacity=".8">AI ENGINE</text>
    <g transform="translate(72,62)"><circle r="26" fill="rgba(0,20,60,0.95)" stroke="rgba(48,96,192,0.5)" stroke-width="1.2" cx="0" cy="0"/><circle r="20" fill="url(#lg-blue)" cx="0" cy="0" filter="url(#glow-s)" class="node-pulse"/><g transform="translate(-8,-9)"><rect x="0" y="4" width="16" height="11" rx="1.5" fill="none" stroke="white" stroke-width="1.3" opacity=".9"/><path d="M0 8l8 5 8-5" stroke="white" stroke-width="1.3" fill="none" opacity=".9"/></g><text x="0" y="19" text-anchor="middle" font-family="Outfit,sans-serif" font-size="6.5" font-weight="700" fill="rgba(255,255,255,0.6)" letter-spacing="0.5">INGEST</text></g>
    <g transform="translate(388,62)"><circle r="26" fill="rgba(0,20,60,0.95)" stroke="rgba(40,200,128,0.45)" stroke-width="1.2" cx="0" cy="0"/><circle r="20" fill="url(#lg-green)" cx="0" cy="0" filter="url(#glow-s)" class="node-pulse-2"/><g transform="translate(-9,-9)"><circle cx="9" cy="9" r="4" fill="none" stroke="white" stroke-width="1.3" opacity=".9"/><circle cx="9" cy="9" r="1.5" fill="white" opacity=".7"/><line x1="9" y1="1" x2="9" y2="4" stroke="white" stroke-width="1.5" opacity=".9"/><line x1="9" y1="14" x2="9" y2="17" stroke="white" stroke-width="1.5" opacity=".9"/><line x1="1" y1="9" x2="4" y2="9" stroke="white" stroke-width="1.5" opacity=".9"/><line x1="14" y1="9" x2="17" y2="9" stroke="white" stroke-width="1.5" opacity=".9"/></g><text x="0" y="19" text-anchor="middle" font-family="Outfit,sans-serif" font-size="6.5" font-weight="700" fill="rgba(255,255,255,0.6)" letter-spacing="0.5">PROCESS</text></g>
    <g transform="translate(72,268)"><circle r="26" fill="rgba(0,20,60,0.95)" stroke="rgba(144,96,224,0.45)" stroke-width="1.2" cx="0" cy="0"/><circle r="20" fill="url(#lg-purple)" cx="0" cy="0" filter="url(#glow-s)" class="node-pulse-3"/><g transform="translate(-9,-7)"><rect x="0" y="0" width="7" height="5" rx="1" fill="none" stroke="white" stroke-width="1.2" opacity=".9"/><rect x="11" y="0" width="7" height="5" rx="1" fill="none" stroke="white" stroke-width="1.2" opacity=".9"/><rect x="5" y="9" width="8" height="5" rx="1" fill="none" stroke="white" stroke-width="1.2" opacity=".9"/><path d="M3.5 5v2h6.5M14.5 5v2h-5.5M9 7v2" stroke="white" stroke-width="1.1" fill="none" opacity=".8"/></g><text x="0" y="19" text-anchor="middle" font-family="Outfit,sans-serif" font-size="6.5" font-weight="700" fill="rgba(255,255,255,0.6)" letter-spacing="0.5">WORKFLOW</text></g>
    <g transform="translate(388,268)"><circle r="26" fill="rgba(0,20,60,0.95)" stroke="rgba(77,184,224,0.45)" stroke-width="1.2" cx="0" cy="0"/><circle r="20" fill="url(#lg-teal)" cx="0" cy="0" filter="url(#glow-s)" class="node-pulse"/><g transform="translate(-9,-8)"><rect x="0" y="0" width="18" height="14" rx="1.5" fill="none" stroke="white" stroke-width="1.2" opacity=".8"/><rect x="2" y="8" width="3" height="4" rx=".5" fill="white" opacity=".7" class="bar-anim" style="transform-origin:2px 12px"/><rect x="7" y="5" width="3" height="7" rx=".5" fill="white" opacity=".7" class="bar-anim" style="transform-origin:7px 12px;animation-delay:.3s"/><rect x="12" y="2" width="3" height="10" rx=".5" fill="white" opacity=".7" class="bar-anim" style="transform-origin:12px 12px;animation-delay:.6s"/></g><text x="0" y="19" text-anchor="middle" font-family="Outfit,sans-serif" font-size="6.5" font-weight="700" fill="rgba(255,255,255,0.6)" letter-spacing="0.5">OUTPUT</text></g>
    <path d="M96 74 C140 74, 175 120, 198 138" fill="none" stroke="rgba(48,96,192,0.35)" stroke-width="1.5" class="flow-line"/>
    <path d="M262 138 C290 120, 330 74, 364 74" fill="none" stroke="rgba(40,200,128,0.35)" stroke-width="1.5" class="flow-line-slow"/>
    <path d="M96 256 C140 256, 175 200, 198 172" fill="none" stroke="rgba(144,96,224,0.35)" stroke-width="1.5" class="flow-line-rev"/>
    <path d="M262 172 C290 200, 330 256, 364 256" fill="none" stroke="rgba(77,184,224,0.35)" stroke-width="1.5" class="flow-line"/>
    <circle r="3.5" fill="#4db8e0" filter="url(#glow-s)"><animateMotion dur="2.2s" repeatCount="indefinite" begin="0s"><mpath href="#path-tl"/></animateMotion><animate attributeName="opacity" values="0;1;1;0" dur="2.2s" repeatCount="indefinite"/></circle>
    <path id="path-tl" d="M96 74 C140 74, 175 120, 198 138" fill="none"/>
    <circle r="3.5" fill="#28c880" filter="url(#glow-s)"><animateMotion dur="2.8s" repeatCount="indefinite" begin="0.6s"><mpath href="#path-tr"/></animateMotion><animate attributeName="opacity" values="0;1;1;0" dur="2.8s" repeatCount="indefinite" begin="0.6s"/></circle>
    <path id="path-tr" d="M262 138 C290 120, 330 74, 364 74" fill="none"/>
    <circle r="3.5" fill="#9060e0" filter="url(#glow-s)"><animateMotion dur="2.5s" repeatCount="indefinite" begin="1s"><mpath href="#path-bl"/></animateMotion><animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="1s"/></circle>
    <path id="path-bl" d="M96 256 C140 256, 175 200, 198 172" fill="none"/>
    <circle r="3.5" fill="#4db8e0" filter="url(#glow-s)"><animateMotion dur="2s" repeatCount="indefinite" begin="1.4s"><mpath href="#path-br"/></animateMotion><animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin="1.4s"/></circle>
    <path id="path-br" d="M262 172 C290 200, 330 256, 364 256" fill="none"/>
    <g transform="translate(185,22)"><rect width="90" height="26" rx="13" fill="rgba(0,20,60,0.9)" stroke="rgba(77,184,224,0.3)" stroke-width="1"/><circle cx="13" cy="13" r="5" fill="rgba(40,200,128,0.2)" stroke="#28c880" stroke-width="1"/><circle cx="13" cy="13" r="2" fill="#28c880" class="node-pulse-2"/><text x="23" y="17" font-family="Outfit,sans-serif" font-size="8" font-weight="700" fill="#28c880">SLA: 98.4%</text></g>
    <g transform="translate(165,298)"><rect width="130" height="26" rx="13" fill="rgba(0,20,60,0.9)" stroke="rgba(77,184,224,0.3)" stroke-width="1"/><circle cx="13" cy="13" r="5" fill="rgba(77,184,224,0.2)" stroke="#4db8e0" stroke-width="1"/><circle cx="13" cy="13" r="2" fill="#4db8e0" class="node-pulse"/><text x="23" y="17" font-family="Outfit,sans-serif" font-size="8" font-weight="700" fill="#4db8e0">Cost-to-Serve &#8595; 34%</text></g>
    <g transform="translate(8,138)"><rect width="50" height="36" rx="8" fill="rgba(0,20,60,0.9)" stroke="rgba(144,96,224,0.3)" stroke-width="1"/><text x="25" y="13" text-anchor="middle" font-family="Outfit,sans-serif" font-size="7" fill="rgba(255,255,255,0.45)">TASKS</text><text x="25" y="28" text-anchor="middle" font-family="Outfit,sans-serif" font-size="13" font-weight="800" fill="#9060e0">847</text></g>
    <g transform="translate(402,138)"><rect width="56" height="36" rx="8" fill="rgba(0,20,60,0.9)" stroke="rgba(40,200,128,0.3)" stroke-width="1"/><text x="28" y="13" text-anchor="middle" font-family="Outfit,sans-serif" font-size="7" fill="rgba(255,255,255,0.45)">EFFIC.</text><text x="28" y="28" text-anchor="middle" font-family="Outfit,sans-serif" font-size="13" font-weight="800" fill="#28c880">+41%</text></g>
    <circle cx="155" cy="95" r="1.5" fill="#4db8e0" opacity=".5" class="node-pulse"/>
    <circle cx="305" cy="95" r="1.5" fill="#4db8e0" opacity=".4" class="node-pulse-2"/>
    <circle cx="155" cy="215" r="1.5" fill="#4db8e0" opacity=".5" class="node-pulse-3"/>
    <circle cx="305" cy="215" r="1.5" fill="#4db8e0" opacity=".4" class="node-pulse"/>
  </svg>
</div>
        `,
      }}
    />
  );
}

