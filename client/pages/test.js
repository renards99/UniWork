import { useState, useCallback, useEffect } from 'react';
import { Input } from '@chakra-ui/react';
export default function HomePage() {
	const [name, setName] = useState('');

	function ClickMe() {}

	useEffect(() => {}, []);

	return (
		<div>
			<Input placeholder='Basic usage' />
		</div>
	);
}
