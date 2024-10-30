"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const agendamento_service_1 = require("../service/agendamento.service");
const handler = async (event) => {
    try {
        if (!event.body) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'O corpo da solicitação é obrigatório' })
            };
        }
        const request = JSON.parse(event.body);
        const agendamentoService = new agendamento_service_1.AgendamentoService();
        const response = agendamentoService.createAgendamento(request);
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    }
    catch (error) {
        if (error instanceof Error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: error.message })
            };
        }
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erro interno do servidor' })
        };
    }
};
exports.handler = handler;
//# sourceMappingURL=agendamento.js.map