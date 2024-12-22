import dagre from "dagre";

export const getLayoutedElements = (nodes, edges, options = {}) => {
  const dagreGraph = new dagre.graphlib.Graph();

  // Configure the graph
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({
    rankdir: options.direction || "LR", // TB = top to bottom, LR = left to right
    nodesep: options.nodeSeparation || 50,
    ranksep: options.rankSeparation || 50,
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
      position: {
        x: nodeWithPosition.x - (options.nodeWidth || 172) / 2,
        y: nodeWithPosition.y - (options.nodeHeight || 36) / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};
