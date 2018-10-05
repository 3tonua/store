export const styles = theme => ({
    productsWrapper: {
        maxWidth: 1000,
        margin: '0 auto',
        padding: '30px 30px 80px',
    },
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        top: '20%',
        left: '50%',
        transform: 'translate(-50%)',
        borderRadius: 4,
    },
    modal: {},
    textField: {
        width: '100%',
    },
    addButton: {
        position: 'fixed',
        bottom: 90,
        right: 30,
    }
});