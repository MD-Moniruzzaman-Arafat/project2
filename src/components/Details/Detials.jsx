import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detials = () => {
    const [details, setDetails] = useState({});
    // console.log(details)



    const { id } = useParams();
    // console.log(id)

    const datas = useLoaderData()
    // console.log(datas)

    useEffect(() => {
        const detailsItem = datas.find(data => data.id == id);
        setDetails(detailsItem)
    }, [id, datas])

    const { card_bg_color, picture, text_button_bg_color, title, description, price } = details;

    const handleDonate = () => {

        toast("donate success full");
        console.log(7)
        const addDonation = [];

        const donationItem = JSON.parse(localStorage.getItem('donation'))

        if (!donationItem) {
            addDonation.push(details);
            localStorage.setItem('donation', JSON.stringify(addDonation))


        } else {

            addDonation.push(...donationItem, details)
            localStorage.setItem('donation', JSON.stringify(addDonation))



        }
    }


    return (
        <div>

            <ToastContainer />
            <div className="card w-[700px] shadow-xl mx-auto my-5" style={{ backgroundColor: `${card_bg_color}`, }}>
                <div style={{ position: 'relative' }}>
                    <img className='w-[700px]' src={picture} alt="Shoes" />
                    <div className="button-container w-full p-2 absolute" style={{ bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <button onClick={handleDonate} className="btn text-white" style={{ backgroundColor: `${text_button_bg_color}` }}>Donate $ {price}</button>
                    </div>
                </div>
                <div className="p-5 space-y-4">
                    <h2 className="text-base font-bold">
                        {title}
                    </h2>
                    <p>{description}</p>
                </div>
            </div>


        </div>
    );
};

export default Detials;