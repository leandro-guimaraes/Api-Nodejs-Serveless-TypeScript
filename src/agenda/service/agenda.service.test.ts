import { AgendaService } from './agenda.service';
import { medicosMock } from '../mocks/agenda.mock';

describe('AgendaService', () => {
  let service: AgendaService;

  beforeEach(() => {
    service = new AgendaService();
  });

  it('Todos os médicos disponíveis e seus horários', () => {
    const result = service.getAgendas();
    expect(result.medicos).toEqual(medicosMock);
  });
});