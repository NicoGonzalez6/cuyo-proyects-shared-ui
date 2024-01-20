module.exports = (componentName) => ({
  content: `
export interface ${componentName}Props {
    children: React.ReactNode;
}
`,
  extension: `.types.ts`,
});
