"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendamentoService = void 0;
const agenda_mock_1 = require("../../agenda/mocks/agenda.mock");
class AgendamentoService {
    createAgendamento(request) {
        const medico = agenda_mock_1.medicosMock.find(m => m.id === request.medico_id);
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
exports.AgendamentoService = AgendamentoService;
//# sourceMappingURL=agendamento.service.js.map