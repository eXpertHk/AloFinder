var algorithms = [
  ['Time Complexity',[]],
  ['Loops',['1. Take as input a fraction in the form a/b. Convert the same into lowest terms and print. (Lowest terms examples 3/12 = 1/4)','2. Calculate the sum of digits of a number given by user. E.g.-INUPT : 123        OUPUT : 6 INUPT : 12345        OUPUT : 15','3. A three digit number is called Armstrong number if sum of cube of its digit is equal to number itself. E.g.- 153 is an Armstrong number because (13)+(53)+(33) = 153. Write all Armstrong numbers between 100 to 500.','4. Write a program to print all prime number in between 1 to 100','5. Write a program to find prime factor of a number. If a factor of a number is prime number then it is its prime factor.','6. Write a program in java to find the sum of the even and odd digits of the number which is given as input','7. Print ASCII values and their equivalent characters. ASCII value vary from 0 to 255.','8. Factorial of any number n is represented by n! and is equal to 1*2*3*....*(n-1)*n.Write a Java program to calculate factorial of a number','9. Write a program to find greatest common divisor (GCD) or highest common factor (HCF) of given two numbers','10. Take integer inputs from user until he/she presses q ( Ask to press q to quit after every integer input ). Print average and product of all numbers.']],
  ['Array',['1. Traverse − print all the array elements one by one','2. Find the "Kth" max and min element of an array','3. Insertion − Adds an element at the given index.','4. Deletion − Deletes an element at the given index.', '5. Write a program to cyclically rotate an array by one.','6. Search − Searches an element using the given index or by the value.', '7. Update − Updates an element at the given index.', '8. Merge 2 sorted arrays without using Extra space.', '9. find common elements In 3 sorted arrays', '10. Median of 2 sorted arrays of different size']],
  ['Matrix',['1. Spiral traversal on a Matrix','2. Search an element in a matrix','3. Find median in a row wise sorted matrix','4. Find row with maximum no. of 1\'s', '5. Print elements in sorted order using row-column wise sorted', '6. Maximum size rectangle', '7. Find a specific pair in matrix', '8. Rotate matrix by 90 degrees','9. Kth smallest element in a row-cpumn wise sorted matrix','10. Common elements in all rows of a given matrix']],
  ['String',['1. Reverse a String','2. Write a Code to check whether one string is a rotation of','3. Write a Program to check whether a string is a valid shuffle of', '4. Write a program to find the longest Palindrome in a string', '5. Find Longest Recurring Subsequence in String', '6. Search a Word in a 2D Grid of characters.', '7. Print all the permutations of the given string', '8. Split the Binary string into two substring with equal 0s and 1s', '9. Convert a Sentence into its equivalent mobile numeric keypad sequence', '10. Recursively print all sentences that can be formed from list of word lists']],
  ['Linked list',['1.Insertion − Adds an element at the beginning of the list.', '2. Deletion − Deletes an element at the beginning of the list.', '3. Write a program to Detect loop in a linked list.', '4. Display − Displays the complete list.', '5. Remove Duplicates in a Un-sorted Linked List.', '6. Intersection of two Sorted Linked List.', '7. Merge Sort For Linked lists.', '8. Search − Searches an element using the given key.','9. Delete − Deletes an element using the given key.', '10. Reverse a Doubly Linked list.']],
  ['Trees',['1. Insert − Inserts an element in a tree/create a tree.', '2. Search − Searches an element in a tree.', '3. Preorder Traversal − Traverses a tree in a pre-order manner', '4. Inorder Traversal − Traverses a tree in an in-order manner', '5. Postorder Traversal − Traverses a tree in a post-order manner', '6. Find Largest subtree sum in a tree', '7. Deletion- delete a node in a BST', '8. Find min and max value in a BST', '9. Convert Binary tree into BST', '10. Flatten BST to sorted list']],
  ['Stacks & Queues',['1. Implement Stack from Scratch', '2. Implement Queue from Scratch', '3. Implement "N" stacks in an Array','4. Reverse a String using Stack', '5. Sort a Stack using recursion', '6. Implement Stack using Queue', '7. Implement a Circular queue', '8. Implement Queue using Stack.','9. Sort a Stack using recursion','10. Reverse a stack using recursion']],
  ['Heap',['1. Implement a Maxheap/MinHeap using arrays and recursion.','2. Sort an Array using heap. (HeapSort)', '3. Maximum of all subarrays of size k.','4. Merge 2 Binary Max Heaps', '5. Kth largest sum continuous subarrays', '6. Smallest range in “K” Lists','7. Convert min heap to max heap','8. Convert BST to Min Heap','9. Rearrange characters in a string such that no two adjacent are same.','10. Check if a Binary Tree is Heap']],
  ['Graph',['1. Create a Graph, print it', '2. Search in a Maze','3. Clone a graph', '4. Making wired Connections','5. Implement BFS algorithm ','6. Implement DFS Algo ','7. Total no. of Spanning tree in a graph','8. Find bridge in a graph', '9. Detect Negative cycle in a graph', '10. Number of Triangles in a Directed and Undirected Graph']],
  ['Trie',['1. Construct a trie from scratch', '2. Find shortest unique prefix for every word in a given list', '3. Word Break Problem | (Trie solution)', '4. Given a sequence of words, print all anagrams together', '5. Implement a Phone Directory', '6. Print unique rows in a given boolean matrix']],
  ['Dynamic programming',['1. Coin ChangeProblem','2. Knapsack Problem','3. Binomial CoefficientProblem', '4. Permutation CoefficientProblem', '5. Program for nth Catalan Number', '6. Matrix Chain Multiplication','7. Edit Distance','8. Subset Sum Problem','9. Friends Pairing Problem','10. Gold Mine Problem']],
  ['Bit Manipulation',['1. Count set bits in an integer', '2. Find the two non-repeating elements in an array of repeating elements', '3. Count number of bits to be flipped to convert A to B', '4. Count total set bits in all numbers from 1 to n', '5. Program to find whether a no is power of two', '6. Find position of the only set bit', '7. Copy set bits in a range', '8. Divide two integers without using multiplication, division and mod operator', '9. Calculate square of a number without using *, / and pow()','10. Power Set']],
  ['Searching & Sorting'],
  ['Brute Force Algorithim'],
  ['Greedy Algorithim'], 
  ['Dynamic Algorithim'], 
  ['Pattern Searching'], 
  ['Other String Algorithim'], 
  ['Backtracking'], 
  ['Divide & Conquer'], 
  ['Geometric Algorithim'], 
  ['Mathematical Algorithim'], 
  ['Bit Algorithim'], 
  ['Graph Algorithim'],
  ['Randomized Algorithim'], 
  ['Branch & Bound'], 
  ['Recursion'], 
  ['Hashing Algorithim']
]
;
 

 
 var main = qs('.main')
 var algo = qs('#algo')
 var _card = qs('.cards')

var algo1 = qs('#algo1')
var htxt1 = qs('#htxt1')
var code1 = qs('#code1')
 
 for(var i = 0; i <13; i++) {
 
   var card_ = createElement('div', 'list-card')
   var listName_ = createElement('div', 'card-name')
   listName_.innerHTML = algorithms[i][0]
   card_.appendChild(listName_)
   _card.appendChild(card_)
 
 }
 
 var card = qsa('.list-card')
 var bck = qs('.bck')
 var htxt = qs('#htxt')
 
 var z
 var q
 
 qs('.bat').addEventListener('click', () => {
   for(var i = 13 ; i< algorithms.length; i++) {
     var card_ = createElement('div', 'list-card')
     var listName_ = createElement('div', 'card-name')
     listName_.innerHTML = algorithms[i]
     card_.appendChild(listName_)
     _card.appendChild(card_)
     
     card_.addEventListener('click', (e) => {
     var w = e.target.textContent
     console.log(w)
     main.style.display = 'none'
     algo.style.display = 'block'
     htxt.innerHTML = w
     
 
     bck.classList.remove('hide')
     })
   }
   qs('.bat').style.display="none"
   
   
   
 })
 
 //popup function
 
 function popup(a, b) {
   return a.addEventListener('click', () => {
     b.classList.toggle('show')
   })
 }
 
 var searchIcon = qs('.search')
 var searchPopup = qs('.search-popup')
 
 popup(searchIcon, searchPopup)
 
 
 // algorithm page display
 
 
 
 
 
 var crd = algo.querySelector('.cards')
 var lsrd = algo.querySelector('.list-card')
 var crdnm = algo.querySelector('.card-name')
 
  var q
  var e



 var p
 
 for (var i =0 ; i < card.length ;i++) {
   card[i].addEventListener('click', (e) => {
     var w = e.target.textContent
     console.log(w)
     main.style.display = 'none'
     algo.style.display = 'block'
     htxt.innerHTML = w
     z=i
     try{
      for(var i = 0 ; i < algorithms.length ; i++){
        if (algorithms[i][0] == w){
         q=algorithms[i][1]
         //console.log(q)
         for(var j = 0 ; j < q.length; j++){
           
           var card__ = createElement('div', 'list-card')
           var listName__ = createElement('div', 'card-name')
           listName__.innerHTML = algorithms[i][1][j]
           card__.appendChild(listName__)
           qs('#cards').appendChild(card__)
           var crd = qs("#cards").childNodes
           for (var k = 0 ; k < crd.length; k++){
              crd[k].addEventListener('click', (e) => {
                algo.style.display='none'
                algo1.style.display='block'
                var w = e.target.textContent
                htxt1.innerHTML = w
                var _cd = createElement('pre')
                var __cd = createElement('code','language-java')
                code1.replaceChildren(arr)
                for(var i = 0 ; i< algorithms[i].length; i++){
                  for(var j = 0; j<algorithms[i][1].length; j++){
                    if(algorithms[i][1][j] == w){
                      __cd.innerHTML=algos[i][j]
                      break;
                    }
                    else{
                      __cd.innerHTML = ''
                    }
                  }
                }
                code1.appendChild(_cd.appendChild(__cd))
                
           })
           
         }
        }
      }
     }
    }
     catch(e){}
     bck.classList.remove('hide')
   })
 }
 
 function algopage(x){
    console.log(x)
 }
 
 //back btn 
 
 var n = qs('#cards')
 console.log(i.childNodes)
 arr = []
 
 bck.addEventListener('click', () => {
   
   main.style.display = 'block'
   algo.style.display = 'none'
   bck.classList.add('hide')
   n.replaceChildren(arr)
 })