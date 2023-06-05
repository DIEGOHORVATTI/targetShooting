import readline from 'readline'

class Terminal {
  interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
}

export default new Terminal().interface
