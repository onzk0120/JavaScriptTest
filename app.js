var str = "グローバルスコープ"

function fun() { 
  var str
  console.log(str)
  var str = "関数スコープ"
  console.log(str)
}

fun()