const intersectMy  = function (nums1, nums2) {		
	const res = [];
	for (let i = 0; i < nums1.length; i++) {
		const current = nums1[i];
		for (let j = 0; j < nums2.length; j++) {
				if (current === nums2[j]) {
					res.push(current);
					nums2.splice(j, 1);
					break;
				}
		}
	}
	return res;
}