// function formatUser(name: string, age: number): string {
//     return `Name: ${name}, Age: ${age}`;
// }

function formatUser(name: string = "Nombre por defecto", age?: number ): string {
    let ret: string;
    ret = `Name: ${name}`;
    if (age) {
        ret += `, Age: ${age}`;
    }
    return ret;
}

function printUser(name: string, age: number): void {
    console.log(formatUser(name, age));
}

// let formattedUser: object;
// formattedUser = formatUser("Nauel", 10); -> Nos devolveria un error. Esta función siempre devuelve un string.

const user1 = formatUser('Nauel', 33);
const user2 = formatUser('Pedro');
