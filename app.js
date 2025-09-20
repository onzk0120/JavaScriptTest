function fun() {
    let x = "ブロックスコープ１"
    {
      let y = "ブロックスコープ２"
    }
    console.log(x)
    console.log(y)
}
  
fun()