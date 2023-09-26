import { useEffect, useState } from "react";
import Chart from "react-google-charts";

const Statistics = () => {
    const [donetData, setDonetData] = useState([]);


    useEffect(() => {
        const donetionItem = JSON.parse(localStorage.getItem('donation'))
        setDonetData(donetionItem);
    }, [])


    const totalDonation = 12 - donetData.length;
    const donate = donetData.length
    console.log(totalDonation, donate)


    return (
        <>
            <Chart
                chartType="PieChart"
                data={[
                    ['ww', 'rr'],
                    ["totalDonat", totalDonation],
                    ["donation", donate]

                ]}
                width={"100%"}
                height={"400px"}
            />
        </>
    );
};

export default Statistics;