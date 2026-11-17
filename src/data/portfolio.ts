export const navItems = ["About", "Experience", "Education", "Skills", "Certifications", "Projects", "Contact"] as const;

export const skillGroups = [
  { title: "Programming", icon: "<>/", skills: ["Python", "Java", "PHP", "JavaScript", "SQL"] },
  { title: "AI & machine learning", icon: "✦", skills: ["LLM Integration", "RAG", "Semantic Search", "Embeddings", "KNN", "SVM"] },
  { title: "Computer vision", icon: "◉", skills: ["YOLOv8", "OpenCV", "ByteTrack", "Object Detection", "Object Tracking"] },
  { title: "Web & backend", icon: "↗", skills: ["HTML5", "CSS3", "Bootstrap", "Next.js", "Responsive Design", "FastAPI", "REST APIs", "Google Apps Script"] },
  { title: "Databases & tools", icon: "⌘", skills: ["MySQL", "Google Sheets", "Database Design", "Git", "GitHub", "VS Code", "Figma", "Power BI"] },
  { title: "Professional", icon: "♡", skills: ["Full-Stack Development", "Software Development", "Computer Science", "Customer Service", "Customer Support", "Real Estate"] }
];

export const certifications = [
  { title: "Data Analytics with Databricks and Power BI Workshop 2024", organization: "Adastra", issued: "May 2024", image: "/images/certificates/adastra.jpg", skill: "Data analytics" },
  { title: "Oracle Academy Java Foundation", organization: "Oracle", issued: "January 2026", image: "/images/certificates/oracle.jpg", skill: "Java" },
  { title: "AWS Academy Graduate - Cloud Foundations - Training Badge", organization: "AWS Academy", issued: "June 2026", image: "/images/certificates/aws-cloud.jpg", skill: "Cloud foundations" },
  { title: "Certificate of Appreciation - NextGen Scholarship Programme", organization: "Global Unichoice International", issued: "November 2026", image: "/images/certificates/global-unichoice-international.jpg", skill: "Volunteer service" }
];

export const projects = [
  { title: "Restaurant QR Ordering System", type: "Client project", description: "A full-stack QR ordering system used daily by a local restaurant, with a multilingual menu, order management, admin dashboard, and sales reports.", image: "/images/projects/morning-star.png", stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"], hideRepository: true, demo: "https://morningstarrestaurantdemo.netlify.app" },
  { title: "NovaRoute AI", type: "University project", description: "An internship recommendation platform using LLMs, RAG, semantic search, and separate student and employer workflows.", image: "/images/projects/novaroute.png", stack: ["Python", "FastAPI", "Next.js", "RAG"], repository: "https://github.com/thecynthiayin/novaroute", demo: "https://novaroutedemo.netlify.app" },
  { title: "Library Management System", type: "University project", description: "A PHP/MySQL web app with role-based access, borrowing flows, and fine management.", image: "/images/projects/library-system.png", stack: ["PHP", "MySQL", "Bootstrap"], repository: "https://github.com/thecynthiayin/Library-Management-System", demo: "https://librarymanagementdemo.netlify.app" },
  { title: "Her Body Club", type: "Client project", description: "A responsive fitness coaching website with a multi-step application form that sends submissions to Google Sheets automatically.", image: "/images/projects/her-body-club.png", stack: ["HTML5", "CSS3", "JavaScript", "Google Apps Script"], repository: "https://github.com/thecynthiayin/herbodyclub", demo: "https://herbodyclubdemo.netlify.app" },
  { title: "Assignment Tracker", type: "University project", description: "A PHP/MySQL web app with authentication and assignment management for organizing coursework.", image: "/images/projects/assignment-tracker.png", stack: ["PHP", "MySQL", "Fetch API"], repository: "https://github.com/thecynthiayin/Assignment-Tracker", demo: "https://assignmenttrackerdemo1.netlify.app" }
];
