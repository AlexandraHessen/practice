let search = function(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while(left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] === target) {
			return mid;
		}

		// проверка: какая из частей отсортирована, какая НЕТ
		if (arr[left] <= arr[mid]) { // левая часть = отсортирована
			if (arr[left] <= target && target < arr[mid]) { // проверка = где находится target
				right = mid - 1;
			} else {
				left = mid + 1
			}
		} else { // правая часть = отсортирована
			if (target > arr[mid] && target <= arr[right]) { // проверка = где находится target
				left = mid + 1
			} else {
				right = mid - 1;
			}
		}
		
	}

	return -1;
}