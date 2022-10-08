function * genPromises (n) {
    for (let i = 0; i < n; i++)
      yield Promise.resolve(i * 2);
  }
  
  // `arr` will be `[ 0, 2, 4, 6 ]`.
  const arr = [];
  for await (const v of genPromises(4)) {
    arr.push(v);
  }
  
  // This is equivalent.
  const arr = await Array.fromAsync(genPromises(4));