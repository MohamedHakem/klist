import { ProblemItemProps } from './types';

const Problems: ProblemItemProps[] = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Array'],
    patterns: ['HashMap', 'Two Pointer'],
    companies: ['Facebook', 'Amazon', 'Microsoft', 'Google', 'Apple'], // Very frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/two-sum',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 2,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Stack'],
    patterns: ['Stack'],
    companies: ['Amazon', 'Facebook', 'Google', 'Microsoft', 'Apple'], // Also very frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/valid-parentheses',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 3,
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Linked List'],
    patterns: ['Linked List', 'Two Pointer'],
    companies: ['Microsoft', 'Amazon', 'Facebook', 'Google'],
    leetCodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 4,
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Array'],
    patterns: ['Sliding Window'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'],
    leetCodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 5,
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['String'],
    patterns: ['Two Pointer'],
    companies: ['Amazon', 'Facebook', 'Google', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/valid-palindrome',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 6,
    title: 'Invert Binary Tree',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary Tree'],
    patterns: ['DFS', 'BFS'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/invert-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 7,
    title: 'Valid Anagram',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['String'],
    patterns: ['HashMap'],
    companies: ['Amazon', 'Facebook', 'Google', 'Microsoft'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/valid-anagram',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 8,
    title: 'Binary Search',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary Search'],
    patterns: ['Binary Search'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple'], // Very frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/binary-search',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 9,
    title: 'Flood Fill',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Graph'],
    patterns: ['DFS', 'BFS'],
    companies: ['Amazon', 'Facebook', 'Microsoft'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/flood-fill',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 10,
    title: 'Lowest Common Ancestor of a BST',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['BST'],
    patterns: ['BST Traversal'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 11,
    title: 'Balanced Binary Tree',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary Tree'],
    patterns: ['DFS', 'Post Order'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/balanced-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 12,
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Linked List'],
    patterns: ['Cycle Detection'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/linked-list-cycle',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 13,
    title: 'Implement Queue using Stacks',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Stack'],
    patterns: ['Stack Simulation'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/implement-queue-using-stacks',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 14,
    title: 'First Bad Version',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Binary Search'],
    patterns: ['Binary Search'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple'], // Very frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/first-bad-version',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 15,
    title: 'Ransom Note',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Hash Table'],
    patterns: ['Hash Map'],
    companies: ['Amazon', 'Facebook', 'Microsoft'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/ransom-note',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 16,
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Dynamic Programming'],
    patterns: ['Dynamic Programming', 'Fibonacci'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/climbing-stairs',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 17,
    title: 'Longest Palindrome',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['String'],
    patterns: ['Hash Map', 'Frequency Count'],
    companies: ['Amazon', 'Facebook', 'Google', 'Microsoft'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/longest-palindrome',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 18,
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Linked List'],
    patterns: ['Linked List', 'Iteration', 'Recursion'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/reverse-linked-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 19,
    title: 'Majority Element',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Array'],
    patterns: ['Hash Map', 'Boyer-Moore'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/majority-element',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 20,
    title: 'Add Binary',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary'],
    patterns: ['Bit Manipulation', 'String Manipulation'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/add-binary',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 21,
    title: 'Diameter of Binary Tree',
    difficulty: 'Easy',
    timeEstimate: 30,
    topics: ['Binary Tree'],
    patterns: ['Tree Depth First Search (DFS)'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/diameter-of-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 22,
    title: 'Middle of the Linked List',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Linked List'],
    patterns: ['Fast & Slow Pointers'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/middle-of-the-linked-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 23,
    title: 'Maximum Depth of Binary Tree',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary Tree'],
    patterns: ['Tree Depth First Search (DFS)'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/maximum-depth-of-binary-tree',
    videoUrl: 'https://youtube.com/watch?v/something',
    completed: false
  },
  {
    id: 24,
    title: 'Contains Duplicate',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Array'],
    patterns: ['Hash Table'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/contains-duplicate',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 25,
    title: 'Meeting Rooms',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Array'],
    patterns: ['Sorting'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/meeting-rooms',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 26,
    title: 'Roman to Integer',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Math', 'String'],
    patterns: ['Hash Table'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/roman-to-integer',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 27,
    title: 'Backspace String Compare',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Stack'],
    patterns: ['Stack'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Google'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/backspace-string-compare',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 28,
    title: 'Counting Bits',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary'],
    patterns: ['Bit Manipulation'], // Patterns now below topics
    companies: ['Facebook', 'Microsoft'], // Less frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/counting-bits',
    videoUrl: 'https://youtube.com/watch?v/something',
    completed: false
  },
  {
    id: 29,
    title: 'Same Tree',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Binary Tree'],
    patterns: ['Tree Depth First Search (DFS)'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/same-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 30,
    title: 'Number of 1 Bits',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary'],
    patterns: ['Bit Manipulation'], // Patterns now below topics
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/number-of-1-bits',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 31,
    title: 'Longest Common Prefix',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['String'],
    patterns: ['Horizontal Scanning'], // Not in your list of 20, so added a suggestion
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/longest-common-prefix',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 32,
    title: 'Single Number',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary'],
    patterns: ['Hash Table'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/single-number',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 33,
    title: 'Palindrome Linked List',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/palindrome-linked-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 34,
    title: 'Move Zeroes',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Array'],
    patterns: ['Two Pointers'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/move-zeroes',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 35,
    title: 'Symmetric Tree',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Binary Tree'],
    patterns: ['Recursion'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/symmetric-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 36,
    title: 'Missing Number',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Array', 'Math'], // Added Math as a topic
    patterns: ['Arithmetic Progression'], // Not in your list of 20, so added a suggestion
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/missing-number',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 37,
    title: 'Palindrome Number',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Math'],
    patterns: ['Reversal'], // Not in your list of 20, so added a suggestion
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/palindrome-number',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 38,
    title: 'Convert Sorted Array to BST',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['BST'],
    patterns: ['Recursion'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 39,
    title: 'Reverse Bits',
    difficulty: 'Easy',
    timeEstimate: 15,
    topics: ['Binary'],
    patterns: ['Bit Manipulation'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/reverse-bits',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 40,
    title: 'Subtree of Another Tree',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Binary Tree'],
    patterns: ['Recursive Traversal'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/subtree-of-another-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 41,
    title: 'Squares of a Sorted Array',
    difficulty: 'Easy',
    timeEstimate: 20,
    topics: ['Array'],
    patterns: ['Two Pointers'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/squares-of-a-sorted-array',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 42,
    title: 'Maximum Subarray',
    difficulty: 'Medium', // Updated difficulty based on common rating
    timeEstimate: 20,
    topics: ['Dynamic Programming'],
    patterns: ["Kadane's Algorithm"], // Not in your list of 20, so added a suggestion
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/maximum-subarray',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 43,
    title: 'Insert Interval',
    difficulty: 'Medium', // Updated difficulty based on common rating
    timeEstimate: 25,
    topics: ['Array'],
    patterns: ['Merging'], // Not in your list of 20, so added a suggestion
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/insert-interval',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 44,
    title: '01 Matrix',
    difficulty: 'Medium', // Updated difficulty based on common rating
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Breadth-First Search (BFS)'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Less frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/01-matrix',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 45,
    title: 'K Closest Points to Origin',
    difficulty: 'Medium', // Updated difficulty based on common rating
    timeEstimate: 30,
    topics: ['Heap'],
    patterns: ['Min Heap'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/k-closest-points-to-origin',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 46,
    title: 'Longest Substring (no Repeat)',
    difficulty: 'Medium', // Updated difficulty based on common rating
    timeEstimate: 30,
    topics: ['String'],
    patterns: ['Sliding Window'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 47,
    title: '3Sum',
    difficulty: 'Medium', // Updated difficulty based on common rating
    timeEstimate: 30,
    topics: ['Array'],
    patterns: ['Two Pointers'], // Likely pattern
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/3sum',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 48,
    title: 'Binary Tree Level Order Traversal',
    difficulty: 'Medium', // Corrected difficulty
    timeEstimate: 20,
    topics: ['Binary Tree'],
    patterns: ['Tree Breadth First Search (BFS)'], // FINALLY added the patterns property!
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 49,
    title: 'Clone Graph',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Graph'],
    patterns: ['Breadth-First Search (BFS)', 'Depth-First Search (DFS)'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Less frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/clone-graph',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 50,
    title: 'Evaluate Reverse Polish Notation',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Stack'],
    patterns: ['Stack'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/evaluate-reverse-polish-notation',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 51,
    title: 'Course Schedule',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Topological Sort (Graph)'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/course-schedule',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 52,
    title: 'Implement Trie (Prefix Tree)',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Trie'],
    patterns: ['Trie'], // Or "Prefix Tree"
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Less frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/implement-trie-prefix-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 53,
    title: 'Coin Change',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Dynamic Programming'],
    patterns: ['Dynamic Programming'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/coin-change',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 54,
    title: 'Product of Array Except Self',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array'],
    patterns: ['Prefix and Suffix Products'], // Or Array Manipulation
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/product-of-array-except-self',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 55,
    title: 'Min Stack',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Stack'],
    patterns: ['Stack'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/min-stack',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 56,
    title: 'Validate Binary Search Tree',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['BST'],
    patterns: ['Tree Depth First Search (DFS)'], // Or Recursion
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked
    leetCodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 57,
    title: 'Number of Islands',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Graph'],
    patterns: ['Island Traversal', 'Depth-First Search (DFS)', 'Breadth-First Search (BFS)'],
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'], // Very Frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/number-of-islands',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 58,
    title: 'Rotting Oranges',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Breadth-First Search (BFS)'],
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Less frequently asked
    leetCodeUrl: 'https://leetcode.com/problems/rotting-oranges',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 59,
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Binary Search', 'Array'],
    patterns: ['Modified Binary Search'],
    companies: ['Google', 'Facebook', 'Amazon', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 60,
    title: 'Combination Sum',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Backtracking', 'Array'],
    patterns: ['Backtracking'],
    companies: ['Google', 'Amazon', 'Facebook'],
    leetCodeUrl: 'https://leetcode.com/problems/combination-sum',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 61,
    title: 'Permutations',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Recursion', 'Backtracking'],
    patterns: ['Backtracking'],
    companies: ['Amazon', 'Facebook', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/permutations',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 62,
    title: 'Merge Intervals',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array', 'Sorting'],
    patterns: ['Sorting and Merging'],
    companies: ['Google', 'Facebook', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/merge-intervals',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 63,
    title: 'Lowest Common Ancestor of a Binary Tree',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Binary Tree', 'Recursion'],
    patterns: ['Tree Traversal'],
    companies: ['Facebook', 'Amazon', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 64,
    title: 'Time Based Key-Value Store',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Binary Search', 'HashMap'],
    patterns: ['Binary Search with Dictionary'],
    companies: ['Google', 'Facebook', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/time-based-key-value-store',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 65,
    title: 'Accounts Merge',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph', 'Union Find'],
    patterns: ['Union Find'],
    companies: ['Google', 'Amazon', 'Facebook'],
    leetCodeUrl: 'https://leetcode.com/problems/accounts-merge',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 66,
    title: 'Sort Colors',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Array', 'Two Pointers'],
    patterns: ['Dutch National Flag'],
    companies: ['Google', 'Facebook', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/sort-colors',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 67,
    title: 'Word Break',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Dynamic Programming', 'Trie'],
    patterns: ['Dynamic Programming'],
    companies: ['Facebook', 'Google', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/word-break',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 68,
    title: 'Partition Equal Subset Sum',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Dynamic Programming', 'Array'],
    patterns: ['Knapsack Problem'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/partition-equal-subset-sum',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 69,
    title: 'String to Integer (atoi)',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['String', 'Parsing'],
    patterns: ['Character Parsing', 'Edge Case Handling'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    leetCodeUrl: 'https://leetcode.com/problems/string-to-integer-atoi',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 70,
    title: 'Spiral Matrix',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Matrix', 'Simulation'],
    patterns: ['Layer Traversal', 'Simulation of Movement'],
    companies: ['Google', 'Facebook', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/spiral-matrix',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 71,
    title: 'Subsets',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Recursion', 'Backtracking'],
    patterns: ['Power Set', 'Recursive Subset Building'],
    companies: ['Facebook', 'Amazon', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/subsets',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 72,
    title: 'Binary Tree Right Side View',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Binary Tree', 'Breadth-First Search'],
    patterns: ['BFS', 'Rightmost Nodes'],
    companies: ['Microsoft', 'Google', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/binary-tree-right-side-view',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 73,
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['String', 'Dynamic Programming'],
    patterns: ['Expand Around Center', 'DP Table'],
    companies: ['Amazon', 'Microsoft', 'Facebook'],
    leetCodeUrl: 'https://leetcode.com/problems/longest-palindromic-substring',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 74,
    title: 'Unique Paths',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Dynamic Programming', 'Combinatorics'],
    patterns: ['Grid Traversal', 'DP Array'],
    companies: ['Google', 'Microsoft', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/unique-paths',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 75,
    title: 'Construct Binary Tree from Preorder and Inorder Traversal',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Binary Tree', 'Recursion'],
    patterns: ['Tree Construction', 'Divide and Conquer'],
    companies: ['Facebook', 'Amazon', 'Google'],
    leetCodeUrl: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 76,
    title: 'Container With Most Water',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Array'],
    patterns: ['Two Pointers', 'Greedy'],
    companies: ['Amazon', 'Google', 'Facebook'],
    leetCodeUrl: 'https://leetcode.com/problems/container-with-most-water',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 77,
    title: 'Letter Combinations of a Phone Number',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Recursion'],
    patterns: ['Backtracking'],
    companies: ['Microsoft', 'Google', 'Apple'],
    leetCodeUrl: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 78,
    title: 'Word Search',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['DFS', 'Backtracking'],
    companies: ['Amazon', 'Microsoft', 'Facebook'],
    leetCodeUrl: 'https://leetcode.com/problems/word-search',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 79,
    title: 'Find All Anagrams in a String',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['String'],
    patterns: ['Hash Table', 'Sliding Window'], // Uses both Hash Table and Sliding Window techniques
    companies: ['Facebook', 'Google', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/find-all-anagrams-in-a-string',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 80,
    title: 'Minimum Height Trees',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['BFS', 'Topological Sort'], // Uses BFS and potentially Topological Sort
    companies: ['Uber', 'Airbnb', 'Lyft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/minimum-height-trees',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 81,
    title: 'Task Scheduler',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Heap'],
    patterns: ['Min Heap'], // Uses a Min Heap for efficient scheduling
    companies: ['Google', 'Microsoft', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/task-scheduler',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 82,
    title: 'LRU Cache',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Linked List'],
    patterns: ['Hash Table', 'Doubly Linked List'], // Uses Hash Table for fast lookups and Doubly Linked List for efficient insertion/deletion
    companies: ['Facebook', 'Amazon', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/lru-cache',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 83,
    title: 'Kth Smallest Element in a BST',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Binary Search Tree'],
    patterns: ['In-order Traversal'], // Can be solved using In-order Traversal property of BST
    companies: ['Amazon', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst',
    videoUrl: 'https://youtube.com/watch?v=memoization',
    completed: false
  },
  {
    id: 84,
    title: 'Daily Temperatures',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Stack'],
    patterns: ['Monotonic Stack'], // Uses a Monotonic Stack for efficient processing
    companies: ['Google', 'Facebook', 'Twitter'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/daily-temperatures',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 85,
    title: 'House Robber',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Dynamic Programming'],
    patterns: ['Bottom-up DP'], // Uses a bottom-up approach to Dynamic Programming
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/house-robber',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 86,
    title: 'Gas Station',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array'],
    patterns: ['Two Pointers'], // Uses Two Pointers to efficiently find a starting point
    companies: ['Apple', 'Uber', 'Lyft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/gas-station',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 87,
    title: 'Next Permutation',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Recursion'],
    patterns: ['Backtracking'], // Can be solved using a Backtracking approach
    companies: ['Google', 'Facebook', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/next-permutation',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 88,
    title: 'Valid Sudoku',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Matrix'],
    patterns: ['Hash Table'], // Uses Hash Table for efficient checking of rows, columns, and sub-boxes
    companies: ['Microsoft', 'Amazon', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/valid-sudoku',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 89,
    title: 'Group Anagrams',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['String'],
    patterns: ['Hash Table'], // Uses Hash Table to efficiently group anagrams
    companies: ['Google', 'Facebook', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/group-anagrams',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 90,
    title: 'Maximum Product Subarray',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Dynamic Programming'],
    patterns: ["Kadane's Algorithm"], // Uses a variation of Kadane's Algorithm for Dynamic Programming
    companies: ['Microsoft', 'Facebook', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/maximum-product-subarray',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 91,
    title: 'Design Add and Search Words Data Structure',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Trie'],
    patterns: ['Trie'], // Uses a Trie data structure for efficient word storage and search
    companies: ['Amazon', 'Netflix', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/design-add-and-search-words-data-structure',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 92,
    title: 'Pacific Atlantic Water Flow',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Depth-First Search (DFS)'], // Uses Depth-First Search to explore reachable cells
    companies: ['Google', 'Facebook', 'Twitter'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/pacific-atlantic-water-flow',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 93,
    title: 'Remove Nth Node From End of List',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Uses Two Pointers to efficiently find the node to remove
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 94,
    title: 'Shortest Path to Get Food',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Breadth-First Search (BFS)'], // Uses Breadth-First Search for shortest path finding
    companies: ['Amazon', 'Lyft', 'Uber'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/shortest-path-to-get-food',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 95,
    title: 'Find the Duplicate Number',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Binary Search', 'Array'], // Can be solved with either Binary Search or Floyd's Cycle Finding Algorithm
    patterns: ["Floyd's Cycle Finding Algorithm"], // A specific technique for finding duplicates in a limited range array
    companies: ['Facebook', 'Google', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/find-the-duplicate-number',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 96,
    title: 'Top K Frequent Words',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Heap'],
    patterns: ['Min Heap'], // Uses a Min Heap to efficiently find the top K frequent words
    companies: ['Google', 'Facebook', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/top-k-frequent-words',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 97,
    title: 'Longest Increasing Subsequence',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Dynamic Programming'],
    patterns: ['Dynamic Programming'], // Uses Dynamic Programming to find the longest increasing subsequence
    companies: ['Microsoft', 'Amazon', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/longest-increasing-subsequence',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 98,
    title: 'Graph Valid Tree',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Union Find', 'Depth-First Search (DFS)'], // Can be solved using Union Find or DFS with cycle detection
    companies: ['Facebook', 'Amazon', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/graph-valid-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 99,
    title: 'Course Schedule II',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Graph'],
    patterns: ['Topological Sort'], // Uses Topological Sort to determine if a valid course schedule exists
    companies: ['Amazon', 'Microsoft', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/course-schedule-ii',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 100,
    title: 'Swap Nodes in Pairs',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Uses Two Pointers to efficiently swap nodes in pairs
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/swap-nodes-in-pairs',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 101,
    title: 'Path Sum II',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Binary Tree'],
    patterns: ['Depth-First Search (DFS)'], // Uses DFS to traverse the tree and find all paths with the target sum
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/path-sum-ii',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 102,
    title: 'Longest Consecutive Sequence',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array'],
    patterns: ['Hash Table'], // Uses a Hash Table to efficiently find the longest consecutive sequence
    companies: ['Google', 'Facebook', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/longest-consecutive-sequence',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 103,
    title: 'Rotate Array',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Array'],
    patterns: ['Two Pointers', 'Extra Space'], // Can be solved with Two Pointers or using extra space for a more readable solution
    companies: ['Microsoft', 'Amazon', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/rotate-array',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 104,
    title: 'Odd Even Linked List',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Uses Two Pointers to separate odd and even nodes
    companies: ['Facebook', 'Google', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/odd-even-linked-list',
    completed: false
  },
  {
    id: 105,
    title: 'Decode String',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Stack'],
    patterns: ['Stack'], // Uses a Stack to process encoded characters and build the decoded string
    companies: ['Amazon', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/decode-string',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 106,
    title: 'Contiguous Array',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array'],
    patterns: ['Hash Table'], // Uses a Hash Table to efficiently track prefix sum and find the longest subarray with zero net sum
    companies: ['Facebook', 'Amazon', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/contiguous-array',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 107,
    title: 'Maximum Width of Binary Tree',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Binary Tree'],
    patterns: ['Breadth-First Search (BFS)'], // Uses BFS to find the maximum width of the binary tree
    companies: ['Microsoft', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/maximum-width-of-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 108,
    title: 'Find K Closest Elements',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Heap (Min Heap)'],
    patterns: ['Min Heap'], // Uses a Min Heap to efficiently find the K closest elements
    companies: ['Amazon', 'Google', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/find-k-closest-elements',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 109,
    title: 'Longest Repeating Character Replacement',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['String'],
    patterns: ['Sliding Window'], // Uses a Sliding Window approach to find the longest substring with at most K character replacements
    companies: ['Facebook', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 110,
    title: 'Inorder Successor in BST',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Binary Search Tree'],
    patterns: ['In-order Traversal'], // Can be solved efficiently using in-order traversal properties of a BST
    companies: ['Amazon', 'Google', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/inorder-successor-in-bst',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 111,
    title: 'Jump Game',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Dynamic Programming'],
    patterns: ['Dynamic Programming'], // Uses Dynamic Programming for efficient solution
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/jump-game',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 112,
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Uses Two Pointers to iterate through the linked lists and add digits
    companies: ['Google', 'Amazon', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/add-two-numbers',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 113,
    title: 'Generate Parentheses',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Recursion', 'Backtracking'],
    patterns: ['Backtracking'], // Uses Backtracking to explore all valid combinations of parentheses
    companies: ['Amazon', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/generate-parentheses',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 114,
    title: 'Sort List',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Linked List', 'Merge Sort'],
    patterns: ['Merge Sort'], // Often solved using Merge Sort for efficient linked list sorting
    companies: ['Facebook', 'Netflix', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/sort-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 115,
    title: 'Number of Connected Components in an Undirected Graph',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Graph'],
    patterns: ['Depth-First Search (DFS)', 'Union Find'], // Can be solved with DFS or Union Find for connected components
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 116,
    title: 'Minimum Knight Moves',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Graph', 'Breadth-First Search (BFS)'],
    patterns: ['Breadth-First Search (BFS)'], // Corrected: Added patterns
    companies: ['Facebook', 'Google', 'Microsoft'],
    leetCodeUrl: 'https://leetcode.com/problems/minimum-knight-moves',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 117,
    title: 'Subarray Sum Equals K',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Array'],
    patterns: ['Hash Table'],
    companies: ['Amazon', 'Apple', 'Netflix'],
    leetCodeUrl: 'https://leetcode.com/problems/subarray-sum-equals-k',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 118,
    title: 'Asteroid Collision',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Stack'],
    patterns: ['Stack'],
    companies: ['Microsoft', 'Facebook', 'Amazon'],
    leetCodeUrl: 'https://leetcode.com/problems/asteroid-collision',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 119,
    title: 'Random Pick with Weight',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Math', 'Prefix Sum'], // Added Prefix Sum as a relevant topic
    patterns: ['Binary Search', 'Prefix Sum'], // Corrected: Added patterns, Binary search is used after prefix sum
    companies: ['Google', 'Netflix', 'Apple'],
    leetCodeUrl: 'https://leetcode.com/problems/random-pick-with-weight',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 120,
    title: 'Kth Largest Element in an Array',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Heap'],
    patterns: ['Heap (Min Heap)', 'Quick Select'], // Added Quick Select as an alternative efficient approach
    companies: ['Amazon', 'Microsoft', 'Facebook'],
    leetCodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-an-array',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 121,
    title: 'Maximal Square',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Dynamic Programming'],
    patterns: ['Dynamic Programming'], // Uses Dynamic Programming for efficient solution
    companies: ['Amazon', 'Facebook', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/maximal-square',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 122,
    title: 'Rotate Image',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Matrix'],
    patterns: ['In-place Modification'], // Often solved with in-place modification to avoid extra space
    companies: ['Google', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/rotate-image',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 123,
    title: 'Binary Tree Zigzag Level Order Traversal',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Binary Tree'],
    patterns: ['Breadth-First Search (BFS)'], // Uses BFS with a level marker for zigzag traversal
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 124,
    title: 'Design Hit Counter',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Queue'],
    patterns: ['Queue'], // Uses a Queue with a fixed size to keep track of recent hits
    companies: ['Amazon', 'Google', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/design-hit-counter',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 125,
    title: 'Path Sum III',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Binary Tree'],
    patterns: ['Depth-First Search (DFS)'], // Uses DFS to traverse the tree and find paths with the target sum
    companies: ['Microsoft', 'Facebook', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/path-sum-iii',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 126,
    title: 'Pow(x, n)',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Math'],
    patterns: ['Fast Exponentiation'], // Uses Fast Exponentiation for efficient power calculation (avoiding repeated multiplication)
    companies: ['Google', 'Amazon', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/powx-n',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 127,
    title: 'Search a 2D Matrix',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Binary Search'],
    patterns: ['Binary Search'], // Uses Binary Search to efficiently search the sorted 2D matrix
    companies: ['Microsoft', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/search-a-2d-matrix',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 128,
    title: 'Largest Number',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['String'],
    patterns: ['Custom Sorting'], // Uses custom sorting based on string concatenation logic
    companies: ['Facebook', 'Amazon', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/largest-number',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 129,
    title: 'Decode Ways',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Dynamic Programming'],
    patterns: ['Dynamic Programming'], // Uses Dynamic Programming for efficient solution
    companies: ['Microsoft', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/decode-ways',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 130,
    title: 'Meeting Rooms II',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array', 'Sorting'], // Uses Sorting and a sweep-line approach to find the minimum number of meeting rooms
    patterns: ['Sorting'], // Sorting is a crucial step for the sweep-line approach
    companies: ['Amazon', 'Google', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/meeting-rooms-ii',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 131,
    title: 'Reverse Integer',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Math'],
    patterns: ['Handling Overflow'], // Important to consider overflow conditions when reversing integers
    companies: ['Microsoft', 'Facebook', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/reverse-integer',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 132,
    title: 'Set Matrix Zeroes',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Matrix'],
    patterns: ['In-place Modification'], // Often solved with in-place modification to avoid extra space
    companies: ['Amazon', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/set-matrix-zeroes',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 133,
    title: 'Reorder List',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Linked List', 'Two Pointers'], // Uses Two Pointers to find the middle and reverse the second half
    patterns: ['Two Pointers'], // Two Pointers technique is crucial for this solution
    companies: ['Facebook', 'Microsoft', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/reorder-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 134,
    title: 'Encode and Decode Strings',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['String'],
    patterns: ['Hash Table'], // Uses a Hash Table for efficient encoding and decoding
    companies: ['Amazon', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/encode-and-decode-strings',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 135,
    title: 'Cheapest Flights Within K Stops',
    difficulty: 'Medium',
    timeEstimate: 45,
    topics: ['Graph', 'Dynamic Programming'], // Uses Dynamic Programming with Bellman-Ford or Dijkstra's algorithm for efficient solution
    patterns: ["Dynamic Programming (Bellman-Ford or Dijkstra's Algorithm)"], // Both algorithms can be used to solve this problem
    companies: ['Google', 'Microsoft', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/cheapest-flights-within-k-stops',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 136,
    title: 'All Nodes Distance K in Binary Tree',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Binary Tree'],
    patterns: ['Depth-First Search (DFS)'], // Uses DFS to traverse the tree and find nodes at distance K from the target node
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 137,
    title: '3Sum Closest',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Array', 'Sorting'], // Uses Sorting to find the closest 3-sum efficiently
    patterns: ['Sorting'], // Sorting is a crucial step for this solution
    companies: ['Google', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/3sum-closest',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 138,
    title: 'Rotate List',
    difficulty: 'Medium',
    timeEstimate: 25,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Uses Two Pointers to find the new tail and head after rotation
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/rotate-list',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 139,
    title: 'Find Minimum in Rotated Sorted Array',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Binary Search'],
    patterns: ['Modified Binary Search'], // Uses a modified Binary Search approach to handle the rotation
    companies: ['Microsoft', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 140,
    title: 'Basic Calculator II',
    difficulty: 'Medium',
    timeEstimate: 30,
    topics: ['Stack'],
    patterns: ['Shunting Yard Algorithm'], // Uses Shunting Yard Algorithm to convert infix expression to postfix and evaluate it using a Stack
    companies: ['Amazon', 'Google', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/basic-calculator-ii',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 141,
    title: 'Combination Sum IV',
    difficulty: 'Medium',
    timeEstimate: 35,
    topics: ['Dynamic Programming'],
    patterns: ['Bottom-up Dynamic Programming'], // Uses Bottom-up Dynamic Programming for efficient solution
    companies: ['Microsoft', 'Facebook', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/combination-sum-iv',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 142,
    title: 'Insert Delete GetRandom O(1)',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Hash Table'],
    patterns: ['Hash Table with Additional Data Structure'], // Combines Hash Table with another data structure (like Array) for efficient random retrieval
    companies: ['Google', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/insert-delete-getrandom-o1',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 143,
    title: 'Non-overlapping Intervals',
    difficulty: 'Medium',
    timeEstimate: 20,
    topics: ['Array', 'Sorting'], // Uses Sorting and a sweep-line approach to find non-overlapping intervals
    patterns: ['Sorting'], // Sorting is a crucial step for the sweep-line approach
    companies: ['Amazon', 'Facebook', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/non-overlapping-intervals',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 144,
    title: 'Minimum Window Substring',
    difficulty: 'Hard', // Note that this Problem is actually classified as Hard on LeetCode
    timeEstimate: 30,
    topics: ['String'],
    patterns: ['Sliding Window'], // Uses a Sliding Window technique to find the minimum window substring
    companies: ['Facebook', 'Google', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/minimum-window-substring',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 145,
    title: 'Serialize and Deserialize Binary Tree',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Binary Tree'],
    patterns: ['Pre-order Traversal (DFS)'], // Often uses Pre-order Traversal (DFS) for serialization and deserialization
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 146,
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Stack'],
    patterns: ['Two Pointers'], // Uses Two Pointers to find the trapped water efficiently
    companies: ['Google', 'Facebook', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/trapping-rain-water',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 147,
    title: 'Find Median from Data Stream',
    difficulty: 'Hard',
    timeEstimate: 30,
    topics: ['Heap'],
    patterns: ['Heaps (Min-Heap and Max-Heap)'], // Uses a combination of Min-Heap and Max-Heap to maintain the median
    companies: ['Amazon', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/find-median-from-data-stream',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 148,
    title: 'Word Ladder',
    difficulty: 'Hard',
    timeEstimate: 45,
    topics: ['Graph', 'Breadth-First Search (BFS)'], // Uses Breadth-First Search (BFS) to find the shortest word ladder
    patterns: ['Breadth-First Search (BFS)'], // BFS is crucial for finding the shortest path in this problem
    companies: ['Facebook', 'Google', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/word-ladder',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 149,
    title: 'Basic Calculator',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Stack'],
    patterns: ['Shunting Yard Algorithm'], // May use Shunting Yard Algorithm for complex expressions, similar to Basic Calculator II
    companies: ['Microsoft', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/basic-calculator',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 150,
    title: 'Maximum Profit in Job Scheduling',
    difficulty: 'Hard',
    timeEstimate: 45,
    topics: ['Binary Search', 'Dynamic Programming'], // May use Binary Search for optimization and Dynamic Programming for efficient solution
    patterns: ['Binary Search'], // Binary Search is a potential approach for optimization
    companies: ['Amazon', 'Facebook', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 151,
    title: 'Merge k Sorted Lists',
    difficulty: 'Hard',
    timeEstimate: 30,
    topics: ['Heap'],
    patterns: ['Min Heap'], // Uses a Min Heap for efficient merging of k sorted lists
    companies: ['Microsoft', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 152,
    title: 'Largest Rectangle in Histogram',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Stack'],
    patterns: ['Monotonic Stack'], // Uses a Monotonic Stack to find the largest rectangle efficiently
    companies: ['Facebook', 'Google', 'Amazon'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 153,
    title: 'Binary Tree Maximum Path Sum',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Binary Tree'],
    patterns: ['Recursion'], // Often solved with Recursion to traverse the tree and find the maximum path sum
    companies: ['Amazon', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/binary-tree-maximum-path-sum',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 154,
    title: 'Maximum Frequency Stack',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Stack', 'Hash Table'], // Uses a combination of Stack and Hash Table for efficient frequency tracking and retrieval
    patterns: ['Stack with Additional Data Structure (Hash Table)'], // Combines Stack with Hash Table for this problem
    companies: ['Google', 'Netflix', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/maximum-frequency-stack',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 155,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Binary Search'],
    patterns: ['Binary Search (Modified)'], // Uses a modified Binary Search approach to find the median efficiently
    companies: ['Amazon', 'Microsoft', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/median-of-two-sorted-arrays',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 156,
    title: 'Longest Increasing Path in a Matrix',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Graph', 'Dynamic Programming'], // Uses Dynamic Programming for optimization
    patterns: ['Depth-First Search (DFS)'], // DFS is a common approach to traverse the matrix and find the longest increasing path
    companies: ['Google', 'Netflix', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 157,
    title: 'Longest Valid Parentheses',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Stack'],
    patterns: ['Stack'], // Uses a Stack to keep track of parentheses and find the longest valid substring
    companies: ['Facebook', 'Amazon', 'Microsoft'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/longest-valid-parentheses',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 158,
    title: 'Design In-Memory File System',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Trie'],
    patterns: ['Trie'], // Uses a Trie data structure to efficiently store and retrieve file paths and information
    companies: ['Google', 'Amazon', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/design-in-memory-file-system',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 159,
    title: 'Employee Free Time',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Array'],
    patterns: ['Merging Intervals'], // Uses a merge intervals approach to find the free time slots between employee schedules
    companies: ['Amazon', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/employee-free-time',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 160,
    title: 'Word Search II',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Graph', 'Backtracking'], // Uses Graph Traversal (DFS) and Backtracking for efficient exploration
    patterns: ['Depth-First Search (DFS)'], // DFS is the primary approach for exploring the board and finding words
    companies: ['Facebook', 'Amazon', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/word-search-ii',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 161,
    title: 'Alien Dictionary',
    difficulty: 'Hard',
    timeEstimate: 45,
    topics: ['Graph', 'Topological Sort'], // Uses Graph and Topological Sort to reconstruct the alien dictionary
    patterns: ['Topological Sort'], // Topological Sort is crucial to find the correct order of letters in the alien dictionary
    companies: ['Microsoft', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/alien-dictionary',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 162,
    title: 'Bus Routes',
    difficulty: 'Hard',
    timeEstimate: 45,
    topics: ['Graph', 'Breadth-First Search (BFS)'], // Uses Graph and Breadth-First Search (BFS) to find the minimum number of buses needed
    patterns: ['Breadth-First Search (BFS)'], // BFS helps in exploring the bus routes and finding the shortest path
    companies: ['Amazon', 'Google', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/bus-routes',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 163,
    title: 'Sliding Window Maximum',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Array', 'Monotonic Queue'], // Uses a Monotonic Queue data structure for efficient sliding window maximum finding
    patterns: ['Monotonic Queue'], // Monotonic Queue is a key concept for solving this problem in optimal time
    companies: ['Facebook', 'Google', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/sliding-window-maximum',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 164,
    title: 'Palindrome Pairs',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['String', 'Hash Table'], // Uses Hash Table for efficient storage and retrieval of palindromes and their indices
    patterns: ['Hash Table'], // Hash Table is a core component for solving this problem effectively
    companies: ['Amazon', 'Microsoft', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/palindrome-pairs',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 165,
    title: 'Reverse Nodes in k-Group',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Linked List'],
    patterns: ['Two Pointers'], // Uses two pointers to iterate and reverse nodes in groups
    companies: ['Amazon', 'Microsoft', 'Google'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 166,
    title: 'Sudoku Solver',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Matrix', 'Backtracking'], // Uses Backtracking to explore possible placements and validate the sudoku
    patterns: ['Backtracking'], // Backtracking is essential for solving this problem efficiently
    companies: ['Facebook', 'Apple', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/sudoku-solver',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 167,
    title: 'First Missing Positive',
    difficulty: 'Hard',
    timeEstimate: 35,
    topics: ['Hash Table'],
    patterns: ['In-place Modification'], // Uses an in-place modification approach with the Hash Table
    companies: ['Microsoft', 'Google', 'Apple'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/first-missing-positive',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 168,
    title: 'N-Queens',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Recursion', 'Backtracking'], // Uses Recursion and Backtracking to place N queens without attacking each other
    patterns: ['Backtracking'], // Backtracking plays a crucial role in exploring possible placements and identifying conflicts
    companies: ['Amazon', 'Facebook', 'Netflix'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/n-queens',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  },
  {
    id: 169,
    title: 'Smallest Range Covering Elements from K Lists',
    difficulty: 'Hard',
    timeEstimate: 40,
    topics: ['Heap', 'Priority Queue'], // Uses a Min Heap (Priority Queue) to efficiently find the smallest range
    patterns: ['Min Heap (Priority Queue)'], // Min Heap is a key concept for solving this problem in optimal time
    companies: ['Google', 'Amazon', 'Facebook'], // Commonly asked by these companies (no specific order)
    leetCodeUrl: 'https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists',
    videoUrl: 'https://youtube.com/watch?v=something',
    completed: false
  }
];

const problemsTopics = [
  'Array',
  'Stack',
  'Linked List',
  'String',
  'Binary Tree',
  'Binary Search',
  'Graph',
  'BST',
  'Hash Table',
  'Dynamic Programming',
  'Binary',
  'Math',
  'Heap',
  'Trie',
  'Backtracking',
  'Recursion',
  'Sorting',
  'HashMap',
  'Union Find',
  'Two Pointers',
  'Parsing',
  'Matrix',
  'Simulation',
  'Breadth-First Search',
  'Combinatorics',
  'Binary Search Tree',
  'Heap (Min Heap)',
  'Merge Sort',
  'Breadth-First Search (BFS)',
  'Prefix Sum',
  'Queue',
  'Dynamic Programming',
  'Backtracking',
  'Topological Sort',
  'Monotonic Queue',
  'Priority Queue'
];

const problemsCompanies = ['Facebook', 'Amazon', 'Microsoft', 'Google', 'Apple', 'Uber', 'Airbnb', 'Lyft', 'Netflix', 'Twitter'];

const problemsPatterns = [
  'HashMap',
  'Two Pointer',
  'Stack',
  'Linked List',
  'Sliding Window',
  'DFS',
  'BFS',
  'Binary Search',
  'BST Traversal',
  'Post Order',
  'Cycle Detection',
  'Stack Simulation',
  'Hash Map',
  'Dynamic Programming',
  'Fibonacci',
  'Frequency Count',
  'Iteration',
  'Recursion',
  'Boyer-Moore',
  'Bit Manipulation',
  'String Manipulation',
  'Tree Depth First Search (DFS)',
  'Fast & Slow Pointers',
  'Hash Table',
  'Sorting',
  'Horizontal Scanning',
  'Two Pointers',
  'Arithmetic Progression',
  'Reversal',
  'Recursive Traversal',
  "Kadane's Algorithm",
  'Merging',
  'Breadth-First Search (BFS)',
  'Min Heap',
  'Tree Breadth First Search (BFS)',
  'Depth-First Search (DFS)',
  'Topological Sort (Graph)',
  'Trie',
  'Prefix and Suffix Products',
  'Island Traversal',
  'Modified Binary Search',
  'Backtracking',
  'Sorting and Merging',
  'Tree Traversal',
  'Binary Search with Dictionary',
  'Union Find',
  'Dutch National Flag',
  'Knapsack Problem',
  'Character Parsing',
  'Edge Case Handling',
  'Layer Traversal',
  'Simulation of Movement',
  'Power Set',
  'Recursive Subset Building',
  'Rightmost Nodes',
  'Expand Around Center',
  'DP Table',
  'Grid Traversal',
  'DP Array',
  'Tree Construction',
  'Divide and Conquer',
  'Greedy',
  'Topological Sort',
  'Doubly Linked List',
  'In-order Traversal',
  'Monotonic Stack',
  'Bottom-up DP',
  "Floyd's Cycle Finding Algorithm",
  'Extra Space',
  'Merge Sort',
  'Union Find',
  'Prefix Sum',
  'Heap (Min Heap)',
  'Quick Select',
  'In-place Modification',
  'Queue',
  'Fast Exponentiation',
  'Custom Sorting',
  'Handling Overflow',
  "Dynamic Programming (Bellman-Ford or Dijkstra's Algorithm)",
  'Shunting Yard Algorithm',
  'Bottom-up Dynamic Programming',
  'Hash Table with Additional Data Structure',
  'Pre-order Traversal (DFS)',
  'Heaps (Min-Heap and Max-Heap)',
  'Shunting Yard Algorithm',
  'Binary Search',
  'Stack with Additional Data Structure (Hash Table)',
  'Binary Search (Modified)',
  'Merging Intervals',
  'Monotonic Queue',
  'Min Heap (Priority Queue)'
];

export { Problems, problemsTopics, problemsCompanies, problemsPatterns };
