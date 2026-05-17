import rawSiteContent from "../content.json";

export type Project = {
  name: string;
  description: string;
  role: string;
  stack: string;
  year: string;
  link?: string;
};

export type SiteContent = {
  profile: {
    name: string;
    role: string;
    location: string;
    positioning: string;
    summary: string;
    email: string;
    github: string;
    linkedin: string;
    resume: string;
  };
  about: string[];
  projects: Project[];
  contact: {
    eyebrow: string;
    availability: string;
  };
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requireString(
  source: Record<string, unknown>,
  key: string,
  path: string,
): string {
  const value = source[key];

  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(
      `Invalid content: ${path}.${key} must be a non-empty string.`,
    );
  }

  return value;
}

function requireEmail(
  source: Record<string, unknown>,
  key: string,
  path: string,
): string {
  const value = requireString(source, key, path);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(value)) {
    throw new Error(`Invalid content: ${path}.${key} must be a valid email address.`);
  }

  return value;
}

function requireWebUrl(
  source: Record<string, unknown>,
  key: string,
  path: string,
  options: { allowHash?: boolean } = {},
): string {
  const value = requireString(source, key, path);

  if (options.allowHash && value === "#") {
    return value;
  }

  try {
    const url = new URL(value);

    if (url.protocol !== "https:" && url.protocol !== "http:") {
      throw new Error();
    }
  } catch {
    throw new Error(
      `Invalid content: ${path}.${key} must be an http(s) URL${options.allowHash ? " or #." : "."}`,
    );
  }

  return value;
}

function requireStringArray(
  source: Record<string, unknown>,
  key: string,
  path: string,
): string[] {
  const value = source[key];

  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    value.some((item) => typeof item !== "string" || item.trim() === "")
  ) {
    throw new Error(
      `Invalid content: ${path}.${key} must be a non-empty string array.`,
    );
  }

  return value;
}

function requireRecord(
  source: Record<string, unknown>,
  key: string,
  path: string,
): Record<string, unknown> {
  const value = source[key];

  if (!isRecord(value)) {
    throw new Error(`Invalid content: ${path}.${key} must be an object.`);
  }

  return value;
}

function parseProject(value: unknown, index: number): Project {
  if (!isRecord(value)) {
    throw new Error(`Invalid content: projects[${index}] must be an object.`);
  }

  const project: Project = {
    name: requireString(value, "name", `projects[${index}]`),
    description: requireString(value, "description", `projects[${index}]`),
    role: requireString(value, "role", `projects[${index}]`),
    stack: requireString(value, "stack", `projects[${index}]`),
    year: requireString(value, "year", `projects[${index}]`),
  };

  if (value.link !== undefined) {
    project.link = requireWebUrl(value, "link", `projects[${index}]`);
  }

  return project;
}

function validateSiteContent(value: unknown): SiteContent {
  if (!isRecord(value)) {
    throw new Error("Invalid content: root must be an object.");
  }

  const profile = requireRecord(value, "profile", "root");
  const contact = requireRecord(value, "contact", "root");
  const projects = value.projects;

  if (!Array.isArray(projects) || projects.length === 0) {
    throw new Error(
      "Invalid content: root.projects must be a non-empty array.",
    );
  }

  return {
    profile: {
      name: requireString(profile, "name", "profile"),
      role: requireString(profile, "role", "profile"),
      location: requireString(profile, "location", "profile"),
      positioning: requireString(profile, "positioning", "profile"),
      summary: requireString(profile, "summary", "profile"),
      email: requireEmail(profile, "email", "profile"),
      github: requireWebUrl(profile, "github", "profile"),
      linkedin: requireWebUrl(profile, "linkedin", "profile"),
      resume: requireWebUrl(profile, "resume", "profile", { allowHash: true }),
    },
    about: requireStringArray(value, "about", "root"),
    projects: projects.map(parseProject),
    contact: {
      eyebrow: requireString(contact, "eyebrow", "contact"),
      availability: requireString(contact, "availability", "contact"),
    },
  };
}

export const siteContent = validateSiteContent(rawSiteContent);
