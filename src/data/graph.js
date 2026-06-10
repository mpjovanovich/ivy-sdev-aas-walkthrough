// Theser are "sub flows": https://reactflow.dev/learn/layouting/sub-flows
export const semesterNodes = [
  { id: "F1", type: "semester", data: { label: "S1 (Fall)" } },
  { id: "F2", type: "semester", data: { label: "S2 (Fall)" } },
  { id: "S3", type: "semester", data: { label: "S3 (Spring)" } },
  { id: "S4", type: "semester", data: { label: "S4 (Spring)" } },
  { id: "F5", type: "semester", data: { label: "S5 (Fall)" } },
  { id: "F6", type: "semester", data: { label: "S6 (Fall)" } },
  { id: "S7", type: "semester", data: { label: "S7 (Spring)" } },
  { id: "S8", type: "semester", data: { label: "S8 (Spring)" } },
];
export const courseNodes = [
  /* ********************
   * Technical Core
   ******************** */
  // {
  //   id: "CSCI101",
  //   partOfProgram: "",
  //   creditHours: 3,
  //   data: { label: "CSCI 101 - Computer Science I" },
  // },
  // {
  //   id: "CSCI210",
  //   partOfProgram: "",
  //   creditHours: 3,
  //   data: { label: "CSCI 210 - Database Systems" },
  // },
  {
    id: "CPIN269",
    partOfProgram: "Technical Core",
    creditHours: 1,
    data: { label: "CPIN 269 - Information Technology Project Management" },
  },
  {
    id: "CPIN279",
    partOfProgram: "Technical Core",
    creditHours: 3,
    data: { label: "CPIN 279 - Information Technology Capstone" },
  },
  {
    id: "DBMS110",
    partOfProgram: "Technical Core",
    creditHours: 3,
    data: { label: "DBMS 110 - Database Management Systems" },
  },
  {
    id: "INFM109",
    partOfProgram: "Technical Core",
    creditHours: 3,
    data: { label: "INFM 109 - Informatics and Human-Computer Interaction" },
  },
  {
    id: "SDEV120",
    partOfProgram: "Technical Core",
    creditHours: 3,
    data: { label: "SDEV 120 - Computing Logic" },
  },
  {
    id: "SDEV140",
    partOfProgram: "Technical Core",
    creditHours: 3,
    data: { label: "SDEV 140 - Introduction to Software Development" },
  },
  {
    id: "SDEV153",
    partOfProgram: "Technical Core",
    creditHours: 3,
    data: { label: "SDEV 153 - Website Development" },
  },
  // {
  //   id: "SDEV160",
  //   partOfProgram: "Technical Core",
  //   creditHours: 3,
  //   data: { label: "SDEV 160 - Programming With Data" },
  // },
  {
    id: "SDEV265",
    partOfProgram: "Technical Core",
    creditHours: 3,
    data: { label: "SDEV 265 - Systems/Software Analysis and Projects" },
  },
  {
    id: "SVAD150",
    partOfProgram: "Technical Core",
    creditHours: 3,
    data: { label: "SVAD 150 - Cloud Foundations" },
  },

  /* ********************
   * Selective 1
   ******************** */
  // {
  //   id: "CSCI201",
  //   partOfProgram: "",
  //   creditHours: 3,
  //   data: { label: "CSCI 201 - Computer Science II" },
  // },
  {
    id: "SDEV200",
    partOfProgram: "Selective 1",
    creditHours: 3,
    data: { label: "SDEV 200 - Software Development with Java" },
  },
  {
    id: "SDEV210",
    partOfProgram: "Selective 1",
    creditHours: 3,
    data: { label: "SDEV 210 - Systems Programming with Rust" },
  },
  {
    id: "SDEV230",
    partOfProgram: "Selective 1",
    creditHours: 3,
    data: { label: "SDEV 230 - Software Development using C++" },
  },
  {
    id: "SDEV240",
    partOfProgram: "Selective 1",
    creditHours: 3,
    data: { label: "SDEV 240 - Software Development Using C#" },
  },
  {
    id: "SDEV250",
    partOfProgram: "Selective 1",
    creditHours: 3,
    data: {
      label: "SDEV 250 - JavaScript/TypeScript for Inter-Process Development",
    },
  },

  /* ********************
   * Selective 2
   ******************** */
  {
    id: "SDEV143",
    partOfProgram: "Selective 2",
    creditHours: 3,
    data: { label: "SDEV 143 - Git Version Control Systems" },
  },
  {
    id: "SDEV148",
    partOfProgram: "Selective 2",
    creditHours: 3,
    data: { label: "SDEV 148 - Intro to Game Development" },
  },
  {
    id: "SDEV220",
    partOfProgram: "Selective 2",
    creditHours: 3,
    data: { label: "SDEV 220 - Software Development Using Python" },
  },
  {
    id: "SDEV255",
    partOfProgram: "Selective 2",
    creditHours: 3,
    data: { label: "SDEV 255 - Web Application Development" },
  },
  {
    id: "SDEV260",
    partOfProgram: "Selective 2",
    creditHours: 3,
    data: { label: "SDEV 260 - iOS Swift Application Development" },
  },
  {
    id: "SDEV264",
    partOfProgram: "Selective 2",
    creditHours: 3,
    data: { label: "SDEV 264 - Mobile Application Development" },
  },

  /* ********************
   * Selective 3
   ******************** */
  // AAIT 110 - Artificial Intelligence Essentials CREDIT HOURS MIN: 3
  // AAIT 261 - AWS AI Practitioner Certification CREDIT HOURS MIN: 1
  // CPIN 270 - Workforce Preparation: Comptia Project + Certification CREDIT HOURS MIN: 1
  // CPIN 280 - Computing and Informatics CO-OP/Internship/Externship CREDIT HOURS MIN: 1
  // CSCI 202 - Data Structures CREDIT HOURS MIN: 3
  {
    id: "INFM209",
    partOfProgram: "Selective 3",
    creditHours: 3,
    data: { label: "INFM 209 - Informatics and Human-Computer Interaction" },
  },
  {
    id: "SDEV155",
    partOfProgram: "Selective 3",
    creditHours: 3,
    data: { label: "SDEV 155 - Content Management Systems" },
  },
  // SDEV ??? - AI course, 1 creditHour
  // SDEV 243 - Software Resilience and Reliability, 1 creditHour
  {
    id: "SDEV245",
    partOfProgram: "Selective 3",
    creditHours: 3,
    data: { label: "SDEV 245 - Security and Secure Coding" },
  },
  {
    id: "SDEV248",
    partOfProgram: "Selective 3",
    creditHours: 3,
    data: { label: "SDEV 248 - Advanced Simulation and Game Design" },
  },
  {
    id: "SDEV257",
    partOfProgram: "Selective 3",
    creditHours: 3,
    data: { label: "SDEV 257 - Hybrid Apps and Frameworks" },
  },
  // SDEV 266 - Advanced iOS Swift Application Development CREDIT HOURS MIN: 3
  // SDEV 268 - Algorithms and Design Patterns CREDIT HOURS MIN: 3
  {
    id: "SDEV27X",
    partOfProgram: "Selective 3",
    creditHours: 1,
    data: { label: "SDEV 27X - Software Certification" },
  },
  {
    id: "VISC104",
    partOfProgram: "Selective 3",
    creditHours: 3,
    data: { label: "VISC 104 - User Experience/Interface (UX/UI) I" },
  },
  {
    id: "VISC202",
    partOfProgram: "Selective 3",
    creditHours: 3,
    data: { label: "VISC 202 - User Experience/Interface (UX/UI) Design II" },
  },
];

export const courseEdges = [
  { id: "e-104-153", source: "VISC104", target: "SDEV153" },
  { id: "e-104-202", source: "VISC104", target: "VISC202" },
  { id: "e-109-209", source: "INFM109", target: "INFM209" },
  { id: "e-110-255", source: "DBMS110", target: "SDEV255" },
  { id: "e-120-140", source: "SDEV120", target: "SDEV140" },
  { id: "e-120-143", source: "SDEV120", target: "SDEV143" },
  { id: "e-120-153", source: "SDEV120", target: "SDEV153" },
  { id: "e-120-255", source: "SDEV120", target: "SDEV255" },
  { id: "e-140-160", source: "SDEV140", target: "SDEV160" },
  { id: "e-140-200", source: "SDEV140", target: "SDEV200" },
  { id: "e-140-210", source: "SDEV140", target: "SDEV210" },
  { id: "e-140-220", source: "SDEV140", target: "SDEV220" },
  { id: "e-140-230", source: "SDEV140", target: "SDEV230" },
  { id: "e-140-240", source: "SDEV140", target: "SDEV240" },
  { id: "e-140-250", source: "SDEV140", target: "SDEV250" },
  { id: "e-140-248", source: "SDEV140", target: "SDEV248" },
  { id: "e-140-255", source: "SDEV140", target: "SDEV255" },
  { id: "e-140-260", source: "SDEV140", target: "SDEV260" },
  { id: "e-140-269", source: "SDEV140", target: "CPIN269" },
  { id: "e-148-248", source: "SDEV148", target: "SDEV248" },
  { id: "e-153-155", source: "SDEV153", target: "SDEV155" },
  { id: "e-153-255", source: "SDEV153", target: "SDEV255" },
  { id: "e-2xx-245", source: "SDEV2xx", target: "SDEV245" },
  { id: "e-2xx-264", source: "SDEV2xx", target: "SDEV264" },
  { id: "e-2xx-265", source: "SDEV2xx", target: "SDEV265" },
  { id: "e-255-257", source: "SDEV255", target: "SDEV257" },
  { id: "e-255-265", source: "SDEV255", target: "SDEV265", recommended: true },
];
