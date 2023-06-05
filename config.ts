import TrajectoryProps from './types'

// 9.81 é a aceleração devido à gravidade na superfície da Terra
export const speedWorld: number = 9.81

// Gravidade da terra atualmente
export const gravity: number = 10

// raio do alvo( altura, largura)
export const hitTargetRadius: number = 25

// converter graus para radianos
export const degressRadians: number = Number(Math.PI / 180)

// Retorna o seno de um ângulo em radianos
export const sineRadians = (radians: number): number => {
  return Math.sin(radians)
}

// Retorna o cosseno de um ângulo em radianos
export const cosineRadians = (radians: number): number => {
  return Math.cos(radians)
}

// setar local do alvo 2d eixos X e Y
export const alvo: TrajectoryProps = {
  x: 100,
  y: 100
}
