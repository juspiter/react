import { useState } from 'react';

function Home() {
  return (
		<div>
			<h1>Hello Juspiterians</h1>
			<Contador />
		</div>
		);
}

function Contador() {
	const [contador, setContador] = useState(0);

	function adicionarContador(){
		setContador(contador + 1);
	}
	return (
	 <div>
			<div>{contador}</div>
			<button onClick={adicionarContador}>Click</button>
		</div>
	);
}

export default Home
