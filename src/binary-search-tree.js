const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  root() {
    return root(this.root)
    function root(node) {
      if (!node) {
        return null
      }
      else { return node }
    }
  }

  add(data) {
    this.root = addData(this.root, data)
    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (node.data < data) {
        node.right = addData(node.right, data)
      }
      else {
        node.left = addData(node.left, data)
      }
      return node;
    }
  }

  has(data) {
    return hasData(this.root, data);

    function hasData(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ?
        hasData(node.left, data) :
        hasData(node.right, data);
    }
  }

  find(data) {
    return findData(this.root, data)
    function findData(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      if (node.data > data) {
        return node.left = findData(node.left, data)
      }
      else {
        return node.right = findData(node.right, data)
      }
    }
  }

  remove(data) {
    this.root = removeData(this.root, data)
    function removeData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeData(node.left, data)
        return node;
      }
      else if (node.data < data) {
        node.right = removeData(node.right, data)
        return node;
      }
      else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let min = node.right
        while (min.left) {
          min = min.left;
        }
        node.data = min.data;
        node.right = removeData(node.right, min.data)
        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }
    let minNode = this.root;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data
  }

  max() {
    if (!this.root) {
      return;
    }
    let maxNode = this.root;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data
  }
}

module.exports = {
  BinarySearchTree
};