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
    slug: "epar-connect",
    title: "Epar Connect",
    category: "ERP System",
    description:
      "EPAR Connect is a next-generation platform that centralizes and streamlines EHS (Environment, Health, and Safety) management for organizations of all sizes.",
    longDescription:
      `EPAR Connect is a next-generation platform that centralizes and streamlines EHS (Environment, Health, and Safety) management for organizations of all sizes. Designed to support businesses managing multiple sites, it features intuitive tools for hazard management, geospatial EHS insights, geofencing, and real-time analytics. Built on secure and scalable cloud architecture, EPAR Connect provides actionable insights through advanced dashboards, helping organizations understand and address risks effectively while meeting compliance requirements. As a developer on the EPAR Connect project, I contribute to designing and enhancing this innovative solution, leveraging modern technologies to empower businesses in achieving their EHS goals and driving safer operational practices.`,
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
      aws: ["Lambda", "Api Gateway", "Route 53", "S3", "SQS", "SES", "Cloudwatch", "RDS", "Amplify"],
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
    challenges: [
      "Optimizing database queries for large amount of data",
    ],
    github: undefined,
    demo: "https://epar.com.au/",
    stats: {
        isMobileResponsive: true
    },
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
      "Designed and developed scan UMD devices barcodes to get UMD data",
    ],
    challenges: [
      "Rapidly learning unfamiliar technologies",
      "Understanding and integrating with a complex pre-existing architecture with minimal documentation",
    ],
    github: undefined,
    demo: "https://cooltrax.com/",
    stats: undefined,
  },
];
