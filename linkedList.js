/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var daHead = null;
  var daTail = null;

  function getHead() {
    return daHead;
  }

  function getTail() {
    return daTail;
  }

  function add (value){
    var newNode = {
      value: value,
      next: null
    };
    if (getHead() === null){
      daHead = newNode;
      daTail = newNode;
    }
    return newNode;
  }

  function get (){

  }

  function remove (){

  }

  return{
    getHead: getHead,
    getTail: getTail
  };
}
