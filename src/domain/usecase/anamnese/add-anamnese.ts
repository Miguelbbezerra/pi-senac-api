import { Anamnese } from '../../model/anamnese'
import { Paciente } from '../../model/paciente'
import { Podologo } from '../../model/podologo'

export interface AnamneseModel {
  paciente: Paciente
  podologo: Podologo
  estadoCivil: string
  profissao: string
  posicaoTrabalho: string
  etilista: boolean
  tabagista: boolean
  tipoCalcado: string
  tipoMeia: string
  praticaEsporte: boolean
  habitoAlimentar: string
  medicamentoContinuo: string
  estatura: string
  peso: string
  pressaoArterial: string
  glicemia: string
  tipagemSanguinea: string
  doencasPreExistentes: string
  tratamentoPodologico: string
  cirurgiaInferiores: string
  possuiAlergia: string
  gestante: boolean
  lactante: boolean
  amputacoes: string
  escalaDeDor: string
  pinosMarcapasso: string
  perfusoesPE: string
  perfusoesPD: string
  digitoPressaoPE: boolean
  digitoPressaoPD: boolean
  formatoUnhasPD: string
  formatoUnhasPE: string
  formatoPePE: string
  formatoPePD: string
  testeMonofilamentoPE: string
  testeMonofilamentoPD: string
}

export interface AddAnamnese {
  add(anamneseModel: AnamneseModel): Promise<Anamnese>
}
