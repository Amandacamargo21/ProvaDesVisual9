import { Usuario } from './Usuario';

export interface Imc {
  id?: number;
  peso: number;
  altura: number;
  resultadoImc?: number;
  categoria?: string;
  usuario?: Usuario;
  usuarioId?: number;
}
