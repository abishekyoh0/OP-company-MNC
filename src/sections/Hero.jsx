import React, { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiPlay, FiTerminal, FiShield, FiCpu } from 'react-icons/fi';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { gsap } from '../animations/gsap';
import { useTheme } from '../theme/ThemeContext';
import { navigateTo } from '../utils/navigation';

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  // Track mouse coordinates for interactive background grid spotlight
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    // 1. Canvas constellations background animation loop
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const particles = [];
    const particleCount = 70;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (canvas.width || 800),
        y: Math.random() * (canvas.height || 600),
        radius: Math.random() * 1.5 + 0.6,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      });
    }

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDarkTheme = document.documentElement.classList.contains('dark');
      const themeColor = isDarkTheme
        ? 'rgba(45, 212, 191,' // Teal 400
        : 'rgba(13, 148, 136,'; // Teal 600

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = themeColor + ' 0.25)';
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = themeColor + ` ${(1 - dist / 110) * 0.12})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // 2. GSAP revealing animations context
    const gCtx = gsap.context(() => {
      // Fade in the back glow
      gsap.fromTo(
        '.hero-glow',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
      );

      // Slide and reveal titles, buttons, tags
      gsap.fromTo(
        '.hero-reveal',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      // Zoom in and float the mock dashboard graphic
      gsap.fromTo(
        '.hero-graphic',
        { scale: 0.95, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, delay: 0.4, ease: 'power2.out' }
      );

      // Animate dashboard progress bars when graphic displays
      gsap.fromTo(
        '.hero-progress-fill-1',
        { width: '0%' },
        { width: '74%', duration: 1.8, delay: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.hero-progress-fill-2',
        { width: '0%' },
        { width: '100%', duration: 1.8, delay: 1.0, ease: 'power3.out' }
      );

      // Create continuous subtle floating animations for particles
      gsap.to('.hero-particle-1', {
        y: -15,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
      gsap.to('.hero-particle-2', {
        y: 15,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
    }, containerRef);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      gCtx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-16 pb-20 px-6 overflow-hidden cursor-default group/hero isolate bg-bg-base"
    >
    

      {/* Interactive Grid Spotlight Background Mask (Atlassian style) */}
      <div 
        className={`absolute inset-0 -z-30 pointer-events-none transition-opacity duration-700 ${isHovered ? 'opacity-100' : isDark ? 'opacity-45' : 'opacity-60'}`}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(20, 184, 166, 0.3) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(20, 184, 166, 0.3) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '3.5rem 3.5rem',
          backgroundPosition: 'center',
          maskImage: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`
        }}
      />

      {/* Ambient glowing spotlight follow background */}
      <div 
        className={`absolute inset-0 -z-20 pointer-events-none transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(20, 184, 166, 0.24), rgba(16, 185, 129, 0.10) 40%, transparent 80%)`,
        }}
      />

      <div className=" mx-auto w-full flex flex-col items-center text-center gap-6 mt-10">
        {/* Release tag */}
        <div className="hero-reveal select-none">
          <Badge variant="secondary" className="px-4 py-1.5 text-xs">
            Platform Release v2.4.0 • Sovereign Computing Nodes Active
          </Badge>
        </div>

        {/* Dynamic Title */}
        <h1 className="hero-reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-text-main tracking-tight leading-[1.05] max-w-4xl m-0">
          The Sovereign Cloud Platform for <span className="text-gradient">Modern Enterprises</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-reveal text-base sm:text-lg md:text-xl text-text-muted font-sans font-normal leading-relaxed max-w-2xl mt-2 m-0">
          Deploy, monitor, and encrypt containerized workloads across public and private cloud gateways with sub-millisecond edge database sync.
        </p>

        {/* Action CTAs */}
        <div className="hero-reveal flex flex-wrap gap-4 items-center justify-center mt-4">
          <Button 
            variant="gradient" 
            size="lg" 
            icon={<FiArrowRight />} 
            iconPosition="right"
            onClick={() => navigateTo('auth')}
          >
            Launch Cloud Sandbox
          </Button>
          <Button 
            size="lg" 
            icon={<FiPlay />}
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Consult Infrastructure Leads
          </Button>
        </div>

        {/* Dashboard Preview Graphic */}
        <div className="hero-graphic relative w-full max-w-5xl mt-14 border border-border-main/50 rounded-2xl bg-bg-surface/60 glassmorphism p-3 md:p-4 shadow-2xl overflow-hidden">
          {/* Header Controls Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-border-main/30 mb-4 px-2 select-none">
            <div className="flex gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-error/80 inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-warning/80 inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-success/80 inline-block" />
            </div>
            <div className="flex items-center gap-1.5 text-xs text-text-muted/60 font-mono">
              <FiTerminal /> secure-console.aetheris.sh
            </div>
            <div className="w-14" />
          </div>

          {/* Inner Grid Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {/* Console Left Pane */}
            <Card glass={true} hoverEffect={false} className="p-4 md:col-span-2 border-border-main/30">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold font-heading uppercase text-text-muted">Edge Telemetry Pipelines</span>
                <span className="text-xs text-success font-semibold font-mono animate-pulse">● Ingress Online</span>
              </div>
              <div className="bg-bg-base/60 dark:bg-black/40 border border-border-main/30 rounded-lg p-3.5 font-mono text-[11px] md:text-xs text-text-main/90 h-44 overflow-y-auto leading-relaxed shadow-inner">
                <span className="text-text-muted">[14:44:01]</span> INIT: Establishing TLS handshake with Edge-US-East<br />
                <span className="text-text-muted">[14:44:02]</span> AUTH: Zero-Trust cryptographic key verified (Level-3)<br />
                <span className="text-text-muted">[14:44:03]</span> SYNC: Ledger synchronization successful (0.32ms latency)<br />
                <span className="text-text-muted">[14:44:05]</span> STAT: Ingesting 245,000 metrics/sec across 18 active nodes<br />
                <span className="text-text-muted">[14:44:07]</span> DEPLOY: Spawning replica container at edge-node-95a<br />
                <span className="text-text-muted">[14:44:08]</span> AUDIT: System audit compliant. SOC2 flags green
              </div>
            </Card>

            {/* Metrics Right Pane */}
            <div className="flex flex-col gap-4">
              <Card glass={true} hoverEffect={false} className="p-4 border-border-main/30 grow flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-text-muted font-heading uppercase">
                  <span>Network Traffic</span>
                  <FiCpu className="text-secondary" />
                </div>
                <div className="my-2">
                  <span className="text-2xl md:text-3xl font-extrabold font-heading text-gradient">450MB/s</span>
                  <p className="text-[10px] text-text-muted/70 mt-1">Autonomous balancing active</p>
                </div>
                <div className="w-full bg-border-main/20 h-1.5 rounded-full overflow-hidden">
                  <div className="hero-progress-fill-1 bg-gradient-premium h-full w-[74%]" style={{ width: '0%' }} />
                </div>
              </Card>

              <Card glass={true} hoverEffect={false} className="p-4 border-border-main/30 grow flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-text-muted font-heading uppercase">
                  <span>Edge Enclaves</span>
                  <FiShield className="text-accent" />
                </div>
                <div className="my-2">
                  <span className="text-2xl md:text-3xl font-extrabold font-heading text-text-main">18,402</span>
                  <p className="text-[10px] text-text-muted/70 mt-1">End-to-end encrypted tunnels</p>
                </div>
                <div className="w-full bg-border-main/20 h-1.5 rounded-full overflow-hidden">
                  <div className="hero-progress-fill-2 bg-gradient-to-r from-success to-emerald-400 h-full w-[100%] animate-pulse" style={{ width: '0%' }} />
                </div>
              </Card>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
