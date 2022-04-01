import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const formatDate = (date: string) => {
	return format(new Date(date), "dd 'de' LLL, yyyy", { locale: ptBR });
};

export default formatDate;
