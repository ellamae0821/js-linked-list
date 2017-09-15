/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var daHead = null;
  var daTail = null;
  var count = 0;

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
    }else{
      daTail.next = newNode; // newNode.next ??? here??
      daTail = newNode;
    }
    return newNode;
  }

  function get (num){
    var getNode = daHead ;
    for (var i=0; i<num; i++){
      getNode = getNode.next;
      if(getNode === null){
      return false;
      }
    }
    return getNode;
  }


/*  function remove (num){
    var removeNode = get(num);
    var previousNode = get (num - 1);
    if(num === 0){
      getHead = getHead.next;
    }else{
    previousNode.next = removeNode;
    }
  }*/


  function remove(num) {
    var removeNode = get(num);
    var previousNode = get(num - 1);

    if (num === 0){
      daHead = daHead.next;
    }else if (removeNode === daTail){
      daTail = previousNode;
      daTail.next = null;
    }else if (removeNode === false){
      return false;
    }else{
      previousNode.next = removeNode.next;
    }
  }


  function insert(){

  }

  return{
    getHead: getHead,
    getTail: getTail,
    add:add,
    remove: remove,
    get: get,
    insert:insert
  };
}


