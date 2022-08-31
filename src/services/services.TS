import * as operacoesRepositories from '../repositorys/repositories';

export function novaSoma(numero: number): number {

    const buscaNumero = operacoesRepositories.getRanking();
    const soma:number = numero + buscaNumero

    return soma

} 