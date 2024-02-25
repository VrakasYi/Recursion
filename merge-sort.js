function mergeSort(array) {
    if (array.length === 1) return array;
    const midpoint = Math.floor(array.length / 2);
    const firstHalf = mergeSort(array.slice(0, midpoint));
    const secondHalf = mergeSort(array.slice(midpoint));

    let merged = [];
    let i = 0, j = 0, k = 0;
    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] < secondHalf[j]) {
            merged[k] = firstHalf[i];
            i++;
        } else {
            merged[k] = secondHalf[j];
            j++
        };
        k++
    };

    while (i < firstHalf.length) {
        merged[k] = firstHalf[i];
        i++;
        k++;
    };

    while (j < secondHalf.length) {
        merged[k] = secondHalf[j];
        j++;
        k++;
    };
    return merged
};
console.log(mergeSort([2, 8, 54, 12, 13, 21, 22, 64, 3, 1]))