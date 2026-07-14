import React, { useState, useEffect } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { navigateTo } from '../utils/navigation';
import { FiSun, FiMoon, FiArrowLeft, FiMail, FiLock, FiUser, FiTerminal, FiCpu, FiShield, FiCheckCircle, FiActivity } from 'react-icons/fi';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';
import { gsap } from '../animations/gsap';

const Auth = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  // High-tech registration simulation states
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [success, setSuccess] = useState(false);

  const steps = [
    'Generating secure cryptographic SSH key pairs...',
    'Synchronizing decentralized ledger nodes across US-East gateway...',
    'Injecting $500 developer cloud credits into account cluster...',
    'Authorizing sandbox credentials for container deployment...'
  ];

  useEffect(() => {
    // Reveal animation on mount
    gsap.fromTo(
      '.auth-reveal',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );
  }, [isSignUp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (isSignUp && !name)) return;
    
    // Trigger high-tech loading simulation
    setLoading(true);
    setLoadingStep(0);
  };

  useEffect(() => {
    if (!loading) return;

    if (loadingStep < steps.length) {
      const timer = setTimeout(() => {
        setLoadingStep(prev => prev + 1);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
      setSuccess(true);
      
      // Auto redirect to homepage after success
      const redirectTimer = setTimeout(() => {
        navigateTo('home');
      }, 2500);
      return () => clearTimeout(redirectTimer);
    }
  }, [loading, loadingStep]);

  return (
    <div className="relative min-h-screen bg-bg-base text-text-main flex flex-col overflow-x-hidden selection:bg-secondary/20 selection:text-secondary">
      {/* Header Bar */}
      <header className="w-full py-5 px-6 border-b border-border-main/40 bg-bg-base/80 backdrop-blur-lg z-30 sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 group cursor-pointer font-heading font-extrabold text-lg md:text-xl text-gradient tracking-tight"
          >
            <FiArrowLeft className="w-4 h-4 text-secondary group-hover:-translate-x-1 transition-transform" />
            <span>AETHERIS</span>
          </button>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-border-main text-text-main hover:bg-bg-surface-hover hover:text-secondary transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
            <Button variant="outline" size="sm" onClick={() => navigateTo('home')}>
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Main Grid split */}
      <main className="grow flex items-center justify-center p-6 md:p-12 relative">
        {/* Glow core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[35rem] bg-gradient-glow opacity-[0.07] blur-3xl -z-10 rounded-full" />

        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch select-none">
          {/* Left Column (High-tech visual pane) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-8 rounded-2xl bg-bg-surface/40 border border-border-main/40 glassmorphism relative overflow-hidden text-left shadow-xl">
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-premium opacity-[0.03] blur-3xl -z-10 rounded-full" />
            
            <div className="flex flex-col gap-6">
              <Badge variant="secondary" className="px-3.5 py-1 text-[10px] w-fit">
                Developer Sandbox Access
              </Badge>
              
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-extrabold font-heading text-text-main">
                  Claim $500 Credit
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-sans">
                  Deploy containers, run multi-cloud nodes, and verify latency speeds with zero operational costs.
                </p>
              </div>

              {/* Mock active nodes list */}
              <div className="flex flex-col gap-3 font-mono text-[10px] text-text-muted bg-bg-base/50 dark:bg-black/30 border border-border-main/30 rounded-lg p-4 leading-relaxed">
                <div className="flex items-center justify-between border-b border-border-main/20 pb-2 mb-1">
                  <span className="font-heading font-extrabold text-text-main">Edge Nodes Status</span>
                  <span className="text-success animate-pulse">● Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>node-us-east-1a:</span>
                  <span className="text-text-main font-semibold">0.32ms (Online)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>node-eu-west-2b:</span>
                  <span className="text-text-main font-semibold">0.58ms (Online)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>node-in-south-1c:</span>
                  <span className="text-text-main font-semibold">0.44ms (Online)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border-main/20 pt-4 flex flex-col gap-2 font-mono text-[10px] text-text-muted">
              <div className="flex items-center gap-1.5 text-text-main font-semibold">
                <FiShield className="text-secondary w-3.5 h-3.5" />
                <span>Zero-Trust Infrastructure Layer</span>
              </div>
              <p className="leading-relaxed">All sandbox access keys are generated client-side and fully encrypted.</p>
            </div>
          </div>

          {/* Right Column (Form pane) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Card glass={true} hoverEffect={false} className="p-8 md:p-10 border-border-main/50 shadow-2xl relative">
              {loading ? (
                /* High-tech Loading Simulator Screen */
                <div className="flex flex-col justify-center items-center text-center py-10 gap-6 min-h-[360px]">
                  <div className="w-14 h-14 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary animate-pulse">
                    <FiCpu className="w-7 h-7" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-extrabold font-heading text-text-main">
                      Initializing Cloud Sandbox
                    </h3>
                    <p className="text-xs text-text-muted">
                      Configuring secure developer credentials...
                    </p>
                  </div>

                  {/* Terminal loading steps wrapper */}
                  <div className="w-full bg-bg-base/60 dark:bg-black/40 border border-border-main/30 rounded-lg p-4 font-mono text-[10px] md:text-xs text-left text-text-main/80 flex flex-col gap-2 leading-relaxed max-w-md shadow-inner mt-2">
                    {steps.slice(0, loadingStep).map((step, idx) => (
                      <div key={idx} className="flex gap-2 items-start text-success">
                        <span>✓</span>
                        <span>{step}</span>
                      </div>
                    ))}
                    {loadingStep < steps.length && (
                      <div className="flex gap-2 items-start text-secondary animate-pulse">
                        <span className="animate-spin">◷</span>
                        <span>{steps[loadingStep]}</span>
                      </div>
                    )}
                  </div>
                </div>
              ) : success ? (
                /* Success Redirect Screen */
                <div className="flex flex-col justify-center items-center text-center py-10 gap-6 min-h-[360px] animate-bounce-short">
                  <div className="w-16 h-16 rounded-full bg-success/15 border border-success/30 flex items-center justify-center text-success shadow-glow">
                    <FiCheckCircle className="w-9 h-9" />
                  </div>
                  
                  <div className="flex flex-col gap-2 max-w-sm">
                    <h3 className="text-2xl font-extrabold font-heading text-text-main">
                      Secure Node Authorized!
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mt-1">
                      Developer sandbox activated with **$500 cloud credits**. Redirecting to active console hub...
                    </p>
                  </div>
                </div>
              ) : (
                /* Standard Sign In / Sign Up Form Panel */
                <div className="flex flex-col gap-6 text-left">
                  <div className="auth-reveal flex flex-col gap-2">
                    <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-text-main tracking-tight leading-tight m-0">
                      Secure Your Global Clusters Right Now
                    </h2>
                    <p className="text-xs text-text-muted leading-relaxed font-sans mt-1">
                      Sign up to our developer sandbox and claim up to $500 in platform cloud credit. Setup containers, verify nodes, and inspect edge ledger speeds in under five minutes.
                    </p>
                  </div>

                  {/* Toggle tabs */}
                  <div className="auth-reveal flex gap-2 border-b border-border-main/30 pb-4">
                    <button
                      onClick={() => setIsSignUp(true)}
                      className={`pb-2 text-sm font-semibold font-heading transition-colors border-b-2 cursor-pointer ${
                        isSignUp 
                          ? 'border-secondary text-secondary' 
                          : 'border-transparent text-text-muted hover:text-text-main'
                      }`}
                    >
                      Create Developer Account
                    </button>
                    <button
                      onClick={() => setIsSignUp(false)}
                      className={`pb-2 text-sm font-semibold font-heading transition-colors border-b-2 cursor-pointer ${
                        !isSignUp 
                          ? 'border-secondary text-secondary' 
                          : 'border-transparent text-text-muted hover:text-text-main'
                      }`}
                    >
                      Sign In
                    </button>
                  </div>

                  {/* Form fields */}
                  <form onSubmit={handleSubmit} className="auth-reveal flex flex-col gap-4">
                    {isSignUp && (
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold font-heading text-text-main">Full Name</label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted/60">
                            <FiUser className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-bg-surface border border-border-main rounded-lg py-2.5 pl-10 pr-4 text-sm font-sans text-text-main focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold font-heading text-text-main">Corporate Email</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted/60">
                          <FiMail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-bg-surface border border-border-main rounded-lg py-2.5 pl-10 pr-4 text-sm font-sans text-text-main focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold font-heading text-text-main">Password</label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted/60">
                          <FiLock className="w-4 h-4" />
                        </span>
                        <input
                          type="password"
                          required
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full bg-bg-surface border border-border-main rounded-lg py-2.5 pl-10 pr-4 text-sm font-sans text-text-main focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                        />
                      </div>
                    </div>

                    {isSignUp && (
                      <div className="flex items-start gap-2.5 mt-1 select-none">
                        <input 
                          type="checkbox" 
                          required 
                          id="terms" 
                          className="mt-1 cursor-pointer accent-secondary w-3.5 h-3.5" 
                        />
                        <label htmlFor="terms" className="text-[11px] text-text-muted leading-relaxed cursor-pointer font-sans">
                          I agree to sandbox server terms and claim up to $500 developer credit.
                        </label>
                      </div>
                    )}

                    <Button variant="gradient" size="md" className="w-full mt-4" type="submit">
                      {isSignUp ? 'Activate Sandbox & Claim $500' : 'Sign In to Console'}
                    </Button>
                  </form>
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
