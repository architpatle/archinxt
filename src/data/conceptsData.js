// src/data/conceptsData.js

import {
  Activity,
  Zap,
  Database,
  Layers,
  Cloud,
  Server,
} from "lucide-react";

import latencyImg from "../assets/images/Latency.png";
import cacheImg from "../assets/images/Cache.png";
import pipelineImg from "../assets/images/Pipeline.png";

const conceptsData = [

  // ================= LATENCY =================

  {
    slug: "latency",

    title: "Latency",

    description:
      "The delay between sending a request and receiving a response in a system or network.",

    icon: Activity,

    image: latencyImg,

    keyTakeaways: [
      "Latency is the time delay between request and response",
      "Measured in milliseconds (ms)",
      "Lower latency improves responsiveness",
      "High latency causes slow and laggy systems",
    ],

    sections: [

      {
        heading: "What Is Latency?",
        content: [
          `Latency refers to the time it takes for data to travel from the source to the destination and back.`,
          `It is one of the most important factors that determines how fast a system responds.`,
          `Latency is typically measured in milliseconds (ms).`,
        ],
      },

      {
        heading: "Why Latency Matters",
        content: [
          `Latency directly affects user experience in applications.`,
          `High latency leads to delays, making applications feel slow and unresponsive.`,
          `Low latency is critical in real-time systems such as gaming, video calls, and trading platforms.`,
        ],
      },

      {
        heading: "Factors That Affect Latency",
        list: true,
        content: [
          "Distance between client and server",
          "Network congestion",
          "Server processing time",
          "Database query performance",
          "Inefficient architecture design",
        ],
      },

      {
        heading: "Real World Example",
        content: [
          `When you click a button on a website, the request travels to the server and the response comes back.`,
          `The time taken for this round trip is latency.`,
          `Reducing latency makes applications faster and more responsive.`,
        ],
      },

    ],
  },



  // ================= CACHING =================

  {
    slug: "caching",

    title: "Caching",

    description:
      "Storing frequently accessed data closer to the user to improve performance.",

    icon: Database,

    image: cacheImg,

    keyTakeaways: [
      "Caching stores frequently used data temporarily",
      "Reduces load on servers and databases",
      "Improves application speed significantly",
      "Used in browsers, CDNs, and servers",
    ],

    sections: [

      {
        heading: "What Is Caching?",
        content: [
          `Caching is the process of storing frequently accessed data so it can be retrieved faster.`,
          `Instead of fetching data repeatedly from the original source, the system serves it from the cache.`,
          `This improves performance and reduces system load.`,
        ],
      },

      {
        heading: "Why Caching Is Important",
        content: [
          `Modern applications handle a large number of users simultaneously.`,
          `Caching reduces repeated database queries and API calls.`,
          `This leads to faster responses and better scalability.`,
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
          `When you visit a website, images and files are stored in your browser cache.`,
          `On your next visit, these resources are loaded from cache instead of downloading again.`,
          `This significantly improves page load speed.`,
        ],
      },

    ],
  },



  // ================= PIPELINE =================

  {
    slug: "pipeline",

    title: "Pipeline",

    description:
      "A pipeline processes data in multiple stages enabling faster and more efficient execution.",

    icon: Layers,

    image: pipelineImg,

    keyTakeaways: [
      "Pipelines divide tasks into multiple stages",
      "Each stage processes data sequentially",
      "Improves throughput and efficiency",
      "Widely used in CPU, data processing, and CI/CD",
    ],

    sections: [

      {
        heading: "What Is a Pipeline?",
        content: [
          `A pipeline is a technique where a task is divided into multiple stages.`,
          `Each stage performs a specific operation and passes the result to the next stage.`,
          `This allows multiple stages to process data simultaneously.`,
        ],
      },

      {
        heading: "Where Pipelines Are Used",
        content: [
          `Pipelines are widely used in computing systems to improve efficiency.`,
          `They help break complex processes into smaller manageable steps.`,
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
          "CI/CD pipelines",
        ],
      },

      {
        heading: "Benefits of Pipelines",
        list: true,
        content: [
          "Improved throughput",
          "Parallel processing",
          "Better resource utilization",
          "Reduced idle time",
        ],
      },

      {
        heading: "Real World Example",
        content: [
          `A data pipeline may include steps like data collection, processing, transformation, and storage.`,
          `Each stage performs a specific function while passing data forward.`,
          `This enables efficient handling of large data sets.`,
        ],
      },

    ],
  },

];

export default conceptsData;