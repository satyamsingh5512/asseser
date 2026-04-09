export default function Home() {
  return (
    <main className="landing-shell">
      <section className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8">
        <header className="mb-12 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2">
            <span className="pulse-dot" />
            <span className="text-label text-[var(--text-secondary)]">AssessOS Platform</span>
          </div>
          <a href="/login" className="btn btn-ghost">
            Sign in
          </a>
        </header>

        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-[var(--border-subtle)] bg-[var(--bg-overlay)]/60 px-3 py-1 text-mono-sm text-[var(--text-secondary)]">
              Advanced Assessment Infrastructure
            </p>
            <h1 className="text-display max-w-[12ch] text-[clamp(2.4rem,7vw,5rem)]">
              Deliver trusted exams with real-time control.
            </h1>
            <p className="mt-5 max-w-[56ch] text-body text-[var(--text-secondary)]">
              AssessOS combines enterprise authentication, remote proctoring, and high-fidelity analytics to run
              secure testing operations for global organizations.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/register" className="btn btn-primary">
                Launch Workspace
              </a>
              <a href="/admin/dashboard" className="btn btn-ghost">
                Open Dashboard
              </a>
              <a href="http://localhost:8000/docs" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                API Docs
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="card card-accent-blue p-4">
                <p className="text-label text-[var(--text-secondary)]">Exam Uptime</p>
                <p className="mt-1 text-h2">99.95%</p>
                <p className="mt-1 text-body-sm text-[var(--text-secondary)]">Automatic failover and recovery</p>
              </div>
              <div className="card card-accent-green p-4">
                <p className="text-label text-[var(--text-secondary)]">Live Proctoring</p>
                <p className="mt-1 text-h2">24/7</p>
                <p className="mt-1 text-body-sm text-[var(--text-secondary)]">Stream, detect, and flag anomalies</p>
              </div>
              <div className="card card-accent-violet p-4">
                <p className="text-label text-[var(--text-secondary)]">Tenants</p>
                <p className="mt-1 text-h2">Multi-Org</p>
                <p className="mt-1 text-body-sm text-[var(--text-secondary)]">Branding and domain aware routing</p>
              </div>
            </div>
          </div>

          <aside className="float-rise card noise border-[var(--border-strong)] bg-[var(--bg-surface)]/80 p-5 backdrop-blur-sm sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-h2">Control Center</h2>
              <span className="pill pill-success">
                <span className="pulse-dot" />
                Operational
              </span>
            </div>
            <div className="space-y-3">
              <div className="rounded-[var(--r-md)] border border-[var(--border-subtle)] bg-[var(--bg-base)]/70 p-3">
                <p className="text-label text-[var(--text-secondary)]">Authentication</p>
                <p className="mt-1 text-body-sm">MFA-ready sessions with refresh token rotation and route guards.</p>
              </div>
              <div className="rounded-[var(--r-md)] border border-[var(--border-subtle)] bg-[var(--bg-base)]/70 p-3">
                <p className="text-label text-[var(--text-secondary)]">Question Ops</p>
                <p className="mt-1 text-body-sm">Import, moderate, and version questions with admin workflows.</p>
              </div>
              <div className="rounded-[var(--r-md)] border border-[var(--border-subtle)] bg-[var(--bg-base)]/70 p-3">
                <p className="text-label text-[var(--text-secondary)]">Exam Pipeline</p>
                <p className="mt-1 text-body-sm">Tokenized attempts, timed sections, and post-exam results flow.</p>
              </div>
            </div>
            <div className="mt-5 rounded-[var(--r-md)] border border-[var(--border-subtle)] bg-[var(--bg-overlay)]/70 p-4">
              <p className="text-mono-sm text-[var(--text-secondary)]">Health Snapshot</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="pill pill-success">Core API online</span>
                <span className="pill pill-violet">Proctor worker active</span>
                <span className="pill pill-default">Queue latency 42ms</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
