import dagre from "dagre";

// This file styles and lays out the graph
// TODO: extract styling information for nodes and edges; don't hardcode them

const getNodeStyle = (node) => {
  // TODO: style dynamically based on node attributes
  return {
    background:
      node.programCore && node.programCore.includes("fullStack")
        ? "tan"
        : "white",
    // border: "1px solid #ccc",
    // borderRadius: "5px",
    // padding: "10px",
  };
};

export const getLayoutedElements = (nodes, edges, options = {}) => {
  const dagreGraph = new dagre.graphlib.Graph();

  // Configure the graph
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({
    rankdir: options.direction || "LR", // TB = top to bottom, LR = left to right
    nodesep: options.nodeSeparation || 50, // "gap" between nodes in the same rank
    ranksep: options.rankSeparation || 50, // "gap" between ranks in the matrix
  });

  // Add nodes to the graph with their dimensions
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: options.nodeWidth || 172,
      height: options.nodeHeight || 36,
    });
  });

  // Add edges
  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  // Apply layout
  dagre.layout(dagreGraph);

  // Get the positioned nodes
  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      style: getNodeStyle(node),
      position: {
        x: nodeWithPosition.x - (options.nodeWidth || 172) / 2,
        y: nodeWithPosition.y - (options.nodeHeight || 36) / 2,
      },
      targetPosition: "left",
      sourcePosition: "right",
    };
  });

  // Return edges with the desired type
  const layoutedEdges = edges.map((edge) => ({
    ...edge,
    type: "smoothstep",
    style: { strokeDasharray: edge.corequisite ? "5,5" : undefined },
  }));

  return { nodes: layoutedNodes, edges: layoutedEdges };
};
