// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

var mergeKLists = function(lists) {
  let result = [];
  
  function linkedListToArray(list) {
      let array = [];
      while (list !== null) {
          array.push(list.val);
          list = list.next;
      }
      return array;
  }

  if (lists.length > 0) {
      result = linkedListToArray(lists[0]);
  }

  for (let i = 1; i < lists.length; i++) {
      console.log(result)
      let index = 0
      console.log(result[index])
      let curr = lists[i]
      while (curr !== null) {
          let nextIndex = index + 1
          if (result[index] > curr.val) {
              result.splice(index,0,curr.val)
              curr = curr.next
          }
          else if (result[index] <= curr.val && result[nextIndex] >= curr.val) {
              result.splice(nextIndex,0,curr.val)
              curr = curr.next
          }
          else if (index === result.length) {
              result.push(curr.val)
              curr = curr.next
              index++
          }
          else {
              index++
          }
      }
  }

  function arrayToLinkedList(array) {
      if (array.length === 0) return null;
      let head = new ListNode(array[0]);
      let current = head;
      for (let i = 1; i < array.length; i++) {
              current.next = new ListNode(array[i]);
              current = current.next;
          }
      return head;
      }
  return arrayToLinkedList(result) 
};



// var mergeKLists = function(lists) {

//   if (!lists || lists.length == 0) {
//       let newList = new ListNode()
//       return newList.next
//   }

//   function mergeLists(list1, list2) {
//       let newList = new ListNode();
//       let head = newList;

//       while (list1 && list2) {
//           if (list1.val <= list2.val) {
//               newList.next = list1;
//               list1 = list1.next;
//           }
//           else {
//               newList.next = list2;
//               list2 = list2.next;
//           }
//           newList = newList.next;
//       }

//       while (list1) {
//           newList.next = list1;
//           list1 = list1.next;
//           newList = newList.next;
//       }

//       while (list2) {
//           newList.next = list2;
//           list2 = list2.next;
//           newList = newList.next;
//       }

//       return head.next;
//   }
  
//   while (lists.length > 1) {
//       let list1 = lists.shift()
//       let list2 = lists.shift();
//       let newList = mergeLists(list1, list2)
//       lists.push(newList)
//   }

//   return lists[0]
// };