function cariMedian(arr) {
    // arr.sort(function(a, b) { return a - b }) => this sort is for when we want to find median of all number (as supposed to be an actual median), not to find the middle number (which is the test cases result)
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2
    } else {
        return arr[Math.floor(arr.length / 2)]
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5