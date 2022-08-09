const array = [9, 5, 1, 4, 7, 8, 3, 2, 6]

const heapSort = arr => {
    const heap = heapify(arr)

    for(let i=0; i<heap.length-1; i++) {
        extractMax(heap, 0, heap.length-i)
    }
    return heap
}

const extractMax = (heap, start, end) => {
    [heap[end-1], heap[start]] = [heap[start], heap[end-1]]
    const max = heap[end-1]
    siftDown(heap, start, end-1)
    return max
}

const heapify = (array) => {
    // 找到含有子节点的父亲节点
    for (let i = parseInt((array.length - 1) / 2); i >= 0; i--) {
        console.log(array[i])
        siftDown(array, i, array.length)
    }
    return array // 直接返回array，说明是就地操作（直接操作原数组）
}

/* 
* 所有i都含有左节点
* 比较左右节点
* 调换位置
*/
const siftDown = (heap, i, length) => {
    const left = 2*i+1, right = 2*i+2
    let greater = left // 假设左儿子最大
    if(greater >= length) { return } // 防止越界，调换位置后会递归的看左儿子是否有子节点
    if(right < length && heap[right] > heap[greater]) {
        greater = right
    }
    // 左右最大 和 父亲节点比大小
    if(heap[greater] > heap[i]) {
        console.log(`交换 ${heap[greater]} ${heap[i]}`);
        [heap[greater], heap[i]] = [heap[i], heap[greater]]
        siftDown(heap, greater, length) // 交换位置后递归的比较大小
    }
}

console.log(heapSort(array))