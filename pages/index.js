import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const MyH1 = styled.div`
    color: tomato;
`;

function Home() {
    return (<div>
        <MyH1>
            Welcome to Meal Planner!
        </MyH1>
        <Button>click</Button>
    </div>);
}

export default Home;