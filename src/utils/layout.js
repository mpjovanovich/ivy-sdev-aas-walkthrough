const NODE_WIDTH = 150;
const NODE_HEIGHT = 50;

import { SEMESTER_WIDTH, SEMESTER_HEIGHT } from "../components/SemesterNode";

export const getCourseNodes = (nodes) => {
  let currentX = 0;
  return nodes.map((node) => {
    const newNode = {
      ...node,
      position: { x: currentX, y: 0 },
      targetPosition: "left",
      sourcePosition: "right",
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
    };
    currentX += NODE_WIDTH;
    return newNode;
  });
};

export const getSemesterNodes = (nodes) => {
  let currentX = 0;
  return nodes.map((node) => {
    const newNode = {
      ...node,
      position: { x: currentX, y: 0 },
      draggable: false,
      zIndex: -1,
      style: {
        background: "none",
        border: "none",
        padding: 0,
        width: "auto",
        height: "auto",
      },
    };
    currentX += SEMESTER_WIDTH * 1.5;
    return newNode;
  });
};
