export const SEMESTER_WIDTH = 150;
export const SEMESTER_HEIGHT = 600;
export const SEMESTER_PADDING = 20;

const SemesterNode = ({ data }) => {
  return (
    <div
      style={{
        padding: SEMESTER_PADDING,
        background: "rgba(240, 240, 240, 0.9)",
        border: "1px solid #ccc",
        borderRadius: "8px",
        minWidth: SEMESTER_WIDTH,
      }}
    >
      <h3 style={{ margin: "0 0 10px 0" }}>{data.label}</h3>
      <div className="semester-content">
        <div
          className="drop-zone"
          style={{
            minHeight: SEMESTER_HEIGHT,
            background: "rgba(255, 255, 255, 0.5)",
            border: "1px solid #aaa",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SemesterNode;
