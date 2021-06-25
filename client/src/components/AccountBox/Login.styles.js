import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	// a
	mutedLink: {
		marginLeft: theme.spacing(6),
		fontSize: '12px',
		fontWeight: 500,
		color: 'rgba(160, 160, 160, 0.8)',
		textDecoration: 'none',
	},
	// a
	boldLink: {
		fontSize: '12px',
		fontWeight: 500,
		color: '#rgb(7,88,64)',
		textDecoration: 'none',
	},
	input: {
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		marginTop: theme.spacing(1),
	},
	submit: {
        width: "227px",
		padding: '10px',
		borderRadius: '50px',
		marginTop: theme.spacing(2),
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(2),
		// background: 'rgb(2,0,36)',
		background:
			// 'linear-gradient(90deg, rgba(9,121,74,1) 16%, rgba(0,212,255,1) 100%)',
			'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,88,64,1) 100%)',
		color: '#FFF',
	},
}));

export default useStyles;
