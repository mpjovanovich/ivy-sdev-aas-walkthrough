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
  //
  const [nodes, setNodes] = useState(allNodes);
  const [edges, setEdges] = useState(getCourseEdges(courseEdges));

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onNodeDragStop = useCallback(
    (event, node) => {
      if (node.type === "group") return;

      const draggedElement = document.querySelector(`[data-id="${node.id}"]`);
      if (draggedElement) {
        draggedElement.style.visibility = "hidden";

        const elementUnderMouse = document.elementFromPoint(
          event.clientX,
          event.clientY
        );
        const semesterElement = elementUnderMouse?.closest(".semester-content");

        draggedElement.style.visibility = "visible";

        setNodes((nds) =>
          nds.map((n) => {
            if (n.id === node.id) {
              if (semesterElement) {
                const semesterParent = semesterElement.closest("[data-id]");
                const semesterId = semesterParent?.getAttribute("data-id");

                return {
                  ...n,
                  position: {
                    x: SEMESTER_PADDING,
                    y: node.position.y,
                  },
                  parentId: semesterId,
                };
              } else {
                // Just remove parentId and keep the current position
                const { parentId, ...nodeWithoutParent } = n;
                return {
                  ...nodeWithoutParent,
                  // There is a weird bug where the position is updating relative to the parent node
                  // I don't have time to fix it.
                  position: node.position,
                };
              }
            }
            return n;
          })
        );
      }
    },
    [setNodes]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
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
