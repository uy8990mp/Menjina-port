export const profile = {
  // Identity
  name: "Menjina Maharjan",
  title: "Website Management • Product Owner • IT Administrator",
  location: "Apple Valley, MN",
  email: "menjina.maharjan@mnsu.edu",
  linkedin: "https://www.linkedin.com/in/menjina-maharjan-2595b0204/",
  github: "https://github.com/PLACEHOLDER",
  resumeUrl: "images/Menjina-Maharjan-Resume.pdf",

  // Home Hero
  hero: {
    headline: "Website Management + Product Ownership, backed by real IT operations.",
    subheadline:
      "IT Administrator and Product Owner focused on ServiceNow website development, portal design, and form building — managing content updates, tickets, PDF uploads, and workflow improvements to keep platforms secure, organized, and reliable.",
  },

  // Optional highlights (used in some layouts)
  highlights: [
    { label: "Website Management", value: "Content updates, publishing standards, ticket-driven improvements" },
    { label: "ServiceNow website", value: "Portals + forms + catalog items, KB, uploads, UAT" },
    { label: "Product Ownership", value: "Requirements, prioritization, stakeholder alignment, release readiness" },
    { label: "IT Background", value: "Operational support, access control, troubleshooting, documentation" },
  ],

  // About page content
  about: {
    paragraphs: [
      "I’m an IT Administrator and Product Owner with experience supporting operational systems in high-availability environments. I specialize in ServiceNow website work — maintaining portals, designing forms, managing content updates, and ensuring platforms stay reliable and easy to use.",
      "I enjoy turning unclear requirements into clean ServiceNow website experiences. That includes building service catalog forms, managing tickets, uploading PDFs and knowledge resources, and collaborating with stakeholders to improve workflows and usability.",
    ],
    bullets: [
      "ServiceNow website development: portals, forms, service catalog items, approvals",
      "Knowledge Base lifecycle + content updates + PDF uploads/attachments",
      "Ticket-based delivery: intake → triage → prioritize → deliver → document",
      "Product Owner mindset: requirements → backlog → UAT → release",
    ],
  },

  // Experience cards (About page renders these)
  experience: [
    {
      company: "Sun Country Airlines",
      role: "IT Administrator & Product Analyst (ServiceNow website + Product Owner)",
      period: "Jan 2022 – Present",
      points: [
        "Provided daily operational administration and maintenance using the ServiceNow website, supporting service delivery and platform reliability.",
        "Designed and updated ServiceNow website portals and service catalog forms, including workflows, approvals, and automation to improve efficiency.",
        "Managed ServiceNow website tickets and stakeholder requests by gathering requirements, coordinating enhancements, and supporting vendor/upgrade communications.",
        "Maintained Knowledge Base content and performed ongoing content updates (including uploading PDFs/resources) to keep information accurate and accessible.",
        "Controlled role-based access (roles, permissions, groups) and configured notifications, SLAs, and business rules to support operational requirements.",
        "Led UAT activities for new ServiceNow website features and supported onboarding of teams into the platform with training and user guidance.",
      ],
    },
    {
      company: "Minnesota State University, Mankato",
      role: "Lead IT Student Consultant",
      period: "Mar 2021 – Jul 2023",
      points: [
        "Monitored and maintained networks and servers; created and escalated tickets to Tier 3 based on classification and team assignment.",
        "Upgraded, installed, and configured hardware/software for faculty and staff; supported StarID administration and printer controls.",
        "Assisted with troubleshooting StarID and university website issues; performed diagnostic testing and debugging to reduce errors.",
        "Handled phone support; developed basic data retrieval and recovery procedures.",
        "Trained and monitored student consultants across calls, tickets, chat, and daily operations.",
      ],
    },
    {
      company: "Royal Bank of Canada (RBC Wealth Management)",
      role: "Business Analyst",
      period: "Jun 2022 – Dec 2022",
      points: [
        "Participated in Agile ceremonies and collaborated with UX and Product teams to evaluate enhancements and align solutions.",
        "Worked with Jira, Confluence, GitHub, and Tableau to support documentation, tracking, and reporting.",
        "Collected project data and reported updates to leadership; supported dashboards via Tableau and Excel (pivot tables/charts).",
        "Created templates for integrated risk profiles and coordinated access/documentation for teams.",
        "Supported improvements to change and release management processes for software/product deployments.",
      ],
    },
    {
      company: "NeStCom Mankato (Recognized Student Organization – MNSU)",
      role: "Event Coordinator",
      period: "May 2021 – Apr 2022",
      points: [
        "Planned, promoted, and hosted campus events supporting first-year student engagement and community building.",
        "Organized a major campus reunion/festival representing ~200 Nepalese participants; coordinated logistics and communications.",
        "Guided participants during events, collected feedback, and reported outcomes to leadership/board.",
      ],
    },

    // ✅ Extra “cards” you asked for (same style on About page)
    {
      company: "Certifications",
      role: "Professional Development",
      period: "Ongoing",
      points: [
        "ServiceNow Fundamentals",
        "ITIL v4",
        "Atlassian Agile & Scrum Foundations",
        "Change Management Foundations",
        "Introduction to Cloud Computing",
      ],
    },
  ],

  // Skills page expects this
  skills: {
    primary: ["Website Management", "ServiceNow website (Portals/Forms/Catalog)", "Product Ownership", "Ticketing & Support"],
    secondary: ["Knowledge Base Management", "Content Updates + PDF Uploads", "UAT", "Access Control / Governance"],
    tools: ["ServiceNow", "MS Office (Word/Excel/PowerPoint)", "Confluence", "Jira", "Tableau", "Adobe Creative Suite"],
  },

  // Projects page expects this
  projects: [
    {
      title: "ServiceNow Website Portal & Catalog Enhancements",
      description:
        "ServiceNow website portal improvements and service catalog form design (fields, validation, approvals, automation). Includes ticket intake, stakeholder requirements, UAT, and release readiness.",
      tags: ["ServiceNow website", "Forms", "Workflows", "Product Owner"],
      links: [{ label: "Case Study (Placeholder)", href: "#" }],
      image: "/images/ServiceNow.jpeg",
    },
    {
      title: "Knowledge Base + PDF Publishing Workflow",
      description:
        "Knowledge Base content management: structure, access, lifecycle updates, and uploading PDFs/resources so users always find accurate information.",
      tags: ["ServiceNow website", "KB", "PDF Uploads", "Governance"],
      links: [{ label: "Write-up (Placeholder)", href: "#" }],
      image: "/images/ServiceNow.jpeg",
    },
    {
      title: "Website Ticket Operations & Content Updates",
      description:
        "Ticket-driven website management: intake → triage → prioritize → update content/forms → publish → document. Focused on consistency and quality control.",
      tags: ["Website Mgmt", "Tickets", "Content Updates", "Documentation"],
      links: [{ label: "Overview (Placeholder)", href: "#" }],
      image: "/images/ServiceNow.jpeg",
    },
    {
      title: "Event Management & Promotions (NeStCom Mankato)",
      description:
        "Planned and coordinated campus events, managed logistics, promoted engagement, and reported results to leadership.",
      tags: ["Event Planning", "Marketing", "Coordination"],
      links: [{ label: "Highlights (Placeholder)", href: "#" }],
      image: "/images/Nestcom.png",
    },
  ],
};
