import { Service } from '../models/Service';

const mock = [
  new Service(1, 'Nova entrega', require('../assets/favicon.png'), 'Uma longa descrição', 'Agende uma nova entrega'),
  new Service(2, 'Cancelar entrega', require('../assets/favicon.png'), 'Uma longa descrição', 'Realize o cancelamento de uma entrega'),
  new Service(3, 'Listar entregas', require('../assets/favicon.png'), 'Uma longa descrição', 'Liste todas entregas agendadas'),
  new Service(4, 'Pesquisar entrega', require('../assets/favicon.png'), 'Uma longa descrição', 'Realize a busca por uma entrega'),
  new Service(5, 'Serviço 5', require('../assets/favicon.png'), 'Uma longa descrição', '[Serviço indisponivel]'),
  new Service(6, 'Serviço 6', require('../assets/favicon.png'), 'Uma longa descrição', '[Serviço indisponivel]'),
];

export default mock;
