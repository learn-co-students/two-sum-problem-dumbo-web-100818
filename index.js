function bruteForceTwoSum(arr, sum){
  let yar = []
  for(let i =0; i < arr.length; i++) {
    for(let z=i+1; z < arr.length; z++){
      if(arr[i]+arr[z] === sum) {
          yar.push([arr[i],arr[z]])
      }
    }
  }
  return yar
}

function merge(arr1, arr2) {
  let sorted = []
  while (arr1 != 0 && arr2 != 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift())
    } else {
      sorted.push(arr2.shift())
    }

  }
  return sorted.concat(arr1).concat(arr2)
}
function mergeSort(arr) {
  let mid = arr.length / 2
  let first = arr.slice(0, mid)
  let last = arr.slice(mid, arr.length)
  if (arr.length < 2) {
  return arr
} else {
return merge(mergeSort(first), mergeSort(last))
}
}


function binarySearchTwoSum(arr, sum) {
  let x = mergeSort(arr)
  let results = []

  if ((x && x.length === 0) || sum === undefined) {
    return false
  } else {
      for (let i = 0; i < x.length; i++) {
        let nums = sum - x[i]
        let beg = i+1
        let end = (x.length) -2

        while (beg <= end) {
          let mid = parseInt(((beg+end)/2))
          if (x[mid] === nums) {
            results.push([x[i], x[mid]])
            break
          } else if (nums < x[mid]) {
              end = mid - 1
          } else if (nums > x[mid]) {
              beg = mid + 1
          }
        }
      }
  }
  return results
}

function binaryMatch(arr, num) {
  let min = 0
  let max = arr.length-1
  let lala

  while (min <= max) {
    lala = Math.floor((min+max)/2)
    if (arr[lala] === num) {
      return true
    } else {
      if (arr[lala] < num) {
        min = lala + 1
      } else {
        max = lala - 1
      }
    }
  }
  return false
}

function hashTwoSum(arr, sum) {
  let results = []
  let hashy = {}

  for(let i = 0; i < arr.length; i++) {
    let nums = sum - arr[i]

    if(hashy[nums.toString()]) {
      results.push([nums, arr[i]])
    }
    hashy[arr[i].toString()] = arr[i]
  }
  return results
}
