import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {
    const datas = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div>
                {
                    datas.map(data => <Cards key={data.id} data={data}></Cards>)
                }
            </div>
        </div>
    );
};

export default Home;