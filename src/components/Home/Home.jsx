import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

const Home = () => {
    const datas = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-20 gap-5 my-14">
                {
                    datas.map(data => <Card key={data.id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;