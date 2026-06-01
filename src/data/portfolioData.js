// src/data/portfolioData.js

const portfolioData = {
  /* ================= PERSONAL INFORMATION ================= */

  personal: {
    name: "Ishara Hewawitharana",
    title: "Computer Science Undergraduate",
    email: "hewawitharanaishara@gmail.com",
    phone: "+94 768792088",
    location: "Handapangoda, Sri Lanka",
    linkedin: "https://www.linkedin.com/in/ishara-hewawitharana-701539333",
    github: "https://github.com/ishara723",
    profileImage: "/images/profile/photo.jpeg"
  },

  /* ================= ABOUT SECTION ================= */

  about: {
    summary:
      "I am a passionate Computer Science undergraduate at SLIIT with strong skills in Java, Spring Boot, React, and full-stack development. I enjoy building scalable web applications and continuously improving my problem-solving abilities.",
    highlights: [
      "Strong foundation in Object-Oriented Programming",
      "Full-Stack Web Development experience",
      "REST API development using Spring Boot",
      "Experience with React and modern frontend tools"
    ],
    interests: [
      "Full Stack Development",
      "Backend Architecture",
      "UI/UX Design",
      "Competitive Programming"
    ]
  },

  /* ================= EDUCATION ================= */

  education: [
    {
      id: 1,
      degree: "Bachelor's Degree",
      field: "Computer Science",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      location: "Malabe, Sri Lanka",
      graduationYear: "2027",
      period: "2024 - 2027",
      relevantCoursework: [
        "Object Oriented Programming",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Application Development",
        "Operating Systems",
        "Distributed Systems",
        "Software Engineering Principles"
      ],
      activities: [
        "Academic Projects using Java, Spring Boot, and React",
        "Group-based software development assignments",
        "Competitive programming contests and hackathons"
      ]
    }
  ],

  /* ================= SKILLS ================= */

  skills: [
    {
      category: "Technical Skills",
      subcategories: [
        {
          title: "Programming Languages",
          items: [
            { name: "Java", level: 85 },
            { name: "C", level: 85 },
            { name: "SQL", level: 80 },
            { name: "JavaScript", level: 80 }
          ]
        },
        {
          title: "Web Development",
          items: [
            { name: "HTML", level: 85 },
            { name: "CSS", level: 85 },
            { name: "React", level: 75 },
            { name: "Node.js", level: 75 },
            { name: "Spring Boot", level: 80 }
          ]
        },
        {
          title: "Databases",
          items: [
            { name: "MySQL", level: 80 },
            { name: "MongoDB", level: 80 }
          ]
        }
      ]
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Communication", level: 80 },
        { name: "Team Work", level: 90 },
        { name: "Time Management", level: 88 },
        { name: "Leadership", level: 80 },
        { name: "Problem Solving", level: 75 },
        { name: "Adaptability and Learning", level: 77 }
      ]
    },
    {
      category: "Tools & Platforms",
      subcategories: [
        {
          title: "Version Control",
          items: [
            { name: "GitHub", level: 80 },
          ]
        },
        {
          title: "Methodologies",
          items: [
            { name: "Agile", level: 85 },
            { name: "Scrum", level: 75 }
          ]
        },
        {
          title: "Debugging & Testing",
          items: [
            { name: "Postman", level: 75 },
            { name: "JUnit", level: 80 },
            { name: "Selenium", level: 80 }
          ]
        }
      ],

    }
  ],

  /* ================= PROJECTS ================= */

  projects: [
    {
      id: 1,
      name: "Automated Waste Disposal System",
      tagline: "Raspberry Pi Powered Smart Waste Segregation",
      description:
        <p>This project presents an AI-driven automated waste segregation system that utilizes computer vision and 
          embedded systems to improve recycling efficiency. The system is powered by a Raspberry Pi integrated with 
          a camera module to capture real-time images of waste items. Using OpenCV-based image processing and 
          object detection techniques, the system classifies waste into predefined categories such as plastic, metal, 
          and glass.

          Once the object is identified, control signals are sent to servo motors to automatically open the 
          corresponding bin, ensuring accurate and contactless disposal. The solution enhances waste management 
          by reducing human error, promoting proper recycling practices, and contributing to environmental 
          sustainability through intelligent automation.</p>,
      images: [
        "/images/projects/system1,0.jpeg",
        "/images/projects/system1.1.jpeg",
        "/images/projects/system1.2.png"
      ],
      technologies: ["Raspberry Pi 3", "Raspberry Pi Camera Module", "OpenCV", "Python", "Servo Motors", "Computer Vision Algorithms"],
      features: [
        "Real-Time Object Detection – Instantly identifies waste items using computer vision.",
        "Automated Bin Selection – Automatically determines the correct category (plastic, metal, glass).",
        "Motorized Lid Control – Opens the appropriate bin using servo motors.",
        "Contactless Operation – Reduces human interaction and improves hygiene.",
        "Embedded System Integration – Fully powered by Raspberry Pi for compact deployment.",
        "High Classification Accuracy – Uses image processing techniques for reliable sorting.",
        "Environmental Impact – Promotes proper recycling practices and reduces waste.",
        "Scalable Design – Can be expanded to include additional waste categories and features in the future.",
      ],
      outcome: "Successfully implemented an automated waste segregation system.",
      links: {
        demo: "https://drive.google.com/file/d/1-Lxc9gx4iHBNILf8hx272sN-37dQr9Uv/view?usp=sharing"
      },
      date: "2024",
      featured: false
    },
    {
      id: 2,
      name: "Sarasavi Library Management System",
      tagline: "Comprehensive Library Management Solution",
      description:
        <p>This project presents the Sarasavi Library Management System, an automated digital solution designed to 
          streamline library operations and improve user experience. The system is built using Java Spring Boot 
          for backend services, MongoDB for flexible and scalable database management, and React.js for a responsive 
          frontend interface. It allows real-time tracking and management of books, members, and transactions, 
          including borrowing, returning, and reservations. Secure authentication and role-based access ensure proper 
          access control for students, staff, and administrators. Automated notifications and detailed reporting reduce 
          manual workload and enhance operational efficiency, providing a modern, organized, and user-friendly 
          approach to library administration.</p>,
      images: [
        "/images/projects/system2.0.jpg",
        "/images/projects/system2.1.jpg",
        "/images/projects/system2.2.jpg",
        "/images/projects/system2.3.jpg",
        "/images/projects/system2.4.jpg",
        "/images/projects/system2.5.jpg",
        "/images/projects/system2.6.jpg"

      ],
      technologies: ["Java", "Spring Boot", "MongoDB", "React.js"],
      features: [
        "Book Management: Add, update, delete, and track books in real-time.",
        "Member Management: Manage library members and their borrowing history.",
        "Transaction Management: Handle book borrowing, returning, and reservations.",
        "Role-Based Access Control: Secure authentication for studentsand administrators.",
        "Automated Notifications: Send reminders and alerts for due dates and overdue books.",
        "Detailed Reporting: Generate reports on library usage and inventory.",
        "Responsive Design: Accessible on various devices with a user-friendly interface."
      ],
      outcome: "Streamlined library operations and improved user experience.",
      links: {
        github: "https://github.com/Kavindi-K/SE-LibraryManagementSystem.git",
        demo: "https://drive.google.com/file/d/1FEA8UD3SkR6AfIjCPYGG5VnLAGIW5j5k/view?usp=sharing"
      },
      date: "2025",
      featured: true
    },

    {
      id: 3,
      name: "Distributed File Storage System",
      tagline: "Raft-Based Distributed Storage with Vector Clock Consistency and Sub-Second Failure Detection",
      description:
        <p>This project presents a fault-tolerant distributed file storage system that utilizes the Raft consensus 
          algorithm and real-time failure detection to ensure high availability across multiple nodes. The system is 
          powered by Python-based microservices integrated with TCP socket communication for authentic network connections 
          between distributed storage nodes. Using heartbeat-based monitoring and vector clock conflict resolution, the 
          system automatically detects failures and maintains data consistency across the cluster.

          Once a failure is detected, the Raft consensus algorithm triggers leader election and log replication to restore 
          system state without data loss. A three-tiered consistency model (ONE, QUORUM, ALL) provides flexible guarantees, 
          while NTP synchronization ensures accurate timestamps across nodes. The solution achieves 99.2% availability with 
          45ms average latency, promoting reliable distributed storage through intelligent automation and self-healing 
          capabilities.</p>,
      images: [
        "/images/projects/system3.0.png",
        "/images/projects/system3.1.png",
        "/images/projects/system3.2.png",
        "/images/projects/system3.3.png",
        "/images/projects/system3.4.png"
      ],
      technologies: ["Python", "Raft Consensus Algorithm", "TCP Socket Communication", "Vector Clock Conflict Resolution", "NTP Synchronization"],
      features: [
        "Fault-Tolerant Design: Ensures high availability across multiple nodes.",
        "Real-Time Failure Detection: Automatically detects and responds to node failures.",
        "Raft Consensus Algorithm: Maintains data consistency and triggers leader election.",
        "Vector Clock Conflict Resolution: Resolves conflicts efficiently.",
        "Three-Tiered Consistency Model: Provides flexible consistency guarantees (ONE, QUORUM, ALL).",
        "NTP Synchronization: Ensures accurate timestamps across nodes.",
        "High Availability: Achieves 99.2% availability with 45ms average latency.",
        "Self-Healing Capabilities: Automatically restores system state without data loss."
      ],
      outcome: "Successfully implemented a distributed file storage system with high availability and consistency.",
      links: {
        github: "https://github.com/Kavindi-K/DS-Designing-a-Fault-Tolerant-Distributed-File-Storage-System.git"
      },
      date: "2025",
      featured: true
    },

     {
      id: 4,
      name: "TestLang++: A DSL Compiler for Automated HTTP API Testing",
      tagline: "DSL-Driven HTTP API Testing with Automated JUnit 5 Code Generation",
      description:
        <p>TestLang++ is a domain-specific language (DSL) and compiler designed to simplify HTTP API testing. 
          It allows developers and QA engineers to write concise, readable test scripts in .test files, specifying 
          HTTP methods, headers, request bodies, and expected responses. The compiler translates these scripts 
          into executable JUnit 5 test classes using Java 11+ HttpClient, automating test execution with assertions 
          for status codes, headers, and body content.

          With features like variable substitution, centralized base URL configuration, and support for GET, POST, 
          PUT, and DELETE requests, TestLang++ streamlines API testing workflows, reduces boilerplate code, and 
          ensures reliable, maintainable, and repeatable test automation for backend services.</p>,
      images: [
        "/images/projects/system4.0.png",
        "/images/projects/system4.1.png",
        "/images/projects/system4.2.png",
        "/images/projects/system4.3.png"
      ],
      technologies: ["Java 11+", "JUnit 5", "Java HttpClient", "Domain-Specific Language (DSL) Design", "JFlex 1.9.1", "CUP 11b", "Spring Boot"],
      features: [
        "HTTP Method Support – GET, POST, PUT, DELETE requests for comprehensive API testing.",
        "Configurable Base URL & Headers – Centralized setup for endpoints and default headers.",
        "Variable Management – Define string and integer variables with substitution in requests.",
        "Automated JUnit 5 Code Generation – Translates .test scripts into executable test classes.",
        "Assertions for Validation – Built-in support for status code, header, and body content assertions.",
        "Readable DSL Syntax – Concise and intuitive syntax for writing test cases.",
        "Integration with Java Ecosystem – Leverages Java libraries and tools for seamless testing workflows."
      ],
      outcome: "Successfully developed a DSL compiler for automated HTTP API testing, improving test automation efficiency and maintainability.",
      links: {
        github: "https://github.com/ishara723/TestLang-Compiler.git",
        demo: "https://drive.google.com/file/d/18zV93EDd_z02Qno6UrXrvUSLJ71h7Sxk/view?usp=sharing"
      },
      date: "2025",
      featured: false
    },
    {
      id: 5,
      name: "Portfolio Website",
      tagline: "Personal portfolio built with React",
      description:
        "Designed and developed a responsive portfolio website to showcase projects, skills, and achievements.",
      images: [
        "/images/projects/system5.0.png",
        "/images/projects/system5.1.png",
        "/images/projects/system5.2.png",
        "/images/projects/system5.3.png"
      ],
      technologies: ["React", "Tailwind CSS"],
      features: [
        "Responsive design",
        "Dynamic project rendering",
        "Clean UI with animations"
      ],
      outcome: "Improved personal branding and online presence.",
      links: {
        github: "https://github.com/ishara723/my-portfolio.git"
      },
      date: "2025",
      featured: false
    },
    {
  id: 6,
  name: "Coordina – Community Collaboration & Resource Platform (CCRP)",
  tagline: "Full-Stack Community Collaboration & Resource Management Platform",
  description:
    <p>Coordina (CCRP) is a full-stack web application developed to help community organizations, NGOs, schools, temples, and societies manage events, donation drives, resource bookings, tasks, forms, and communication through a single secure platform. Built using React.js, ASP.NET Web API, and MySQL, the system replaces fragmented coordination methods such as phone calls, spreadsheets, and messaging apps. A key innovation of the platform is its synchronized multi-level calendar system with real-time updates and role-based collaboration, improving transparency, scheduling efficiency, and community engagement.</p>,
  images: [
    "/images/projects/system6.0.png",
    "/images/projects/system6.1.png",
    "/images/projects/system6.2.png",
    "/images/projects/system6.3.png",
    "/images/projects/system6.4.png",
    "/images/projects/system6.5.png",
    "/images/projects/system6.6.png"
  ],
  technologies: [
    "React.js",
    "ASP.NET Web API",
    "ADO.NET",
    "Supabase",
    "SignalR",
    "Docker",
    "Azure",
    "GitHub Actions"
  ],
  features: [
    "User & Entity Management: Manage organizations, events, and donation drives with secure role-based access.",
    "Real-Time Calendar Synchronization: Multi-level synchronized calendars with live updates using SignalR.",
    "Resource Booking System: Prevent double bookings with real-time conflict detection and approval workflows.",
    "Task & Collaboration Management: Assign tasks, track progress, and communicate using dedicated chat channels.",
    "Forms & Data Collection: Drag-and-drop form builder with response tracking and export options.",
    "Donation Management: Track donation goals, pledges, and progress through live dashboards.",
    "Analytics & Reporting: Generate PDF, CSV, and Excel reports with visual dashboards and performance metrics.",
    "CI/CD & Deployment: Dockerized deployment on Azure with automated GitHub Actions pipeline."
  ],
  outcome:
    "Improved coordination, transparency, and operational efficiency for community organizations through a centralized real-time management platform.",
  links: {
    github: "https://github.com/Thejandeera/coordina-group-16.git",
    demo: "https://www.youtube.com/watch?v=lruYeOEww6g"
  },
  date: "2026",
  featured: true
},
{
  id: 7,
  name: "Tropical Reserve Rescue",
  tagline: "AI-Powered Wildlife Rescue & Pathfinding Simulation Game",
  description:
    <p>Tropical Reserve Rescue is a 3D wildlife rescue simulation game developed in Unity, set in a storm-affected Sri Lankan eco-tourism reserve. The project combines game development, artificial intelligence, and physics-based interaction to simulate autonomous rescue operations. Players control a monster truck to remove fallen trees and clear blocked routes while AI rescue drones dynamically recalculate paths to rescue stranded hikers and endangered animals. The system integrates custom graph generation, A* pathfinding, real-time environmental adaptation, smooth drone animations, and interactive debugging tools to create an immersive and intelligent rescue experience.</p>,
  images: [
    "/images/projects/flower.jpg"
  ],
  technologies: [
    "Unity",
    "C#",
    "Blender",
    "A* Pathfinding",
    "BFS",
    "Raycasting",
    "Physics Engine"
  ],
  features: [
    "3D Environment Design: Built an immersive jungle rescue environment with terrain sculpting, lighting, and environmental effects.",
    "Custom Graph Generation: Created a mathematical node-based graph using raycasting to identify walkable and blocked areas.",
    "Dynamic Pathfinding: Implemented A* search with Euclidean heuristic and BFS as a backup search algorithm.",
    "Physics-Based Interaction: Enabled monster truck and heavy log interactions using Rigidbody and collision physics.",
    "Real-Time Environment Adaptation: Updated graph nodes dynamically when obstacles were removed, allowing drones to recalculate routes instantly.",
    "Drone Animation & Movement: Developed smooth drone navigation using interpolation and rotation techniques.",
    "Debug Visualization: Implemented toggleable path and search visualization using Unity LineRenderer for algorithm debugging."
  ],
  outcome:
    "Created an interactive AI-driven rescue simulation demonstrating real-time pathfinding, environmental adaptation, and advanced game development techniques.",
  links: {
    github: "https://github.com/Thejandeera/IS-GV-Assignment.git",
    demo: "https://www.youtube.com/watch?v=oS8EPMjWPl0"
  },
  date: "2026",
  featured: true
},
{
  id: 8,
  name: "CIRO Mobile Phone Management System",
  tagline: "Full-Stack Mobile Phone Shop & Repair Tracking System",
  description:
    <p>The CIRO Mobile Phone Management System is a full-stack web application developed to manage mobile phone shop operations and track repair progress efficiently. Developed collaboratively by a team, the system provides administrators with a secure dashboard to manage products, create repair jobs, upload repair-related images, and update repair statuses. Each repair job is assigned a unique tracking number, allowing customers to monitor repair progress online without authentication. The workflow is organized through structured stages such as In Queue, Processing, and Repaired, improving transparency and operational efficiency. Built using a RESTful architecture, the application ensures smooth frontend-backend integration and supports efficient business management for mobile phone repair services.</p>,
  images: [
    "/images/projects/ciro1.jpg",
    "/images/projects/ciro2.jpg",
    "/images/projects/ciro3.jpg",
    "/images/projects/ciro4.jpg",
    "/images/projects/ciro5.jpg"
  ],
  technologies: [
    "React.js",
    "Spring Boot",
    "Java",
    "MySQL",
    "REST API",
    "Postman"
  ],
  features: [
    "Product Management: Administrators can add, update, and manage mobile phone products through a secure dashboard.",
    "Repair Job Tracking: Create repair jobs with unique tracking numbers for customer progress monitoring.",
    "Repair Status Workflow: Structured repair stages including In Queue, Processing, and Repaired.",
    "Customer Progress Checking: Customers can track repair progress online without requiring authentication.",
    "Image Upload Support: Administrators can upload repair-related images for better repair documentation.",
    "Automatic Date Updates: System automatically updates relevant repair dates when statuses change.",
    "RESTful Architecture: Smooth frontend-backend integration using REST APIs for efficient communication.",
    "Secure Admin Dashboard: Role-based management system for administrative operations."
  ],
  outcome:
    "Improved mobile shop management and repair tracking efficiency while strengthening full-stack development, REST API, database, and team collaboration skills.",
  links: {
    github: "YOUR_GITHUB_LINK",
    demo: "YOUR_DEMO_LINK"
  },
  date: "2025",
  featured: false
}
  ],

  /* ================= CERTIFICATIONS ================= */

  certifications: [
    {
      id: 1,
      name: "Java Programming Certification",
      issuer: "Online Learning Platform",
      date: "2024",
      credentialId: "JAVA123"
    }
  ],

  /* ================= SOCIAL LINKS ================= */

  social: {
    linkedin: "https://www.linkedin.com/in/ishara-hewawitharana-701539333",
    github: "https://github.com/ishara723"
  }
};

export default portfolioData;