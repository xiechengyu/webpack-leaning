export default () => {
  const a = [111,222,333,444]
  const b = () => {
    a.forEach((value,index) => {
      if(a[index + 1] === undefined){
        return 0
      } else{
        a[index] = value + a[index + 1]
      }
    })
  }
  const c = () => {
    [1, 2, 3].map((n) => n + 1);
  }
  b()
  console.log(a)
  console.log(b)
  console.log(c)
}