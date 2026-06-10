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
  //   partOfProgram: [],
  //   data: { label: "CSCI 101 - Computer Science I" },
  // },
  // {
  //   id: "CSCI210",
  //   partOfProgram: [],
  //   data: { label: "CSCI 210 - Database Systems" },
  // },
  {
    id: "CPIN269",
    partOfProgram: ["TechnicalCore"],
    data: { label: "CPIN 269 - Information Technology Project Management" },
  },
  {
    id: "CPIN279",
    partOfProgram: ["TechnicalCore"],
    data: { label: "CPIN 279 - Information Technology Capstone" },
  },
  {
    id: "DBMS110",
    partOfProgram: ["TechnicalCore"],
    data: { label: "DBMS 110 - Database Management Systems" },
  },
  {
    id: "INFM109",
    partOfProgram: ["TechnicalCore"],
    data: { label: "INFM 109 - Informatics and Human-Computer Interaction" },
  },
  {
    id: "SDEV120",
    partOfProgram: ["TechnicalCore"],
    data: { label: "SDEV 120 - Computing Logic" },
  },
  {
    id: "SDEV140",
    partOfProgram: ["TechnicalCore"],
    data: { label: "SDEV 140 - Introduction to Software Development" },
  },
  {
    id: "SDEV153",
    partOfProgram: ["TechnicalCore"],
    data: { label: "SDEV 153 - Website Development" },
  },
  {
    id: "SDEV160",
    partOfProgram: ["TechnicalCore"],
    data: { label: "SDEV 160 - Programming With Data" },
  },
  {
    id: "SDEV265",
    partOfProgram: ["TechnicalCore"],
    data: { label: "SDEV 265 - Systems/Software Analysis and Projects" },
  },
  {
    id: "SVAD150",
    partOfProgram: ["TechnicalCore"],
    data: { label: "SVAD 150 - Cloud Foundations" },
  },

  /* *********** TODO ********* */

  {
    id: "INFM209",
    partOfProgram: [],
    data: { label: "INFM 209 - Informatics and Human-Computer Interaction" },
  },
  {
    id: "SDEV148",
    partOfProgram: [],
    data: { label: "SDEV 148 - Intro to Game Development" },
  },
  {
    id: "SDEV155",
    partOfProgram: [],
    data: { label: "SDEV 155 - Content Management Systems" },
  },
  // {
  //   id: "SDEV200",
  //   partOfProgram: [],
  //   data: { label: "SDEV 200 - Java" },
  // },
  // {
  //   id: "SDEV210",
  //   partOfProgram: [],
  //   data: { label: "SDEV 210 - Systems Programming with Rust" },
  // },
  // {
  //   id: "SDEV230",
  //   partOfProgram: [],
  //   data: { label: "SDEV 230 - C++" },
  // },
  {
    id: "SDEV240",
    partOfProgram: [],
    data: { label: "SDEV 240 - C#" },
  },
  {
    id: "SDEV245",
    partOfProgram: [],
    data: { label: "SDEV 245 - Security and Secure Coding" },
  },
  {
    id: "SDEV248",
    partOfProgram: [],
    data: { label: "SDEV 248 - Advanced Simulation and Game Design" },
  },
  // {
  //   id: "SDEV250",
  //   partOfProgram: [],
  //   data: {
  //     label: "SDEV 250 - JavaScript/TypeScript for Inter-Process Development",
  //   },
  // },
  {
    id: "SDEV255",
    partOfProgram: [],
    data: { label: "SDEV 255 - Web Application Development" },
  },
  {
    id: "SDEV257",
    partOfProgram: [],
    data: { label: "SDEV 257 - Hybrid Apps and Frameworks" },
  },
  // {
  //   id: "SDEV260",
  //   partOfProgram: [],
  //   data: { label: "SDEV 260 - iOS Swift Application Development" },
  // },
  {
    id: "SDEV264",
    partOfProgram: [],
    data: { label: "SDEV 264 - Mobile Application Development" },
  },
  {
    id: "SDEV27X",
    partOfProgram: [],
    data: { label: "SDEV 27X - Certification" },
  },
  {
    id: "VISC104",
    partOfProgram: [],
    data: { label: "VISC 104 - User Experience/Interface (UX/UI) I" },
  },
  {
    id: "VISC202",
    partOfProgram: [],
    data: { label: "VISC 202 - User Experience/Interface (UX/UI) Design II" },
  },
];

export const courseEdges = [
  { id: "e-104-153", source: "VISC104", target: "SDEV153", recommended: true },
  { id: "e-104-202", source: "VISC104", target: "VISC202" },
  { id: "e-109-209", source: "INFM109", target: "INFM209" },
  { id: "e-110-255", source: "DBMS110", target: "SDEV255" },
  { id: "e-120-140", source: "SDEV120", target: "SDEV140" },
  { id: "e-120-153", source: "SDEV120", target: "SDEV153", corequisite: true },
  { id: "e-120-255", source: "SDEV120", target: "SDEV255" },
  { id: "e-140-160", source: "SDEV140", target: "SDEV160" },
  { id: "e-140-2xx", source: "SDEV140", target: "SDEV2xx" },
  { id: "e-140-248", source: "SDEV140", target: "SDEV248" },
  { id: "e-140-255", source: "SDEV140", target: "SDEV255", recommended: true },
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
