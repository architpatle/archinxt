// src/data/conceptsData.js

import {
  Activity,
  Zap,
  Database,
  Layers,
  Cloud,
  Server,
} from "lucide-react";

import latencyImg from "../assets/images/Cache.png";
import cacheImg from "../assets/images/Cache.png";
import pipelineImg from "../assets/images/Pipeline.png";

const conceptsData = [

  {
    slug: "latency",

    title: "Latency",

    description:
      "The delay between sending a request and receiving a response in a system or network.",

    icon: Activity,

    image: latencyImg,

    sections: [

      {
        heading: "What Is Latency?",
        content: [
          `Latency refers to the time delay between a request being sent and the response being received.`,
          `In networking and computing systems, latency is usually measured in milliseconds (ms).`,
          `Lower latency means faster system responses and a smoother user experience.`,
        ],
      },

      {
        heading: "Why Latency Matters",
        content: [
          `Latency directly impacts how responsive an application feels to users.`,
          `Applications like online gaming, video conferencing, and financial trading require extremely low latency.`,
          `Even small increases in latency can lead to noticeable delays in user interactions.`,
        ],
      },

      {
        heading: "Factors That Affect Latency",
        list: true,
        content: [
          "Network distance between client and server",
          "Server processing time",
          "Database query performance",
          "Network congestion",
          "Inefficient system architecture",
        ],
      },

      {
        heading: "Real World Example",
        content: [
          `When a user clicks a button on a website, the request travels to a server and the server sends back a response.`,
          `The time taken for this entire round trip is the latency.`,
          `Reducing latency improves the overall performance and responsiveness of applications.`,
        ],
      },

    ],
  },



  {
    slug: "caching",

    title: "Caching",

    description:
      "Storing frequently accessed data closer to the user to improve performance.",

    icon: Database,

    image: cacheImg,

    sections: [

      {
        heading: "What Is Caching?",
        content: [
          `Caching is the process of storing frequently accessed data temporarily so it can be retrieved faster.`,
          `Instead of repeatedly requesting data from a database or API, the system can return the cached version.`,
          `This significantly improves application speed and reduces server load.`,
        ],
      },

      {
        heading: "Why Caching Is Important",
        content: [
          `Modern applications often serve millions of users simultaneously.`,
          `Caching helps reduce the number of expensive database queries and API calls.`,
          `This leads to faster responses and better system scalability.`,
        ],
      },

      {
        heading: "Types of Caching",
        list: true,
        content: [
          "Browser Cache",
          "CDN Cache",
          "Application Cache",
          "Database Cache",
        ],
      },

      {
        heading: "Real World Example",
        content: [
          `When you visit a website for the first time, the browser downloads images, stylesheets, and scripts.`,
          `On subsequent visits, many of these files are loaded from the browser cache instead of the server.`,
          `This dramatically reduces loading time and improves user experience.`,
        ],
      },

    ],
  },



  {
    slug: "pipeline",

    title: "Pipeline",

    description:
      "A pipeline processes data in multiple stages enabling faster and more efficient processing.",

    icon: Layers,

    image: pipelineImg,

    sections: [

      {
        heading: "What Is a Pipeline?",
        content: [
          `A pipeline is a technique where a complex task is divided into multiple sequential stages.`,
          `Each stage performs a specific operation and passes the result to the next stage.`,
          `This allows different stages to process data simultaneously, improving system efficiency.`,
        ],
      },

      {
        heading: "Where Pipelines Are Used",
        content: [
          `Pipelines are widely used across many computing systems.`,
          `They help process data efficiently by breaking work into smaller stages.`,
        ],
      },

      {
        heading: "Common Applications of Pipelines",
        list: true,
        content: [
          "CPU instruction processing",
          "Data processing systems",
          "Machine learning workflows",
          "Video processing pipelines",
          "CI/CD build pipelines",
        ],
      },

      {
        heading: "Benefits of Pipelines",
        list: true,
        content: [
          "Improved throughput",
          "Parallel execution of tasks",
          "Better resource utilization",
          "Reduced idle time for processors",
        ],
      },

      {
        heading: "Example of a Data Pipeline",
        content: [
          `A typical data pipeline might include stages like data ingestion, data cleaning, transformation, and storage.`,
          `Each stage performs a specific operation while passing processed data to the next stage.`,
          `This allows large volumes of data to be processed efficiently.`,
        ],
      },

    ],
  },

];

export default conceptsData;