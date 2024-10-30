import { APIGatewayProxyHandler } from 'aws-lambda';
import { AgendaService } from '../service/agenda.service';

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const agendaService = new AgendaService();
    const agendas = agendaService.getAgendas();

    return {
      statusCode: 200,
      body: JSON.stringify(agendas)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro interno de servidor!' })
    };
  }
};