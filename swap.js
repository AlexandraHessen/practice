const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]