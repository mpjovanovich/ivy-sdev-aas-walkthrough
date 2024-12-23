const NODE_WIDTH = 150;
const NODE_HEIGHT = 50;

import dagre from "dagre";

import {
  SEMESTER_HEIGHT,
  SEMESTER_WIDTH,
  SEMESTER_PADDING,
} from "../components/SemesterNode";

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

export const getCourseNodes = (nodes, edges, semesterNodes) => {
  const dagreGraph = new dagre.graphlib.Graph();

  // Configure the graph
  dagreGraph.setGraph({
    rankdir: "LR",
    align: "UL",
    nodesep: 50,
    ranksep: 80,
    marginx: 50,
    marginy: 50,
    // ranker: "network-simplex", // More compact layout algorithm
  });
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  // Add nodes
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
    });
  });

  // Add edges
  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  // Calculate layout
  dagre.layout(dagreGraph);

  // Return nodes with calculated positions
  return (
    nodes
      // Ignore anything that doesn't currently have a semester assigned to it.
      .filter((node) => node.parentId)
      .map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        console.log(
          node.id,
          node.parentId,
          nodeWithPosition.y - NODE_HEIGHT / 2
        );
        return {
          ...node,
          position: {
            // These will already be on the x value of their parents, so just add padding
            x: SEMESTER_PADDING,
            // y: nodeWithPosition.y - NODE_HEIGHT / 2,
            y: Math.min(
              nodeWithPosition.y - NODE_HEIGHT / 2,
              SEMESTER_HEIGHT - SEMESTER_PADDING
            ),
          },
          targetPosition: "left",
          sourcePosition: "right",
          style: {
            borderWidth: node.programCore.includes("AAS") ? 3 : 1,
            background: node.programCore.includes("fullStack") ? "#ddd" : "",
            width: NODE_WIDTH,
            minheight: NODE_HEIGHT,
          },
          // extent: "parent",
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
      style: {
        background: "none",
        border: "none",
        padding: 0,
        width: "auto",
        height: "auto",
      },
      // extent: "parent",
    };
    currentX += SEMESTER_WIDTH * 1.5;
    return newNode;
  });
};
