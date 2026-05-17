import { siteContent } from "./content";

const primaryLinks = [
  { label: "Email", href: `mailto:${siteContent.profile.email}` },
  { label: "GitHub", href: siteContent.profile.github },
  { label: "LinkedIn", href: siteContent.profile.linkedin },
  { label: "Resume", href: siteContent.profile.resume },
];

function Section({
  id,
  eyebrow,
  children,
}: {
  id: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-heading`}>
      <h2 className="eyebrow" id={`${id}-heading`}>
        {eyebrow}
      </h2>
      {children}
    </section>
  );
}

function LinkList({ compact = false }: { compact?: boolean }) {
  return (
    <nav
      className={compact ? "links links--compact" : "links"}
      aria-label="Primary links"
    >
      {primaryLinks.map((link) => (
        <a key={link.label} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="hero">
        <div className="identity">
          <p className="meta">
            {siteContent.profile.role} <span aria-hidden="true">/</span>{" "}
            {siteContent.profile.location}
          </p>
          <h1>{siteContent.profile.name}</h1>
        </div>
        <div className="hero-copy">
          <p className="positioning">{siteContent.profile.positioning}</p>
          <p>{siteContent.profile.summary}</p>
        </div>
        <LinkList />
      </header>

      <main>
        <Section id="about" eyebrow="About">
          <div className="text-stack">
            {siteContent.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="work" eyebrow="Selected Work">
          <div className="project-list">
            {siteContent.projects.map((project) => (
              <article
                className="project"
                key={project.name + project.description}
              >
                <div className="project-main">
                  <h3>
                    {project.link ? (
                      <a href={project.link}>{project.name}</a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p>{project.description}</p>
                </div>
                <dl
                  className="project-details"
                  aria-label={`${project.name} details`}
                >
                  <div>
                    <dt>Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div>
                    <dt>Stack</dt>
                    <dd>{project.stack}</dd>
                  </div>
                  <div>
                    <dt>Year</dt>
                    <dd>{project.year}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div>
          <p className="eyebrow">{siteContent.contact.eyebrow}</p>
          <p>{siteContent.contact.availability}</p>
        </div>
        <a
          className="footer-email"
          href={`mailto:${siteContent.profile.email}`}
        >
          {siteContent.profile.email}
        </a>
      </footer>
    </div>
  );
}

export default App;
