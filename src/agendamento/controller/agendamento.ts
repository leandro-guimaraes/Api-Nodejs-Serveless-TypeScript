import { APIGatewayProxyHandler } from 'aws-lambda';
import { AgendamentoService } from '../service/agendamento.service';
import { AgendamentoRequest } from '../interface/agendamento.interface';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'O corpo da solicitação é obrigatório' })
      };
    }

    const request: AgendamentoRequest = JSON.parse(event.body);
    const agendamentoService = new AgendamentoService();
    const response = agendamentoService.createAgendamento(request);

    return {
      statusCode: 200,
      body: JSON.stringify(response)
    };
  } catch (error) {
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