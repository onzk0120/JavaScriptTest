var str = "グローバルスコープ"

function fun() {
  console.log(str)
  var y = "関数スコープ"
}

fun()
console.log(y)