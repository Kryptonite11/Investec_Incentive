import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	chart: {
		// display: "flex",
		// flexDirection: "column",
		// alignItems: "center",
		// justifyContent: "center",
		margin: 'auto',
		width: '80vw',
		height: "41vh",
		marginTop: '40px',
	},
	text: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		marginTop: '100px',
		color: '#474948',
		// fontWeight: "50px"
	},
	carousalBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '10px',
		marginLeft: '20px',
		marginRight: '20px',
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
