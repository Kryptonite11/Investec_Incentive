import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Paid from '@material-ui/icons/MonetizationOn';

import styles from './AppBar.styles';

const ElevationScroll = (props) => {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		// target: window ? window() : undefined,
		target: window,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
};

const DisplayAppBar = (props) => {
	const classes = styles();


	const handleLogout = () => {
		console.log('logout');
		props.setToken('');
	};


	return (
		<div className={classes.grow}>
			{/* <CssBaseline /> */}
			<ElevationScroll {...props}>
				<AppBar
					style={{
						background:
							'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,88,64,1) 100%)',
					}}
				>
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.icon}
							color="inherit"
						>
							<Paid fontSize="large" />
						</IconButton>
						<Typography
							className={classes.title}
							variant="h4"
							noWrap
						>
							In-Cent-ive
						</Typography>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
							<IconButton
								edge="end"
								aria-label="account of current user"
								aria-haspopup="true"
								onClick={handleLogout}
								color="inherit"
							>
								<ExitToAppIcon fontSize="large" />
							</IconButton>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
								aria-label="show more"
								aria-haspopup="true"
								onClick={handleLogout}
								color="inherit"
							>
								<ExitToAppIcon fontSize="large" />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
		</div>
	);
};

export default DisplayAppBar;
