type Technologies = {
  [category: string]: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  technologies: Technologies;
  image: string;
  features: string[];
  challenges: string[];
  github?: string;
  demo: string;
  stats?: {
    users?: string;
    rating?: string;
    duration?: string;
    isMobileResponsive?: boolean;
  };
};

export const projects: Project[] = [
  {
    slug: "phantm-captr",
    title: "Phantm Captr",
    category: "Packaging Intelligence Platform",
    description:
      "Phantm Captr is a Australian packaging intelligence platform that helps businesses analyze, reduce, and transition away from plastic packaging through real-time data insights and compliance automation.",
    longDescription:
      "Phantm Captr is a cloud-based platform built to empower brands with SKU-level packaging insights. It automates the capture, enrichment, and visualization of packaging data to enable ESG reporting, APCO compliance, and sustainable packaging transitions. By integrating data from procurement systems and aligning with regulations like ARL and APCO, Captr helps companies reduce their plastic footprint and improve sustainability outcomes.",
    tech: [
      "React.js",
      "Typescript",
      "Python",
      "Serverless",
      "Aws",
      "Flyway",
      "PostgreSQL",
      "Terraform",
      "MUI",
      "Google Gemini"
    ],
    technologies: {
      frontend: ["React.js", "Typescript", "MUI"],
      backend: ["Serverless", "Typescript", "Python"],
      database: ["PostgreSQL"],
      deployment: ["Flyway", "Terraform"],
      aws: ["Lambda", "Api Gateway", "Route 53", "S3","Cloudwatch", "RDS", "Amplify"],
      ai: ["Google Gemini"],
    },
    image: "/images/phantm-captr.png",
    features: [
      "Played the lead role in the project",
      "Architected and developed the serverless backend services",
      "Created and maintained the CI/CD pipeline for frontend and backend services with gihub actions",
      "Designed and developed the PostgreSQL database schema and migrations using Flyway",
      "Designed PostgreSQL database schema isolated for each customer to ensure data security and compliance",
      "Implemented the integration of Google Gemini for AI-powered packaging data analysis",
      "Secured the application by implementing authentication and authorization using AWS Cognito",
      "Designed and developed terraform scripts for infrastructure as code",
    ],
    challenges: [
      "Rapidly changing requirements and tight deadlines",
      "Ensuring data security and compliance with customer-specific database schemas",
    ],
    github: undefined,
    demo: "https://www.phantm.com/",
    stats: undefined,
  },
  {
    slug: "leos",
    title: "Leos",
    category: "Ride Hailing App",
    description:
      "LEOS is a ride-hailing app designed to connect people and places",
    longDescription:
      "LEOS is a ride-hailing app designed to connect people and places. Currently available in Colombo, LEOS offers reliable, affordable rides and is expanding to other regions of Sri Lanka in the near future. Built with the latest technology, LEOS provides a seamless user experience for both drivers and riders. We focus on fair pricing and efficient rides while ensuring a safe and reliable service.",
    tech: [
      "Next.js",
      "Typescript",
      "Go Lang",
      "Java",
      "Serverless",
      "GRPC",
      "Aws",
      "Goose",
      "PostgreSQL",
      "Terraform"
    ],
    technologies: {
      frontend: ["Next.js", "Typescript", "Antd"],
      backend: ["Typescript", "Java", "Go Lang", "Spring Boot", "Qurakus", "Serverless", "GRPC"],
      database: ["PostgreSQL", "DyanmoDB", "Redis"],
      deployment: ["Goose", "Terraform"],
      aws: ["ECS", "ALB", "Cognito", "Lambda", "Api Gateway", "Route 53", "S3","Cloudwatch", "RDS", "Amplify"],
      mobile: ["Flutter"],
    },
    image: "/images/leos.png",
    features: [
      "Architected and developed the pricing microservices with Java, SPring boot and JEasy rule engine",
      "Architected and developed consumer management microservice with Go Lang and Hexagonal Architecture",
      "Designed and developed web views as Java Quarkus microservice to embed with the mobile application web views",
      "Setup multiple auth server support across the microservices",
    ],
    challenges: [
      "Rapidly changing requirements and tight deadlines",
    ],
    github: undefined,
    demo: "https://www.leos.one/",
    stats: undefined,
  },
  {
    slug: "cooltrax",
    title: "Cooltrax",
    category: "Cold chain monitoring system",
    description:
      "Cooltrax leads the industry in cold chain monitoring offering the best cold chain management with wireless temperature monitoring for fleet & facility.",
    longDescription:
      "Cooltrax provides cutting-edge solutions for food carriers and distributors, ensuring goods are transported and stored at safe, compliant temperatures. Its technology empowers businesses to foster a strong food safety culture, protect their brand reputation, and enhance customer value by capturing, monitoring, and reporting real-time trailer temperature data.",
    tech: [
      "Node.js",
      "Ember.js",
      "Typescript",
      "Express.js",
      "Docker",
      "Jenkins",
      "Ansible",
    ],
    technologies: {
      frontend: ["Ember.js", "JavaScript"],
      backend: ["Node.js", "Express.js", "Typescript"],
      database: ["PostgreSQL", "Redis"],
      deployment: ["Docker", "Jenkins", "Ansible"],
    },
    image: "/images/cooltrax.jpg",
    features: [
      "Collaborated with the team to design, develop and test API services",
      "Designed and developed CICD pipeline for frontend and backend services",
      "Designed and Developed BDD test containers for running integration testing on the deployments",
      "Designed and developed application for scanning UMD devices barcodes to get UMD data",
    ],
    challenges: [
      "Rapidly learning unfamiliar technologies",
      "Understanding and integrating with a complex pre-existing architecture with minimal documentation",
    ],
    github: undefined,
    demo: "https://cooltrax.com/",
    stats: undefined,
  },
  {
    slug: "aldo",
    title: "ALDO",
    category: "Data Management System",
    description:
      "Manage day-to-day data entries by QR code forms in golf sites in Australia.",
    longDescription:
      "ALDO provides customized data forms by JASON schemas to manage organizations' day-to-day data entries and submissions. ALDO supports multiple organizations, and every organization can have a custom form scheme.",
    tech: [
      "React.js",
      "Aws",
      "Typescript",
      "Serverless",
      "SCSS",
      "Terraform",
      "Antd",
      "PWA",
    ],
    technologies: {
      frontend: ["React.js", "Typescript"],
      backend: ["Serverless", "Typescript"],
      database: ["DynamoDB"],
      aws: ["Cognito", "Lambda", "Api Gateway", "Route 53", "S3","Cloudwatch", "Amplify"],
    },
    image: "/images/aldo.png",
    features: [
      "Migrated and added Versioning support for Form schemas to enable generalized support for multiple organizations",
      "Redesign UI components with the new UI design",
      "Design DB schemas, isolated for each customer to ensure data security and compliance",
      "Add pagination components for data table",
    ],
    challenges: [
      "Architected from schemas and data model to support old and new data",
    ],
    github: undefined,
    demo: "https://hello.aldoforms.com/",
    stats: undefined,
  },
  {
    slug: "epar-national-smartmap",
    title: "Epar National Smart Map",
    category: "Golf Sites Profiling",
    description:
      "Golf Sites profiling application in Australia.",
    longDescription: `Embark on a discovery of impactful changemakers as we extend a warm invitation to explore our sustainability map. S.M.A.R.T (Sustainability Management and Reporting Tool) was developed to provide a visually engaging representation of the range of environmental, social, and governance endeavours of organisations. Navigate through the map to uncover a network of sustainable organisations that are actively making a difference in the world. The epar SMART Map serves as a compass guiding you to discover and support entities committed to creating a more sustainable future.`,
    tech: [
      "Next.js",
      "Typescript",
      "Serverless",
      "DynamoDB",
      "MySQL",
      "AWS",
      "Terraform",
      "SCSS",
      "Antd",
    ],
    technologies: {
      frontend: ["Next.js", "Typescript", "SCSS", "Antd"],
      backend: ["Node.js", "Serverless", "JavaScript"],
      database: ["MySQL", "DynamoDB"],
      aws: [
        "Lambda",
        "Api Gateway",
        "Route 53",
        "S3",
        "Cloudwatch",
        "RDS",
        "Amplify",
      ],
      devops: ["Terraform", "CodeBuild"],
    },
    image: "/images/epar-national-smartmap.jpeg",
    features: [
      `Architected and developed the Frontend application with support
        for the capability of creating an isolated application for multiple
        organization types`,
      "Architected and developed an admin dashboard for adding and editing Organization data",
      "Designed and developed Serverless APIS with the data model",
    ],
    challenges: [
      "Rapidly changing requirements and tight deadlines",
      "Working with unapproved UI design"
    ],
    github: undefined,
    demo: "https://eparsmartmap.com/",
    stats: {
      isMobileResponsive: true,
    },
  },
  {
    slug: "epar-connect",
    title: "Epar Connect",
    category: "ERP System",
    description:
      "EPAR Connect is a next-generation platform that centralizes and streamlines EHS (Environment, Health, and Safety) management for organizations of all sizes.",
    longDescription: `EPAR Connect is a next-generation platform that centralizes and streamlines EHS (Environment, Health, and Safety) management for organizations of all sizes. Designed to support businesses managing multiple sites, it features intuitive tools for hazard management, geospatial EHS insights, geofencing, and real-time analytics. Built on secure and scalable cloud architecture, EPAR Connect provides actionable insights through advanced dashboards, helping organizations understand and address risks effectively while meeting compliance requirements. As a developer on the EPAR Connect project, I contribute to designing and enhancing this innovative solution, leveraging modern technologies to empower businesses in achieving their EHS goals and driving safer operational practices.`,
    tech: [
      "React.js",
      "JavaScript",
      "Serverless",
      "MySQL",
      "AWS",
      "Terraform",
      "CSS",
      "Antd",
    ],
    technologies: {
      frontend: ["React.js", "JavaScript", "CSS", "Redux", "Antd"],
      backend: ["Node.js", "Serverless", "JavaScript"],
      database: ["MySQL", "DynamoDB"],
      aws: [
        "Lambda",
        "Api Gateway",
        "Route 53",
        "S3",
        "SQS",
        "SES",
        "Cloudwatch",
        "RDS",
        "Amplify",
      ],
      devops: ["Terraform", "CodeBuild"],
    },
    image: "/images/epar-connect.jpg",
    features: [
      `Planned and migrated the serverless API services from      
        serverless v2 to v3 and created Postman test collection for 
        integrati
        on testing`,
      "Designed, developed and test RestFul API service",
      "Designed and developed new customer-requested features",
    ],
    challenges: ["Optimizing database queries for large amount of data"],
    github: undefined,
    demo: "https://epar.com.au/",
    stats: {
      isMobileResponsive: true,
    },
  },
  {
    slug: "karstation",
    title: "Karstation",
    category: "ERP System",
    description:
      "Workshop management sysetm for vehicle garage and service stations.",
    longDescription: 
        `KarStation is a web and mobile-based application workshop management system for vehicle garages and service stations.
        The workshop owners can manage their garage system through these web and mobile applications. This platform allows General users to manage, maintain, and keep vehicle maintenance records. It will help you to control the whole garage in your hand at a glance.`,
    tech: [
      "React.js",
      "Typescript",
      "Serverless",
      "DynamoDB",
      "AWS",
      "Terraform",
      "SCSS",
      "Antd",
    ],
    technologies: {
      frontend: ["React.js", "Typescript", "SCSS", "Redux", "Antd"],
      backend: ["Node.js", "Serverless", "JavaScript", "GraphQL"],
      database: ["DynamoDB"],
      aws: [
        "Lambda",
        "Api Gateway",
        "Route 53",
        "S3",
        "SQS",
        "SES",
        "Cloudwatch",
        "RDS",
        "Amplify",
      ],
      devops: ["Terraform"],
    },
    image: "/images/karstation.png",
    features: [
      `Designed, developed, and tested Graphql APIs`,
      "Developed the appointment module for the workshop web application",
      "Developed some dashboard analytics features for the workshop web application",
      "Developed a feature for sending estimation reports to customers via email",
      "Collaborate with the team to develop some features on the technician mobile App",
    ],
    challenges: ["Working with uncleared client requirements", "Rapidly changing client requirements"],
    github: undefined,
    demo: "https://www.karstation.com/",
    stats: {
      isMobileResponsive: true,
    },
  },
];
