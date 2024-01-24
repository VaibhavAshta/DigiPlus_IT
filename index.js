document.addEventListener('DOMContentLoaded', function () {
    let nodeTypeEle = document.getElementById("Node_Type");
    let nodeValueInput = document.getElementById("Node_Value");
    let treeContainer = document.querySelector('.tree-container');
  
    let addNodeBtn = document.getElementById("addNodeBtn");
    addNodeBtn.addEventListener('click', function () {
      let selectedNodeType = nodeTypeEle.value;
      let nodeValue = nodeValueInput.value;
  
      if (!selectedNodeType || !nodeValue) {
        alert('Please select a valid Node Type and enter a Node Value.');
        return;
      }
      addNode(selectedNodeType, nodeValue);
    });
  });
  