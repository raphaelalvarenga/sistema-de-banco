import React, { useState } from "react";
import { ILog } from "./shared/interfaces/ILog";
import { ICliente } from "./shared/interfaces/ICliente";
import { ITransferencia } from "./shared/interfaces/ITransferencia";
import { Button, Input, Fade, Container } from "reactstrap";

const App = () => {
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
	const [mostrarSaldo, setMostrarSaldo] = useState<boolean>(false);

	const sacar = () => {
		const novoSaldo = cliente.saldo - parseInt(valorSaque);

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
		<Container>
			<div
				style={{
					display: "flex",
				}}
			>
				<div style={{ flex: 1 }}>
					<div>Bom dia, {cliente.nome}!</div>

					<Button
						outline
						color="danger"
						onClick={() => setMostrarSaldo(!mostrarSaldo)}
					>
						{mostrarSaldo ? "Esconder" : "Mostrar"} Saldo
					</Button>

					<Fade in={mostrarSaldo} tag="h5">
						R$ {`${cliente.saldo},00`}
					</Fade>

					{/* Saque */}
					<div style={{ display: "flex", padding: "30px 0" }}>
						<div>
							<Input
								onChange={event => {
									setValorSaque(event.target.value);
								}}
								type="number"
								placeholder="Valor"
								value={valorSaque}
							/>
						</div>
						<div>
							<Button color="primary" onClick={sacar}>
								Sacar
							</Button>
						</div>
					</div>

					{/* Depósito */}
					<div style={{ display: "flex", padding: "30px 0" }}>
						<div>
							<Input
								type="number"
								placeholder="Valor"
								value={valorDeposito}
								onChange={event => setValorDeposito(event.target.value)}
							/>
						</div>
						<div>
							<Button color="primary" onClick={depositar}>
								Depositar
							</Button>
						</div>
					</div>

					{/* Transferência */}
					<div style={{ display: "flex", padding: "30px 0" }}>
						<div>
							<Input
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
							<Input
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
							<Button color="primary" onClick={transferir}>
								Enviar
							</Button>
						</div>
					</div>
				</div>
				<div style={{ minWidth: "300px" }}>
					<ul>
						{cliente.logs.map((log: ILog) => (
							<li key={log.id}>{log.mensagem}</li>
						))}
					</ul>
				</div>
			</div>
		</Container>
	);
};

export default App;
