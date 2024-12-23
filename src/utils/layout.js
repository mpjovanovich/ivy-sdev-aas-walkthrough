const NODE_WIDTH = 150;
const NODE_HEIGHT = 50;
const NODE_VERTICAL_MARGIN = 40;

import { SEMESTER_WIDTH, SEMESTER_PADDING } from "../components/SemesterNode";

export const getCourseEdges = (edges) => {
  return edges.map((edge) => {
    return {
      ...edge,
      style: {
        stroke: "#aaa",
        strokeWidth: 2,
        strokeDasharray: edge.corequisite ? "5 5" : "none",
      },
    };
  });
};

export const getCourseNodes = (nodes, semesterNodes) => {
  // This array keeps track of the y position of each semester node.
  const startY = 60; // Probably should be calculated, but this is good enough for this little app.
  const semesterYPositions = {
    F1: startY,
    F2: startY,
    S3: startY,
    S4: startY,
    F5: startY,
    F6: startY,
    S7: startY,
    S8: startY,
  };

  return (
    nodes
      // Ignore anything that doesn't currently have a semester assigned to it.
      .filter((node) => node.parentId)
      .map((node) => {
        const y = semesterYPositions[node.parentId];
        semesterYPositions[node.parentId] += NODE_HEIGHT + NODE_VERTICAL_MARGIN;

        return {
          ...node,
          position: {
            x: SEMESTER_PADDING,
            y: y,
          },
          targetPosition: "left",
          sourcePosition: "right",
          style: {
            borderWidth: node.programCore.includes("AAS") ? 3 : 1,
            background: node.programCore.includes("fullStack") ? "#ddd" : "",
            width: NODE_WIDTH,
            minheight: NODE_HEIGHT,
          },
        };
      })
  );
};

export const getSemesterNodes = (nodes) => {
  let currentX = 0;
  return nodes.map((node) => {
    const newNode = {
      ...node,
      position: { x: currentX, y: 0 },
      draggable: false,
      zIndex: -1,
    };
    currentX += (SEMESTER_WIDTH + SEMESTER_PADDING) * 1.2;
    return newNode;
  });
};
