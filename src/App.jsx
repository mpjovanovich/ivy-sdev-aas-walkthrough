import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import { initialNodes, initialEdges, semesters } from "./data/graph";
import { getLayoutedElements } from "./utils/layout";
import "reactflow/dist/style.css";

const getNodeStyle = (node) => {
  // TODO: style dynamically based on node attributes
  return {
    // background: node.fullStack ? "tan" : "white",
    // border: "1px solid #ccc",
    // borderRadius: "5px",
    // padding: "10px",
  };
};

function App() {
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges
  );

  const styledNodes = layoutedNodes.map((node) => ({
    ...node,
    style: getNodeStyle(node),
    targetPosition: "left",
    sourcePosition: "right",
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState(styledNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
