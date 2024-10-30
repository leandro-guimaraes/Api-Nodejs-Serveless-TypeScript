import { AgendasResponse } from '../interface/agenda.interface';
import { medicosMock } from '../mocks/agenda.mock';

export class AgendaService {
  public getAgendas(): AgendasResponse {
    return {
      medicos: medicosMock
    };
  }
}