"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendaService = void 0;
const agenda_mock_1 = require("../mocks/agenda.mock");
class AgendaService {
    getAgendas() {
        return {
            medicos: agenda_mock_1.medicosMock
        };
    }
}
exports.AgendaService = AgendaService;
//# sourceMappingURL=agenda.service.js.map