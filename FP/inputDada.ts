import { terminal } from './terminal'

// Leitura do angulo
export const chooseAngle = (): Promise<string> => {
  return new Promise((resolve) => {
    terminal.question('Digite o ângulo: ', (input) => {
      resolve(input)
    })
  })
}

// Leitura da velocidade
export const chooseSpeed = (): Promise<string> => {
  return new Promise((resolve) => {
    terminal.question('Digite a velocidade: ', (input) => {
      resolve(input)
    })
  })
}

// Leitura de continuidade do jogo
export const keyboardInput = (): Promise<string> => {
  return new Promise((resolve) => {
    terminal.question('Digite 1 para continuar ou 0 para sair: ', (input) => {
      resolve(input)
    })
  })
}
