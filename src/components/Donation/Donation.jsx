import { useState } from "react";
import DonationItem from "../DonationItem/DonationItem";


const Donation = () => {
    const [show, setShow] = useState(false);



    const donetionItem = JSON.parse(localStorage.getItem('donation'))
    console.log(donetionItem)

    return (
        <>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 mx-20 my-10">
                {
                    show ? donetionItem.map((singleItem, idx) => <DonationItem key={idx} singleItem={singleItem}></DonationItem>) : donetionItem.slice(0, 4).map((singleItem, idx) => <DonationItem key={idx} singleItem={singleItem}></DonationItem>)
                }
            </div>

            {
                donetionItem.length > 4 && <button className="btn block mx-auto  btn-success" onClick={() => setShow(!show)} >See More</button>

            }
        </>
    );
};

export default Donation;