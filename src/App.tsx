import React, { useState } from "react";

interface ILog {
	id: number;
	mensagem: string;
}

interface ICliente {
	id: number;
	nome: string;
	saldo: number;
	logs: Array<ILog>;
}

interface ITransferencia {
	numeroConta: string;
	valor: string;
}

const App = () => {
	// Regras para o Flexbox
	// 1) Criar uma div que servirá como pai
	// 2) Criar o seu conteúdo dentro desta div utilizando div filhas
	// 3) Atribuir à div pai o display: flex

	const [cliente, setCliente] = useState<ICliente>({
		id: 1,
		nome: "João da Silva",
		saldo: 1000,
		logs: [
			{
				id: 1,
				mensagem: "Você sacou R$ 500, em 15/07/2021 às 9h30",
			},
			{
				id: 30,
				mensagem: "Você depositou R$ 600,00 em 20/07/2021 às 20h",
			},
			{
				id: 35,
				mensagem: "Você sacou R$ 500, em 15/07/2021 às 9h30",
			},
			{
				id: 50,
				mensagem: "Você depositou R$ 600,00 em 20/07/2021 às 20h",
			},
			{
				id: 60,
				mensagem: "Você sacou R$ 500, em 15/07/2021 às 9h30",
			},
			{
				id: 61,
				mensagem: "Você depositou R$ 600,00 em 20/07/2021 às 20h",
			},
		],
	});

	const [valorSaque, setValorSaque] = useState<string>("500");
	const [valorDeposito, setValorDeposito] = useState<string>("300");
	const [transferencia, setTransferencia] = useState<ITransferencia>({
		numeroConta: "12345",
		valor: "100",
	});

	const sacar = () => {
		const novoSaldo = cliente.saldo - parseInt(valorSaque);

		// Requisitar o backend

		// Foi com sucesso?
		const success = false;

		success
			? setCliente({ ...cliente, saldo: novoSaldo })
			: alert("Ocorreu algum erro");
	};

	const depositar = () => {
		alert("depositou!");
	};

	const transferir = () => {
		alert("transferiu!");
	};

	return (
		<>
			<div
				style={{
					display: "flex",
				}}
			>
				<div style={{ flex: 1, borderStyle: "solid" }}>
					<div>Bom dia, {cliente.nome}!</div>
					<div>R$ {cliente.saldo},00</div>

					{/* Saque */}
					<div style={{ display: "flex", padding: "30px 0" }}>
						<div>
							<input
								onChange={event => {
									setValorSaque(event.target.value);
								}}
								type="number"
								placeholder="Valor"
								value={valorSaque}
							/>
						</div>
						<div>
							<button onClick={sacar}>Sacar</button>
						</div>
					</div>

					{/* Depósito */}
					<div style={{ display: "flex", padding: "30px 0" }}>
						<div>
							<input
								type="number"
								placeholder="Valor"
								value={valorDeposito}
								onChange={event => setValorDeposito(event.target.value)}
							/>
						</div>
						<div>
							<button onClick={depositar}>Depositar</button>
						</div>
					</div>

					{/* Transferência */}
					<div style={{ display: "flex", padding: "30px 0" }}>
						<div>
							<input
								type="text"
								placeholder="Conta"
								value={transferencia.numeroConta}
								onChange={event =>
									setTransferencia({
										...transferencia,
										numeroConta: event.target.value,
									})
								}
							/>
						</div>
						<div>
							<input
								type="text"
								placeholder="Valor"
								value={transferencia.valor}
								onChange={event =>
									setTransferencia({
										...transferencia,
										valor: event.target.value,
									})
								}
							/>
						</div>
						<div>
							<button onClick={transferir}>Enviar</button>
						</div>
					</div>
				</div>
				<div style={{ borderStyle: "solid", minWidth: "300px" }}>
					<ul>
						{cliente.logs.map((log: ILog) => (
							<li key={log.id}>{log.mensagem}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default App;
