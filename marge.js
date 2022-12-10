function merge(list){
    list.sort((a, b) =>{
      return a[0]-b[0]
    })
    let out = []
    list.forEach(([start,end])=>{
      let last = out.pop()
      if(!last){
        out.push([start,end])
      }else{
        let [last_s, last_e] = last
        if(start <= last_e){
          out.push([last_s, Math.max(end,last_e)])
        }else{
          out.push(last, [start,end])
        }
      }
    })
    return out
  }