"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const agenda_service_1 = require("../service/agenda.service");
const handler = async () => {
    try {
        const agendaService = new agenda_service_1.AgendaService();
        const agendas = agendaService.getAgendas();
        return {
            statusCode: 200,
            body: JSON.stringify(agendas)
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erro interno de servidor!' })
        };
    }
};
exports.handler = handler;
//# sourceMappingURL=agenda.js.map