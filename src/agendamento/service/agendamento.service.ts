import { medicosMock } from '../../agenda/mocks/agenda.mock';
import { AgendamentoRequest, AgendamentoResponse } from '../interface/agendamento.interface';

export class AgendamentoService {
  public createAgendamento(request: AgendamentoRequest): AgendamentoResponse {
    const medico = medicosMock.find(m => m.id === request.medico_id);
    
    if (!medico) {
      throw new Error('Médico não encontrado');
    }

    if (!medico.horarios_disponiveis.includes(request.data_horario)) {
      throw new Error('Horário não disponível');
    }

    return {
      mensagem: "Agendamento realizado com sucesso",
      agendamento: {
        medico: medico.nome,
        paciente: request.paciente_nome,
        data_horario: request.data_horario
      }
    };
  }
}