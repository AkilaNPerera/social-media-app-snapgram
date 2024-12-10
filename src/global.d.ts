declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
  }
  
  // For plain CSS (not CSS modules):
  declare module '*.css';
  
  /*
    -- Created this file to make the global.css file recognizable to Typescript. --
  */