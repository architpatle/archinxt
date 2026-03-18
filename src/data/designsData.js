// src/data/designsData.js

import wildcapHero from "../assets/images/Wildcap.png";
import neurosyncHero from "../assets/images/Neurosync.png";
import sustainifyHero from "../assets/images/Sustainify.png";

// 👉 Add more images (you will create these later)

import wildcap1 from "../assets/images/Wildcap.png";
import wildcap2 from "../assets/images/Wildcap.png";
import wildcap3 from "../assets/images/Wildcap.png";
import wildcap4 from "../assets/images/Wildcap.png";

import neuro1 from "../assets/images/Neurosync.png";
import neuro2 from "../assets/images/Neurosync.png";
import neuro3 from "../assets/images/Neurosync.png";
import neuro4 from "../assets/images/Neurosync.png";

import sustain1 from "../assets/images/Sustainify.png";
import sustain2 from "../assets/images/Sustainify.png";
import sustain3 from "../assets/images/Sustainify.png";
import sustain4 from "../assets/images/Sustainify.png";

const designsData = [

  // ================= WILDCAP =================

  {
    slug: "wildcap-safari-platform",

    title: "WildCap Safari Platform",

    description:
      "A minimal and immersive hero section designed for a wildlife safari experience.",

    image: wildcapHero,

    sections: [

      {
        type: "text",
        heading: "Overview",
        content: [
          "WildCap focuses on creating an immersive safari experience through cinematic visuals and minimal UI."
        ]
      },

      {
        type: "image",
        image: wildcap1
      },

      {
        type: "text",
        heading: "Design Approach",
        content: [
          "The design uses earthy tones, large visuals, and minimal components to keep the focus on experience."
        ]
      },

      {
        type: "grid",
        images: [wildcap2, wildcap3]
      },

      {
        type: "image",
        image: wildcap4
      }

    ]
  },



  // ================= NEUROSYNC =================

  {
    slug: "neurosync-ai-platform",

    title: "NeuroSync AI Platform",

    description:
      "A futuristic UI designed for an AI-powered digital platform.",

    image: neurosyncHero,

    sections: [

      {
        type: "text",
        heading: "Overview",
        content: [
          "NeuroSync presents a modern AI dashboard with a focus on clarity and futuristic aesthetics."
        ]
      },

      {
        type: "image",
        image: neuro1
      },

      {
        type: "text",
        heading: "Design Approach",
        content: [
          "Dark theme with neon gradients and glassmorphism enhances the AI-driven feel."
        ]
      },

      {
        type: "grid",
        images: [neuro2, neuro3]
      },

      {
        type: "image",
        image: neuro4
      }

    ]
  },



  // ================= SUSTAINIFY =================

  {
    slug: "sustainify-innovation-platform",

    title: "Sustainify Innovation Platform",

    description:
      "A clean and eco-focused UI for sustainable innovation.",

    image: sustainifyHero,

    sections: [

      {
        type: "text",
        heading: "Overview",
        content: [
          "Sustainify is designed to communicate sustainability through clean layouts and natural color tones."
        ]
      },

      {
        type: "image",
        image: sustain1
      },

      {
        type: "text",
        heading: "Design Approach",
        content: [
          "Soft greens, minimal structure, and clear spacing create a calm and eco-friendly experience."
        ]
      },

      {
        type: "grid",
        images: [sustain2, sustain3]
      },

      {
        type: "image",
        image: sustain4
      }

    ]
  }

];

export default designsData;