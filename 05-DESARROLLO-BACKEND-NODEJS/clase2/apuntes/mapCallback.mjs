function modifyElement1 (index, list) {
  return `${list[index]} es el elemento ${index - 1} de la lista ${list}`
}

function modifyElement2 (index, list) {
  return list[index] * 2
}

function mapWithCallbacks (modifyElement, list = []) {
  let index = 0
  let newList = []
  function recursiveCallbacks() {
    setTimeout(function() {
      if (index < list.length) {
        newList[index] = modifyElement(index, list)
        index++
        recursiveCallbacks()
      } else {
        console.log('list = ', list, 'newList = ', newList)
      }
    }, 1000)
  }
  recursiveCallbacks()
}

mapWithCallbacks(modifyElement1, [9, 5, 7])
mapWithCallbacks(modifyElement2, [9, 5, 7])