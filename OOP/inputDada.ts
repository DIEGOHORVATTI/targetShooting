import terminal from './terminal'

class InputData {
  // Leitura do angulo
  static chooseAngle = (): Promise<string> =>
    new Promise((resolve) => {
      terminal.question('Digite o ângulo: ', (input) => {
        resolve(input)
      })
    })

  // Leitura da velocidade
  static chooseSpeed = (): Promise<string> =>
    new Promise((resolve) => {
      terminal.question('Digite a velocidade: ', (input) => {
        resolve(input)
      })
    })

  // Leitura de continuidade do jogo
  static keyboardInput = (): Promise<string> =>
    new Promise((resolve) => {
      terminal.question('Digite 1 para continuar ou 0 para sair: ', (input) => {
        resolve(input)
      })
    })
}

export default InputData
