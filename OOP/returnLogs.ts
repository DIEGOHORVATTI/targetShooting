import TrajectoryProps from '../types'

class Log {
  public static startLog(): void {
    console.clear()
    console.log('\n')
    console.log('Bem vindo ao jogo de tiro ao alvo!')
    console.log('Pressione "Ctrl + C" para sair do jogo')
    console.log('\n')
  }

  public static debugLog(
    trajectory: TrajectoryProps,
    alvo: TrajectoryProps
  ): void {
    console.log('\n')
    console.log(`Tragetória: ${trajectory.x},${trajectory.y}`)
    console.log(`Alvo: ${alvo.x},${alvo.y}`)
    console.log('\n')
  }
}

export default Log
