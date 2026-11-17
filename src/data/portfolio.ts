export const navItems = ["About", "Experience", "Education", "Skills", "Certifications", "Projects", "Contact"] as const;

export const skillGroups = [
  { title: "Programming languages", icon: "<>/", skills: ["Java", "JavaScript", "PHP", "HTML", "SQL"] },
  { title: "Web development", icon: "↗", skills: ["Full-Stack Development", "Bootstrap", "Cascading Style Sheets (CSS)", "Web Design", "Web Development", "REST APIs", "Session Management", "Digital Authentication"] },
  { title: "Tools & databases", icon: "⌘", skills: ["MySQL", "Databases", "Git", "GitHub", "Figma", "Google Workspace", "Amazon Web Services (AWS)"] },
  { title: "Professional & other", icon: "✦", skills: ["Software Development", "Computer Science", "Sales Management", "Data Entry", "Customer Service", "Customer Support", "Real Estate", "Real Estate Listings"] }
];

export const certifications = [
  { title: "Data Analytics with Databricks and Power BI Workshop 2024", organization: "Adastra", issued: "May 2024", image: "/images/certificates/adastra.jpg", skill: "Data analytics" },
  { title: "Oracle Academy Java Foundation", organization: "Oracle", issued: "January 2026", image: "/images/certificates/oracle.jpg", skill: "Java" },
  { title: "AWS Academy Graduate - Cloud Foundations - Training Badge", organization: "AWS Academy", issued: "June 2026", image: "/images/certificates/aws-cloud.jpg", skill: "Cloud foundations" }
];

export const projects = [
  { title: "NovaRoute", type: "University project", description: "An internship discovery platform with RAG, LLM, and recommendation concepts across student and employer workflows.", image: "/images/projects/novaroute.png", stack: ["RAG", "LLM", "Recommendation"] },
  { title: "Assignment Tracker", type: "University project", description: "A CRUD assignment management system with student-facing pages, dashboard views, and Fetch API interactions.", image: "/images/projects/assignment-tracker.png", stack: ["PHP", "MySQL", "Fetch API"] },
  { title: "Library Management System", type: "University project", description: "A role-based library system covering student and admin flows for books, authors, categories, and issuing.", image: "/images/projects/library-system.png", stack: ["PHP", "MySQL", "Bootstrap"] },
  { title: "Morning Star", type: "Client project", description: "A restaurant operations interface with order, menu, report, and management screens.", image: "/images/projects/morning-star.png", stack: ["PHP", "Web development"] }
];
