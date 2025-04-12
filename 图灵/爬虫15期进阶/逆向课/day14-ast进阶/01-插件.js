
// 通用插件 进行字面量计算  可解三元

const constantFold = {
    "BinaryExpression|UnaryExpression|ConditionalExpression"(path) {
        // 防止溢出
        if(path.isUnaryExpression({operator:"-"}) ||
    	   path.isUnaryExpression({operator:"void"}))
    	{
    		return;
    	}
        //计算值的
        const {confident, value} = path.evaluate();
        if (!confident)
            return;
        if (typeof value == 'number' && (!Number.isFinite(value))) {
            return;
        }
        path.replaceWith(types.valueToNode(value));
    },
}
traverse(ast, constantFold);


// 三元表达式
const TransConditionOfAssignment =
{
	ConditionalExpression(path)
	{
		let {parentPath,node} = path;
		let {test, consequent, alternate} = node;
    if (parentPath.isAssignmentExpression({"right":node}))
    {
    	let {operator, left} = parentPath.node;

    	consequent = types.AssignmentExpression(operator, left, consequent);
      alternate =  types.AssignmentExpression(operator, left, alternate);
      parentPath.replaceWith(types.conditionalExpression(test, consequent, alternate));
    }
 },
}


// 判断方法是否是字面量
function isNodeLiteral(node) {
    if (Array.isArray(node)) {
        return node.every(ele => isNodeLiteral(ele));
    }
    if (types.isLiteral(node)) {
    	if (node.value == null)
    	{
    		return false;
    	}
      return true;
    }
    if(types.isBinaryExpression(node))
    {
    	return isNodeLiteral(node.left) && isNodeLiteral(node.right);
    }
    if (types.isUnaryExpression(node, {
        "operator": "-"
    }) || types.isUnaryExpression(node, {
        "operator": "+"
    })) {
        return isNodeLiteral(node.argument);
    }

    if (types.isObjectExpression(node)) {
        let { properties } = node;
        if (properties.length == 0) {
            return true;
        }

        return properties.every(property => isNodeLiteral(property));

    }
    if (types.isArrayExpression(node)) {
        let { elements } = node;
        if (elements.length == 0) {
            return true;
        }
        return elements.every(element => isNodeLiteral(element));
    }

    return false;
}



// 处理编码  通用插件
const _ff =
    {
          NumericLiteral({node}) {
          if (node.extra && /^0[obx]/i.test(node.extra.raw)) {
              node.extra = undefined;
            }
          },
          StringLiteral({node})
          {
            if (node.extra && /\\[ux]/gi.test(node.extra.raw)) {
              node.extra = undefined;
    }
  },
    }
traverse(ast,_ff)

