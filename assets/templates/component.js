module.exports = (componentName) => ({
  content: `
import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

export const ${componentName}: React.FC<${componentName}Props> = ({ children }) => (
    <div data-testid="${componentName}">{children}</div>
);
`,
  extension: `.tsx`,
});
