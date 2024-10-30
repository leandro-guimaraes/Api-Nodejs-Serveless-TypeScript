import { AgendamentoService } from './agendamento.service';
import { AgendamentoRequest } from '../interface/agendamento.interface';

describe('AgendamentoService', () => {
  let service: AgendamentoService;

  beforeEach(() => {
    service = new AgendamentoService();
  });

  it('Agendamento criado com sucesso!', () => {
    const request: AgendamentoRequest = {
      medico_id: 1,
      paciente_nome: "Carlos Almeida",
      data_horario: "2024-10-05 09:00"
    };

    const result = service.createAgendamento(request);
    
    expect(result.mensagem).toBe('Agendamento realizado com sucesso');
    expect(result.agendamento.medico).toBe('Dr. João Silva');
    expect(result.agendamento.paciente).toBe('Carlos Almeida');
    expect(result.agendamento.data_horario).toBe('2024-10-05 09:00');
  });

  it('Erro ao identificar médico inválido!', () => {
    const request: AgendamentoRequest = {
      medico_id: 999,
      paciente_nome: "Carlos Almeida",
      data_horario: "2024-10-05 09:00"
    };

    expect(() => service.createAgendamento(request)).toThrow('Médico não encontrado');
  });

  it('Erro ao tentar agendar em horário indisponível', () => {
    const request: AgendamentoRequest = {
      medico_id: 1,
      paciente_nome: "Carlos Almeida",
      data_horario: "2024-10-05 08:00"
    };

    expect(() => service.createAgendamento(request)).toThrow('Horário não disponível');
  });
});
