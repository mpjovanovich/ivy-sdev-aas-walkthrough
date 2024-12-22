import { useCallback, useState } from "react";
import {
  ReactFlow,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { courseNodes, courseEdges, semesterNodes } from "./data/graph";
import { defaultGroups } from "./data/defaultGroups";
import {
  getCourseNodes,
  getCourseEdges,
  getSemesterNodes,
} from "./utils/layout";
import {
  SEMESTER_WIDTH,
  SEMESTER_HEIGHT,
  SEMESTER_PADDING,
} from "./components/SemesterNode";
import SemesterNode from "./components/SemesterNode";

const nodeTypes = {
  group: SemesterNode,
};

function Flow() {
  const styledSemesterNodes = getSemesterNodes(semesterNodes);
  const courseNodesWithGroups = courseNodes.map((node) => {
    return {
      ...node,
      parentId: defaultGroups.find((g) => g.id === node.id)?.parentId,
    };
  });
  const styledCourseNodes = getCourseNodes(
    courseNodesWithGroups,
    courseEdges,
    styledSemesterNodes
  );
  const allNodes = [...styledSemesterNodes, ...styledCourseNodes];

  const [nodes, setNodes] = useState(allNodes);
  const [edges, setEdges] = useState(getCourseEdges(courseEdges));

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onNodeDragStop = useCallback(
    (event, node) => {
      // Only handle course nodes, not semester nodes
      if (node.type !== "group") {
        // Find which semester group (if any) the node is over
        const semesterNodes = nodes.filter((n) => n.type === "group");
        const targetSemester = semesterNodes.find((semester) => {
          const semesterBounds = {
            left: semester.position.x,
            right: semester.position.x + SEMESTER_WIDTH,
            top: semester.position.y,
            bottom: semester.position.y + SEMESTER_HEIGHT,
          };

          return (
            node.position.x > semesterBounds.left &&
            node.position.x < semesterBounds.right &&
            node.position.y > semesterBounds.top &&
            node.position.y < semesterBounds.bottom
          );
        });

        if (targetSemester) {
          // Update the node's position to snap to a grid or specific position within the semester
          setNodes((nds) =>
            nds.map((n) => {
              if (n.id === node.id) {
                return {
                  ...n,
                  position: {
                    x: targetSemester.position.x + SEMESTER_PADDING,
                    y: node.position.y,
                  },
                  parentNode: targetSemester.id,
                };
              }
              return n;
            })
          );
        }
      }
    },
    [nodes]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onNodeDragStop={onNodeDragStop}
      nodeTypes={nodeTypes}
      style={rfStyle}
      attributionPosition="top-right"
      nodesConnectable={false}
      fitView
    >
      <Background />
    </ReactFlow>
  );
}
const rfStyle = {
  backgroundColor: "#D0C0F7",
};

export default Flow;
