import AlertCircle from '@Assets/icon/sprite/alert-circle.svg?react';
import { Body, Heading } from '@Components/Typography';
import { ButtonIcon } from '@Components/UI/Buttons';
import './App.scss';

function App() {
	return (
		<>
			<div style={{ padding: '25px' }}>
				<Heading size="extraLarge" weight="bold">
					Heading
				</Heading>
				<Body size="extraLarge">Body</Body>
				<ButtonIcon size="large" type="glass">
					<AlertCircle />
				</ButtonIcon>
			</div>
		</>
	);
}

export default App;
