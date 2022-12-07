const intersect = (nums1, nums2) => {
    let output = []
    for (let i = 0; i < nums1.length; i++) {
      const idx = nums2.indexOf(nums1[i])
      if (idx > -1) {
        output.push(nums1[i])
        nums2[idx] = -Infinity
      }
    }
    return output
  }
  