

const SITE_DATA = {

  contact: {

    email: "amanisirelkhatim1509@gmail.com",
    linkedin: "https://www.linkedin.com/in/amani-sirelkhatim-718857291/",
    github: "https://github.com/amani-sirelkhatim",
  },

  cv: {
    
    href: "assets/cv/Amani-Sirelkhatim-CV.pdf",
  },

  skills: [
    {
      category: "Frontend Development",
      sub: "web-ui",
      items: ["HTML", "CSS", "JavaScript", "Responsive UI/UX", "Interactive interfaces"],
    },
    {
      category: "Flutter Development",
      sub: "mobile-and-web",
      items: ["Flutter", "Dart", "Responsive Flutter apps", "Firebase integration", "API integration", "State management", "Clean architecture"],
    },
    {
      category: "Backend & Full-Stack",
      sub: "in-progress-laravel",
      items: ["PHP", "Laravel (diploma in progress)", "REST APIs", "Database-driven apps", "Backend/frontend integration"],
    },
    {
      category: "Database",
      sub: "storage-and-sync",
      items: ["MySQL", "Supabase (PostgreSQL, auth, storage)", "Firebase / Firestore"],
    },
  ],

experience: [
  {
    date: "Nov 2024 – Feb 2025",
    title: "Technical Support Engineer",
    org: "Center of Technical Services, The Future University",
    points: [
      "Maintained, enhanced, and troubleshot internal university systems supporting academic and administrative operations.",
      "Developed new web-based systems and features based on requirements from university departments.",
      "Built PHP/MySQL solutions for managing university data, records, evaluations, and scheduling processes.",
      "Designed database structures, queries, and data-management functionality for new and existing systems.",
      "Analyzed existing workflows and translated operational requirements into practical software solutions.",
      "Debugged and resolved application, database, and user-facing issues.",
      "Implemented new functionality and improvements to existing systems and workflows.",
      "Worked with university staff to gather requirements, test new functionality, and improve system usability."
    ],
    accent: "teal"
  },
  {
    
    date: "04/2021 – 05/2023",
    title: "Middle Manager & Accountant",
    org: "Alyraa Ltd.",
    points: [
      "Managed the company's accounting system and maintained accurate financial and transaction data.",
      "Processed and recorded weekly and monthly transactions and employee payments.",
      "Generated reports from system data to support management and business operations.",
      "Maintained organized financial records and supported day-to-day operational processes."
    ],
    accent: "amber"
  },

  {
    date: "04/2021 – 05/2023",
    title: "Middle Manager & Operations Coordinator",
    org: "Nubia Royal Apartments",
    points: [
      "Managed the furnished-apartment management system and maintained its operational data.",
      "Organized and maintained structured information related to properties, tenants, payments, and operations.",
      "Handled system data entry, validation, and ongoing data maintenance.",
      "Coordinated operational workflows involving staff, maintenance, and property management.",
      "Currently developing a responsive website for both Nubia Royal Apartments branches."
    ],
    accent: "amber",
    badge: "Website Development"
  },

  
],

  education: [
    {
      date: "In progress",
      degree: "Full-Stack Development Diploma — Laravel",
      org: "",
      detail: "Currently completing",
      accent: "teal",
    },
    {
      date: "2021 – 2026",
      degree: "Master of Information System (Technology)",
      org: "The Future University, Sudan",
      detail: "CGPA 3.95 · Awarded 10 May 2026",
      accent: "amber",
    },
     {
      date: "Completed",
      degree: "Mobile Dev — Flutter Diploma",
      org: "KIMIT",
      detail: "120 hours",
      accent: "amber",
    },
    
    {
      date: "2016 – 2021",
      degree: "B.Sc. (Honours), Information Technology — First Class",
      org: "The Future University, Sudan",
      detail: "CGPA 3.63 · Awarded 6 Feb 2021",
      accent: "amber",
    },
    
  ],
  projects: [
    {
      id: "alyaraa",
      category: "Flutter App",
      filter: "flutter",
      title: "Construction Supply & Project Tracking App",
      org: "Alyaraa Engineering Co. Ltd",
      logo: "logo.png",
      summary: [
        "Role-based mobile system for project managers, store managers, and admins",
        "Real-time material & equipment request workflow, replacing paper-based tracking",
        "Live project dashboards, timelines, and progress reporting",
      ],
      role: "Solo designer & developer — individual Master's project",
      overview: "Alyaraa Ltd, a construction and engineering firm in Khartoum established in 1995, managed everything after tender approval — material requests, equipment tracking, delay reporting, day-to-day progress — through manual, paper-based processes with no real-time visibility. This app is a role-based mobile system for project managers, store managers, and admins that digitalizes project life-cycle tracking and supply management. Alyaraa Ltd is adopting it for use in day-to-day operations.",
      contribution: [
        "Designed and developed the entire application end-to-end, independently, as my individual Master's project",
        "Gathered requirements directly from the company",
        "Delivered a working system through Agile iterations, incorporating Alyaraa's team feedback",
      ],
      tech: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Agile"],
      gallery: [
        { file: "login.webp", caption: "Login" },
        { file: "pm-home.webp", caption: "Project manager home" },
        { file: "assigned-projects.webp", caption: "Assigned projects list" },
        { file: "project-detail.webp", caption: "Project detail & progress tracking" },
        { file: "request-type.webp", caption: "Request type selection" },
        { file: "material-request.webp", caption: "New material request" },
        { file: "equipment-availability.webp", caption: "Equipment availability check" },
        { file: "timeline.webp", caption: "Projects timeline" },
        { file: "store-dashboard.webp", caption: "Store manager dashboard" },
        { file: "project-report.webp", caption: "Project overview report" },
      ],
      galleryStyle: "portrait",
    },
    {
      id: "kpi",
      category: "Full-Stack System",
      filter: "web",
      title: "University KPI Management System",
      org: "University system",
      summary: [
        "Converts employee responsibilities into weighted, measurable KPIs",
        "Automated performance scoring with locked, auditable evaluation years",
        "Multi-year comparison and printable reports for management",
      ],
      role: "System designer & developer",
      overview: "A KPI management system used to monitor, evaluate, and report on employee performance across the university. It converts responsibilities into measurable KPIs, calculates weighted performance scores against defined criteria, and gives management printable reports and historical performance analysis across evaluation years.",
      contribution: [
        "Contributed to the front-end development by translating system requirements into clean HTML and CSS.",
        "Built KPI definition, configuration, and employee assignment",
        "Implemented weighted score calculation logic",
        "Handled evaluation-period logic and built the reporting pages",
      ],
      tech: ["PHP", "MySQL", "SweetAlert2", "Prepared statements"],
      gallery: [
        { file: "login.webp", caption: "Login" },
        { file: "home-menu.webp", caption: "Entry-type selection" },
        { file: "employees-list.webp", caption: "Employees list" },
        { file: "evaluation-form.webp", caption: "Evaluation form" },
        { file: "performance-report.webp", caption: "Performance report" },
        { file: "lock-evaluation.webp", caption: "Locking a finalized evaluation" },
        { file: "export-print.webp", caption: "Exporting a report to PDF" },
      ],
      galleryStyle: "landscape",
    },

    {
      id: "exam-scheduler",
      category: "Web Application",
      filter: "web",
      title: "Exam Scheduler",
      org: "University system",
      summary: [
        "Upload a faculty's exam schedule, tagged by batch and semester",
        "Automatic merging into one centralized master timetable",
        "Live-updating Google Sheet, no manual rebuilding required",
      ],
      role: "Developer",
      overview: "Consolidating exam schedules from different faculties into one master timetable used to mean manually copying each faculty's schedule into a shared spreadsheet. This page lets a user upload a faculty's schedule, tag it by faculty, batch, and semester, and have it processed and merged automatically into the university's general examination schedule, kept in a centralized Google Sheet.",
      contribution: [
        "Built the page end-to-end: upload flow and faculty/batch/semester tagging",
        "Built the processing logic that merges each submission into the shared schedule",
      ],
      tech: ["JavaScript", "Google Sheets API"],
      gallery: [
        { file: "upload-form.webp", caption: "Upload & tag a schedule" },
        { file: "merged-sheet.webp", caption: "Merged master schedule" },
      ],
      galleryStyle: "landscape",
    },

    {
      id: "voiceline",
      category: "Full-Stack System",
      filter: "web",
      title: "Voice Line — Support Case Documentation System",
      org: "University system · team project",
      summary: [
        "Centralized case and call logging for Zoom-based support agents",
        "Filterable, chart-based reporting connected to live data",
        "Integrated with the university's student system",
      ],
      role: "Contributed as part of a development team",
      overview: "Voice Line is used by the university's Zoom technical-support agents to document student interactions — calls, cases, inquiries, and the actions taken to resolve them — creating a centralized, traceable record the university can review and report on.",
     contribution: [
"Contributed to building and structuring the system's HTML pages as part of the development team",
"Contributed to the CSS/UI design, focusing on layout and usability",
"Worked with the team on developing reporting pages and connecting them to the database for real data",
"Contributed to the integration with the university's student system to retrieve student information",
],

      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      gallery: [
        { file: "home-menu.webp", caption: "Home menu" },
        { file: "new-record.webp", caption: "New case entry" },
        { file: "call-filters.webp", caption: "Call report filters" },
        { file: "case-table.webp", caption: "Case details & table" },
        { file: "calls-trend.webp", caption: "Calls-per-voice trend report" },
        { file: "reports-chart.webp", caption: "Reports dashboard" },
        { file: "admin-dashboard.webp", caption: "Admin overview" },
      ],
      galleryStyle: "landscape",
    },

    {
      id: "zscore",
      category: "Web Application",
      filter: "web",
      title: "Z-Score Marksheet Analysis Tool",
      org: "University system",
      summary: [
        "Upload a marksheet and instantly get a Z-score distribution",
        "Live-adjustable target mean and standard deviation",
        "Downloadable results with limit validation",
      ],
      role: "Developer",
      overview: "An analysis page where an authorized user uploads a student marksheet and the system calculates the mean, standard deviation, and each student's Z-score, then plots the score distribution. Target mean and standard deviation are adjustable, and results regenerate live, with validation to keep adjusted results within defined limits.",
      contribution: [
        "Built the upload flow and mark extraction",
        "Implemented the statistical calculations (mean, standard deviation, Z-score)",
        "Built the interactive distribution graph",
      ],
      tech: ["JavaScript", "Chart rendering", "PHP"],
      gallery: [
        { file: "zscore-analysis.webp", caption: "Marksheet upload & Z-score distribution" },
      ],
      galleryStyle: "landscape",
    },
  ],

};
