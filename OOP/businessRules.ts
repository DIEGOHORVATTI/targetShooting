import {
  gravity,
  sineRadians,
  cosineRadians,
  degressRadians,
  hitTargetRadius
} from '../config'
import TrajectoryProps from '../types'
import InputData from './inputDada'

class Projectile {
  static async calculateTrajectory(): Promise<TrajectoryProps> {
    // Escolhe o ângulo e a velocidade do projétil
    const angle = Number(await InputData.chooseAngle())
    const speed = Number(await InputData.chooseSpeed())

    // Converte o ângulo de graus para radianos
    const radians = angle * degressRadians

    // Calcula o seno e o cosseno do ângulo em radianos
    const sine = sineRadians(radians)
    const cosine = cosineRadians(radians)

    // Calcula a distância e a altura máxima da trajetória
    const distance = (speed * cosine * (2 * speed * sine)) / gravity
    const maxHeight = (speed * sine) ** 2 / (2 * gravity)

    // Retorna a distância e a altura máxima da trajetória
    return {
      x: distance,
      y: maxHeight
    }
  }

  static verificarColisao(
    alvo: TrajectoryProps,
    projétil: TrajectoryProps
  ): boolean {
    // Calcula a distância entre o projétil e o alvo
    const distanceToTarget = Math.hypot(
      projétil.x - alvo.x,
      projétil.y - alvo.y
    )

    // Verifica se a distância é menor ou igual ao raio do alvo
    return distanceToTarget <= hitTargetRadius
  }
}

export default Projectile
