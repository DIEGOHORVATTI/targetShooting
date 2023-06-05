import { calculateTrajectory, verificarColisao } from './businessRules'
import { debugLog, startLog } from './returnLogs'
import { keyboardInput } from './inputDada'
import { terminal } from './terminal'
import { alvo } from '../config'

/*
  Sempre pensa no eixo X como sendo a distância e no eixo Y como sendo a altura.
  O alvo está no ponto (0,0) e o tiro está no ponto (100, 100)
  Ele tem 25Metros
  
  [exemplo]
  Digite o ângulo: 74
  Digite a velocidade: 48
*/

const startGame = async () => {
  console.log('\n')
  const trajectory = await calculateTrajectory()
  debugLog(trajectory, alvo)

  if (verificarColisao(alvo, trajectory)) {
    console.log('Acertou!')
    Number(await keyboardInput()) === 1 ? await startGame() : process.exit(1)
  } else {
    console.log('Errou!')

    console.log(
      trajectory.y < alvo.y
        ? 'Ajuste o ângulo de lançamento para cima.'
        : 'Ajuste o ângulo de lançamento para baixo.'
    )

    trajectory.x < alvo.x - 10
      ? console.log('Aumente a velocidade de lançamento.')
      : trajectory.x > alvo.x + 10 &&
        console.log('Diminua a velocidade de lançamento.')

    await startGame()
  }

  terminal.close()
}

startLog()
startGame()
