import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import SearchItem from "../SearchItem/SearchItem";

const Home = () => {
    const [category, setCategory] = useState('')
    const [categoryItem, setCategoryItem] = useState([])
    console.log(categoryItem)
    const datas = useLoaderData();

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleSearch = () => {
        console.log(categoryItem)

    }

    useEffect(() => {
        const items = datas.filter(data => data.category == category);
        setCategoryItem(items)
    }, [category, datas])
    return (
        <div>
            <Banner handleCategory={handleCategory} handleSearch={handleSearch}></Banner>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-20 gap-5 my-14">
                {

                    datas.map(data => <Card key={data.id} data={data}></Card>)
                }
                {
                    categoryItem.map(data => <SearchItem key={data.id} data={data}></SearchItem>)
                }
            </div>
        </div>
    );
};

export default Home;