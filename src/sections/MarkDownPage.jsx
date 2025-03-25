import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { Container, Box } from '@mui/material';

const MarkdownPage = ({ filePath }) => {
	const [content, setContent] = useState('');

	useEffect(() => {
		fetch(filePath)
			.then((res) => res.text())
			.then((text) => setContent(text));
	}, [filePath]);

	return (
		<Container maxWidth="md">
			<Box sx={{ py: 8 }}>
				<ReactMarkdown>{content}</ReactMarkdown>
			</Box>
		</Container>
	);
};

export default MarkdownPage;
