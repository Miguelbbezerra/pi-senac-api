import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { AgendamentoSchema } from './schema/agendamento'
import { AnamneseSchema } from './schema/anamnese'
import { PacienteSchema } from './schema/paciente'
import { PodologoSchema } from './schema/podologo'

const SnakeNamingStrategy =
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('typeorm-naming-strategies').SnakeNamingStrategy

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '192.168.23.9',
  port: 3306,
  username: 'jhonatasobral',
  password: 'Jhon@t@87',
  database: 'sistema_podologia',
  synchronize: true,
  metadataTableName: 'meta_data_custom',
  relationLoadStrategy: 'join',
  logging: true,
  entities: [PacienteSchema, PodologoSchema, AgendamentoSchema, AnamneseSchema],
  migrations: [],
  subscribers: [],
  namingStrategy: new SnakeNamingStrategy()
})
