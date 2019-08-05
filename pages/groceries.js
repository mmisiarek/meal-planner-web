import groceriesQuery from "../graphql/queries/groceries.graphql";
import { useQuery } from "@apollo/react-hooks";

function Groceries(params) {
    const { loading, data } = useQuery(groceriesQuery);
    if (loading) {
        return <span>LOADING....</span>;
    }
    return (
        <ul>
            {data.groceries.map(grocery => {
                return <li key={grocery.id}>{grocery.name}</li>;
            })}
        </ul>
    );
}

export default Groceries;
