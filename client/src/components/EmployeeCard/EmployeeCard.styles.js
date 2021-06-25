import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		// maxWidth: 300,
		// minWidth: 100,
		width: 170
	},
	media: {
		height: 40,
		width: 100,
		marginLeft: 40,
		
		// paddingTop: '56.25%', // 16:9
		paddingTop: '40%',
		// paddingBottom: "10px"
	},
	avatar: {
		backgroundColor: "#09794a",
		// backgroundColor: colours[Math.floor(Math.random() * colours.length)],
	},
	vote: {
		marginLeft: "55px"
	},
}));

export default useStyles;
