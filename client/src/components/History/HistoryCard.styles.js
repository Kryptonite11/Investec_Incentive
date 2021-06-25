import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: 170,
		height: 245,
		backgroundColor: '#09794a',
		'&:hover': {
			backgroundColor: 'rgba(11, 130, 74, 1)',
			cursor: 'pointer',
		},
	},
	text: {
		wordWrap: 'break',
		padding: '10px',
		padingLeft: '10px',
		color: '#FFF',
	},
	backIcon: {
		color: '#FFF',
		paddingLeft: '10px',
	},
	forwardIcon: {
		color: '#FFF',
		paddingRight: '10px',
	},
}));

export default useStyles;
