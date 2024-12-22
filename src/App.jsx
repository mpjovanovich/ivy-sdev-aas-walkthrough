import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

function App() {
  const initialNodes = [
    {
      id: "cs101",
      position: { x: 100, y: 100 },
      data: { label: "CS101: Intro to Programming" },
    },
    {
      id: "cs201",
      position: { x: 100, y: 200 },
      data: { label: "CS201: Data Structures" },
    },
    {
      id: "cs301",
      position: { x: 100, y: 300 },
      data: { label: "CS301: Algorithms" },
    },
  ];

  const initialEdges = [
    { id: "e1-2", source: "cs101", target: "cs201" },
    { id: "e2-3", source: "cs201", target: "cs301" },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
