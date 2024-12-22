// Theser are "sub flows": https://reactflow.dev/learn/layouting/sub-flows
export const semesterNodes = [
  { id: "F1", type: "group", data: { label: "Semester 1 (Fall)" } },
  { id: "F2", type: "group", data: { label: "Semester 2 (Fall)" } },
  //   { id: "S3", type: "group", data: { label: "Semester 3 (Spring)" } },
  //   { id: "S4", type: "group", data: { label: "Semester 4 (Spring)" } },
  //   { id: "F5", type: "group", data: { label: "Semester 5 (Fall)" } },
  //   { id: "F6", type: "group", data: { label: "Semester 6 (Fall)" } },
  //   { id: "S7", type: "group", data: { label: "Semester 7 (Spring)" } },
  //   { id: "S8", type: "group", data: { label: "Semester 8 (Spring)" } },
];

// TODO: corequisites should have dotted edges
export const courseNodes = [
  {
    id: "DBMS110",
    // Test
    parentId: "F1",
    programCore: ["AAS", "fullStack"],
    programElective: [],
    data: { label: "DBMS 110 - Database Management Systems" },
  },
  {
    id: "SDEV120",
    programCore: ["AAS", "fullStack"],
    programElective: [],
    data: { label: "SDEV 120 - Computing Logic" },
  },
  //   {
  //     id: "SDEV140",
  //     programCore: ["AAS", "fullStack"],
  //     programElective: [],
  //     data: { label: "SDEV 140 - Introduction to Software Development" },
  //   },
  //   {
  //     id: "SDEV153",
  //     programCore: ["AAS", "fullStack"],
  //     programElective: [],
  //     data: { label: "SDEV 153 - Website Development" },
  //   },
  //   {
  //     id: "SDEV155",
  //     programCore: ["fullStack"],
  //     programElective: ["AAS"],
  //     data: { label: "SDEV 155 - Content Management Systems" },
  //   },
  //   //   { id: "SDEV160", data: { label: "SDEV 160 - Programming With Data" } },
  //   //   { id: "SDEV200", data: { label: "SDEV 200 - Java" } },
  //   //   {
  //   //     id: "SDEV210",
  //   //     data: { label: "SDEV 210 - Systems Programming with Rust" },
  //   //   },
  //   //   { id: "SDEV230", data: { label: "SDEV 230 - C++" } },
  //   //   { id: "SDEV240", data: { label: "SDEV 240 - C#" } },
  //   //   { id: "SDEV245", data: { label: "SDEV 245 - Security and Secure Coding" } },
  //   //   //   {
  //   //   //     id: "SDEV248",
  //   //   //     data: { label: "SDEV 248 - Advanced Simulation and Game Design" },
  //   //   //   },
  //   //   {
  //   //     id: "SDEV250",
  //   //     data: {
  //   //       label: "SDEV 250 - JavaScript/TypeScript for Inter-Process Development",
  //   //     },
  //   //   },
  //   {
  //     id: "SDEV255",
  //     programCore: ["fullStack"],
  //     programElective: ["AAS"],
  //     data: { label: "SDEV 255 - Web Application Development" },
  //   },
  //   {
  //     id: "SDEV257",
  //     programCore: ["fullStack"],
  //     programElective: ["AAS"],
  //     data: { label: "SDEV 257 - Hybrid Apps and Frameworks" },
  //   },
  //   //   //   {
  //   //   //     id: "SDEV260",
  //   //   //     data: { label: "SDEV 260 - iOS Swift Application Development" },
  //   //   //   },
  //   //   {
  //   //     id: "SDEV264",
  //   //     data: { label: "SDEV 264 - Mobile Application Development" },
  //   //   },
  //   {
  //     id: "SDEV265",
  //     programCore: ["fullStack"],
  //     programElective: ["AAS"],
  //     data: { label: "SDEV 265 - Systems/Software Analysis and Projects" },
  //   },
  //   //   //   { id: "SDEV148", data: { label: "SDEV 148 - Intro to Game Development" } },
  //   //   { id: "SDEV27X", data: { label: "SDEV 27X - Certification" } },
  //   //   { id: "SVAD150", data: { label: "SVAD 150 - Cloud Foundations" } },
  //   {
  //     id: "VISC104",
  //     programCore: ["AAS", "fullStack"],
  //     programElective: [],
  //     data: { label: "VISC 104 - User Experience/Interface (UX/UI) I" },
  //   },
  //   {
  //     id: "VISC202",
  //     data: { label: "VISC 202 - User Experience/Interface (UX/UI) Design II" },
  //   },
  //   //   {
  //   //     id: "CPIN269",
  //   //     data: { label: "CPIN 269 - Information Technology Project Management" },
  //   //   },
  //   //   {
  //   //     id: "CPIN279",
  //   //     data: { label: "CPIN 279 - Information Technology Capstone" },
  //   //   },
  //   //   {
  //   //     id: "INFM109",
  //   //     data: { label: "INFM 109 - Informatics and Human-Computer Interaction" },
  //   //   },
  //   //   {
  //   //     id: "INFM209",
  //   //     data: { label: "INFM 209 - Informatics and Human-Computer Interaction" },
  //   //   },
];

export const courseEdges = [
  //   { id: "e-110-255", source: "DBMS110", target: "SDEV255" }, // This is a coreq, but that's ridiculous
  //   { id: "e-120-140", source: "SDEV120", target: "SDEV140" },
  //   { id: "e-120-153", source: "SDEV120", target: "SDEV153", corequisite: true },
  //   { id: "e-120-255", source: "SDEV120", target: "SDEV255" }, // This is a coreq, but that's ridiculous
  //   //   { id: "e-140-160", source: "SDEV140", target: "SDEV160" },
  //   //   { id: "e-140-200", source: "SDEV140", target: "SDEV200" },
  //   //   { id: "e-140-210", source: "SDEV140", target: "SDEV210" },
  //   //   { id: "e-140-230", source: "SDEV140", target: "SDEV230" },
  //   //   { id: "e-140-240", source: "SDEV140", target: "SDEV240" },
  //   //   { id: "e-140-250", source: "SDEV140", target: "SDEV250" },
  //   //   { id: "e-140-260", source: "SDEV140", target: "SDEV260" },
  //   //   { id: "e-140-269", source: "SDEV140", target: "CPIN269" },
  //   //   { id: "e-200-245", source: "SDEV200", target: "SDEV245" },
  //   //   { id: "e-200-264", source: "SDEV200", target: "SDEV264" },
  //   { id: "e-200-265", source: "SDEV200", target: "SDEV265" },
  //   //   { id: "e-148-248", source: "SDEV148", target: "SDEV248" },
  //   //   { id: "e-140-248", source: "SDEV140", target: "SDEV248" },
  //   { id: "e-153-255", source: "SDEV153", target: "SDEV255" }, // This is a coreq, but that's ridiculous
  //   { id: "e-255-257", source: "SDEV255", target: "SDEV257" },
  //   { id: "e-153-155", source: "SDEV153", target: "SDEV155" },
  //   { id: "e-104-202", source: "VISC104", target: "VISC202" },
  //   //   { id: "e-109-209", source: "INFM109", target: "INFM209" },
];
