function showOne (callback, index = 0, step = 1, limit = 5, PORT = 8000) {
  setTimeout(function() {
    if (index < limit) {
      index = index + step
      callback(index)
      showOne(callback, index)
    } else {
      console.log(`After ${index} seconds`)
      console.log(`Server running at http://localhost:${PORT}/`)
    }
  }, step * 1000)
}

showOne(function (number) {
  console.log(number)
  setTimeout(function () {
    console.clear()
  }, 500)
})