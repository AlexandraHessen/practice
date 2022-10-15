function permutations(string) {
    const N = string.length
    const chars = string.split("")
    const set = new Set()
    genPerms(chars, 0, N - 1, set)
    return Array.from(set)
  }