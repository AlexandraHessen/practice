function genPerms(chars, left, right, set) {
    if (left === right) {
      set.add(chars.join(""))
    } else {
      for (let i = left; i <= right; i++) {
        swap(chars, left, i)
        genPerms(chars, left + 1, right, set)
        swap(chars, left, i)
      }
    }
  }