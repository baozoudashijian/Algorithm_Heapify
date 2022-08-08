const heap = [64, 59, 48, 45, 31, 35, 17, 23, 10, 26]

const insert = (heap, item) => {
    heap.push(item)
    siftUp(heap, heap.length - 1) // 插入的最后一个元素，还没有形成堆
}

const siftUp = (heap, i) => {
    if(i === 0) { return }
    const parent = parseInt((i-1)/2)
    console.log(parent)
    if(heap[i] > heap[parent]) {
        console.log(`交换${heap[i]} ${heap[parent]}`);
        [heap[parent], heap[i]] = [heap[i], heap[parent]] // 交换位置 左边和右边 无所谓
        siftUp(heap, parent)
    }
}

insert(heap, 60)
console.log(heap)