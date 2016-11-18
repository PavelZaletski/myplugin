"use strict";

exports.__esModule = true;

exports.default = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      Identifier: function Identifier(path) {
        if(path.parent.type === 'VariableDeclarator'){
          if(path.parent.init.value === true){
            path.parent.init.value = false;
            
          }
        } else if (path.parent.type === 'BinaryExpression'){
          if(path.parent.right.type === 'BooleanLiteral' && path.parent.right.value === true){
            path.parent.right.value = false;
          }

          if(path.parent.left.type === 'BooleanLiteral' && path.parent.left.value === true){
            path.parent.left.value = false;
          }
        }
      }
    }
  };
};

module.exports = exports["default"];