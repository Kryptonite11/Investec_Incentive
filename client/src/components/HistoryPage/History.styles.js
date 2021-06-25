import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		// maxWidth: 300,
		// minWidth: 100,
		marginTop: '90px',
		margin: '30px',
	},
	text: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '10px',
		color: '#474948',
		// fontWeight: "50px"
	},
	graph: {
		margin: 'auto',
		width: '80vw',
		height: '40vh',
		marginTop: '28px',
	},
	paper: {
		width: 170,
	},
	media: {
		height: 30,
		width: 100,
		marginLeft: 30,

		// paddingTop: '56.25%', // 16:9
		paddingTop: '40%',
		// paddingBottom: "10px"
	},
	avatar: {
		backgroundColor: '#09794a',
		// backgroundColor: colours[Math.floor(Math.random() * colours.length)],
	},
	vote: {
		marginLeft: '55px',
	},
	carousal: {
		// margin: "20px",
		'& .rec.rec-arrow': {
			backgroundColor: '#075840',
			color: '#FFF',
		},
		'& .rec.rec-arrow:hover': {
			backgroundColor: '#09794a',
			color: '#FFF',
		},
		'& .rec.rec-arrow:disabled': {
			backgroundColor: '#CCCCCC',
			color: '#FFF',
		},
		'& .rec.carousel-item:focus': {
			backgroundColor: '#09794a',
		},
		'& .red.rec-dot': {
			backgroundColor: 'rgba(9, 121, 74, 0.6)',
		},
		'& .rec.rec-dot:hover, .rec.rec-dot:active, .rec.rec-dot:focus': {
			backgroundColor: '#09794a',
			// border: "2px #FFF solid"
		},
	},
}));

export default useStyles;
