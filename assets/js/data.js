/* =========================================================
   SITE DATA
   Edit this file to add, remove, or update projects, experience,
   education, and contact links. Nothing else in the site needs
   to change — index.html and main.js read from here.
   ========================================================= */

const SITE_DATA = {

  contact: {
    // TODO: replace with real links before publishing
    email: "amanisirelkhatim1509@gmail.com",
    linkedin: "https://www.linkedin.com/in/amani-sirelkhatim-718857291/",
    github: "https://github.com/amani-sirelkhatim",
  },

  cv: {
    // Drop your CV PDF at assets/cv/Amani-Sirelkhatim-CV.pdf and it will work as-is.
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
  }
],

  education: [
    
    {
      date: "2016 – 2021",
      degree: "B.Sc. (Honours), Information Technology — First Class",
      org: "The Future University, Sudan",
      detail: "CGPA 3.63 · Awarded 6 Feb 2021",
      accent: "teal",
    },
     {
      date: "Completed",
      degree: "Mobile Dev — Flutter Diploma",
      org: "KIMIT",
      detail: "120 hours",
      accent: "teal",
    },
    {
      date: "2021 – 2026",
      degree: "Master of Information System (Technology)",
      org: "The Future University, Sudan",
      detail: "CGPA 3.95 · Awarded 10 May 2026",
      accent: "teal",
    },
    {
      date: "In progress",
      degree: "Full-Stack Development Diploma — Laravel",
      org: "",
      detail: "Currently completing",
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
      summary: "A mobile app I designed and built solo to replace paper-based tracking of construction projects, materials, and equipment with a real-time system.",
      role: "Solo designer & developer — individual Master's project",
      overview: "Alyaraa Ltd, a construction and engineering firm in Khartoum established in 1995, managed everything after tender approval — material requests, equipment tracking, delay reporting, day-to-day progress — through manual, paper-based processes with no real-time visibility. This app is a role-based mobile system for project managers, store managers, and admins that digitalizes project life-cycle tracking and supply management. Alyaraa Ltd is adopting it for use in day-to-day operations.",
      contribution: "I designed and developed the entire application end-to-end, independently, as my individual Master's project — from requirements gathering through to a working system Alyaraa's team gave feedback on across Agile iterations.",
      features: [
        "Role-based access for project managers, store managers, and admins",
        "Project dashboards with active/completed work, upcoming tasks, and delay flags",
        "Project detail view broken into stages and tasks with progress tracking",
        "Material and equipment request workflow, replacing paper-based requests",
        "Real-time equipment availability checks before a request is raised",
        "Calendar-based timeline across all projects",
        "Store manager dashboard for pending approvals and low-inventory alerts",
        "Reporting dashboard summarizing project health and average progress",
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
      summary: "A centralized platform that turns employee responsibilities into weighted KPIs, calculates performance scores, and locks finalized evaluation years.",
      role: "System designer & developer",
      overview: "A KPI management system used to monitor, evaluate, and report on employee performance across the university. It converts responsibilities into measurable KPIs, calculates weighted performance scores against defined criteria, and gives management printable reports and historical performance analysis across evaluation years.",
      contribution: "I designed and developed the system, covering KPI definition and configuration, employee assignment, weighted score calculation, evaluation-period handling, and the reporting pages.",
      features: [
        "KPI definition, configuration, and assignment to employees",
        "Weighted performance scoring and automated calculation",
        "Evaluation periods with admin-controlled locking of finalized past years",
        "Multi-year performance comparison for management",
        "Printable KPI breakdown, department, and summary reports",
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
      summary: "A web page that replaces manually merging faculty exam timetables into one spreadsheet — upload a schedule and it's tagged and merged automatically.",
      role: "Developer",
      overview: "Consolidating exam schedules from different faculties into one master timetable used to mean manually copying each faculty's schedule into a shared spreadsheet. This page lets a user upload a faculty's schedule, tag it by faculty, batch, and semester, and have it processed and merged automatically into the university's general examination schedule, kept in a centralized Google Sheet.",
      contribution: "I built this page end-to-end: the upload flow, faculty/batch/semester tagging, and the processing logic that merges each submission into the shared schedule.",
      features: [
        "Upload an individual faculty's exam schedule",
        "Tag each upload by faculty, batch, and semester",
        "Automatic processing and merging into the general schedule",
        "Centralized output in a Google Sheet connected to the university's account",
        "Continuous updates — new schedules merge in without rebuilding the sheet",
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
      summary: "A system used by Zoom-based technical support agents to log student support calls and cases, built as part of a development team.",
      role: "Contributed as part of a development team",
      overview: "Voice Line is used by the university's Zoom technical-support agents to document student interactions — calls, cases, inquiries, and the actions taken to resolve them — creating a centralized, traceable record the university can review and report on.",
      contribution: "I contributed to Voice Line as part of a team rather than building it alone. My work covered building and structuring the system's HTML pages, designing the CSS/UI for layout and usability, developing reporting pages, connecting those reports to the database so they display real recorded data, and working on the integration with the university's student system to pull relevant student information. Other team members were responsible for other parts of the system.",
      features: [
        "Case and call logging for support agents",
        "Filterable call/case reports with charts",
        "Database-backed reporting pages",
        "Integration with the university's student system",
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
      summary: "A page that turns an uploaded marksheet into a live Z-score distribution, with adjustable target mean and standard deviation.",
      role: "Developer",
      overview: "An analysis page where an authorized user uploads a student marksheet and the system calculates the mean, standard deviation, and each student's Z-score, then plots the score distribution. Target mean and standard deviation are adjustable, and results regenerate live, with validation to keep adjusted results within defined limits.",
      contribution: "I built this page's upload flow, statistical calculations, and the interactive distribution graph.",
      features: [
        "Marksheet upload and automatic mark extraction",
        "Mean, standard deviation, and per-student Z-score calculation",
        "Live-adjustable target mean and standard deviation",
        "Highest/lowest mark detection and limit validation",
        "Downloadable Z-score results",
      ],
      tech: ["JavaScript", "Chart rendering", "PHP"],
      gallery: [
        { file: "zscore-analysis.webp", caption: "Marksheet upload & Z-score distribution" },
      ],
      galleryStyle: "landscape",
    },
  ],
};
