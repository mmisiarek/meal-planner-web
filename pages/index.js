import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const MySpan = styled.span`
    color: tomato;
`;

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2)
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Paper className={classes.root}>
                <Typography variant="h1" gutterBottom>
                    Meal Planner
                </Typography>
                <Typography variant="h2" gutterBottom>
                    Recipes
                </Typography>
                <Typography variant="h3" gutterBottom>
                    Pizza
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <MySpan>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quos blanditiis tenetur unde suscipit, quam beatae
                        rerum inventore consectetur, neque doloribus, cupiditate
                        numquam dignissimos laborum fugiat deleniti? Eum quasi
                        quidem quibusdam.
                    </MySpan>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur unde suscipit, quam beatae rerum
                    inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem
                    quibusdam.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur unde suscipit, quam beatae rerum
                    inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem
                    quibusdam.
                </Typography>

                <Button>click</Button>
            </Paper>
        </Container>
    );
}

export default Home;
