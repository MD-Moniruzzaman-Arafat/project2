const Banner = () => {
    return (
        <div className="relative text-center h-[600px] items-center">
            {/* Background image with opacity */}
            <div
                className="absolute inset-0 bg-[url('https://i.ibb.co/5TDYcs8/Rectangle-4281.png')] bg-no-repeat bg-cover"
                style={{ opacity: '0.1' }} // Adjust opacity as needed
            />

            <div className="relative flex flex-col h-[600px] justify-center items-center">
                <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                <div className="join">
                    <input className="input input-bordered join-item w-96" placeholder="Search here...." />
                    <button className="btn join-item rounded-r-lg bg-[#FF444A] text-white hover:bg-[#FF444A] text-white">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
