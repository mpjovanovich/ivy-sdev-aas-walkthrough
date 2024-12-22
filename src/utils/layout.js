export const getCourseNodes = (nodes) => {
  return nodes.map((node) => ({
    ...node,
    // For now...
    position: { x: 0, y: 0 },
    targetPosition: "left",
    sourcePosition: "right",
  }));
};

export const getSemesterNodes = (nodes) => {
  return nodes.map((node) => ({
    ...node,
    position: { x: 0, y: 0 },
  }));
};
