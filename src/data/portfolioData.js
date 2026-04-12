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
        github: "https://github.com/ishara723",
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
        "/images/projects/flower.jpg"
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
        "/images/projects/flower.jpg"
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
        github: "https://github.com/ishara723/TestLang-Compiler.git"
      },
      date: "2025",
      featured: true
    },
    {
      id: 5,
      name: "Portfolio Website",
      tagline: "Personal portfolio built with React",
      description:
        "Designed and developed a responsive portfolio website to showcase projects, skills, and achievements.",
      images: [
        "/images/projects/flower.jpg"
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
      date: "2024",
      featured: true
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