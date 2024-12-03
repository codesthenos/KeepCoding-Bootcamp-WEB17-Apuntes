function formatUser (name: string, age: number): string {
  return `Name: ${name}, Age: ${age}`
}

function formatUser2 (name: string, age?: number): string {
  let ret = `Name: ${name}`
  if (age) {
    ret += `, Age: ${age}`
  }
  return ret
}

function printUser (name: string, age: number): void {
  console.log(formatUser2(name, age))
}

const user1 = formatUser2('Nauel', 33)
const user2 = formatUser2('Pedro')