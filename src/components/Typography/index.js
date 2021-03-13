const TITLE_LEVELS = {
  1: 1, 
  2: 2, 
  3: 3, 
  4: 4, 
};

const Typography = {
  Title: ({ level, children }) => {
    const titleLevel = TITLE_LEVELS[level] || TITLE_LEVELS[4];
  
    return `
      <h${titleLevel} class="Title">
        ${children}
      </h${titleLevel}>
    `;
  },
  Text: ({ children }) => {
    return `
      <div class="Text">
        ${children}
      </div>
    `;
  },
}


export default Typography;
