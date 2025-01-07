// These should align with the programCore names in graph.js
export const programCoreStyles = {
  // It's best to stick with the core having a thick border width, then you can color
  // code any other core properties that you'd like.

  // In the case of conflicting properties for overlapping programs:
  // it's just going to loop through these and apply whichever property is hit first.
  // E.g. if you had a course that shares two TCs, each with a BG color set, it's just
  // going to apply the first one it hits.

  AAS: {
    borderWidth: 3,
  },
  fullStack: {
    // Any hex or html color name will work here.
    background: "#ddd",
  },
};
