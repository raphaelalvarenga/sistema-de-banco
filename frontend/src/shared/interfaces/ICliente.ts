import { ILog } from "./ILog";

export interface ICliente {
	id: number;
	nome: string;
	saldo: number;
	logs: Array<ILog>;
}
