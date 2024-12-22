import { useCallback, useState } from "react";
import {
  ReactFlow,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { courseNodes, courseEdges, semesterNodes } from "./data/graph";
import { getCourseNodes, getSemesterNodes } from "./utils/layout";

const rfStyle = {
  backgroundColor: "#D0C0F7",
};

function Flow() {
  const allNodes = [
    ...getCourseNodes(courseNodes),
    ...getSemesterNodes(semesterNodes),
  ];
  const [nodes, setNodes] = useState(allNodes);
  const [edges, setEdges] = useState(courseEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      style={rfStyle}
      attributionPosition="top-right"
      nodesConnectable={false}
      fitView
    >
      <Background />
    </ReactFlow>
  );
}

export default Flow;
