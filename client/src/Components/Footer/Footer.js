import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © Dor Romano    '}

            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <Box mt={5}>
            <Copyright />
        </Box>
    )
}
export default Footer