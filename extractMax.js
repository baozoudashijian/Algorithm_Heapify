// 弹出最大元素，依然还是会成堆
const heap = [64, 60, 48, 45, 59, 35, 17, 23, 10, 26, 31]

const extractMax = (heap, start, end) => {
    [heap[end-1], heap[start]] = [heap[start], heap[end-1]]
    const max = heap[end-1]
    siftDown(heap, start, end-1)
    return max
}

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

const max = extractMax(heap, 0, heap.length)
console.log(max)