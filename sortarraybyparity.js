//Objective is to sort an array by parity - evens first, then odds

let A = [2,1,3,4]


//O(n) solution that creates two new arrays (O(n) space) to store evens and odds

let even = []
let odd = []

for (let num of A) {
    if (num % 2 == 0) {
        even.push(num)
    } else {
        odd.push(num)
    }
}

return even.concat(odd)


//O(n) solution that sorts in place

let left = 0
let right = A.length - 1

while (left < right) {
    //If we pass an odd element, swap and decrement right pointer
    if (A[left] % 2 != 0) {
        let temp = A[left]
        A[left] = A[right]
        A[right--] = temp
    //Otherwise, we're on an even element, so move on
    } else {
        left++
    }
}

return A