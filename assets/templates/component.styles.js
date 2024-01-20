module.exports = (componentName) => ({
  content: `
    import { ${componentName}Props } from "./${componentName}.types";
  `,
  extension: `.styles.ts`,
});
