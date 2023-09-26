import DonationItem from "../DonationItem/DonationItem";

const Donation = () => {

    const donetionItem = JSON.parse(localStorage.getItem('donation'))
    console.log(donetionItem)

    return (
        <>
            <div className="grid grid-cols-2 gap-5 mx-20 my-10">
                {
                    donetionItem.map((singleItem, idx) => <DonationItem key={idx} singleItem={singleItem}></DonationItem>)
                }
            </div>
        </>
    );
};

export default Donation;