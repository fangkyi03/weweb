var postcss = require('postcss').default

module.exports = postcss.plugin("postcss-reverse-props", (options = {}) => {
  // Work with options here
  return (root) => {
    // Transform CSS AST here
    root.walkRules((rule) => {
      // Transform each rule here
      rule.walkDecls((decl) => {
        // Transform each property declaration here
        if (decl.value.slice(-1) != ";") {
          decl.value += ";";
        }
      });
    });
  };
});
