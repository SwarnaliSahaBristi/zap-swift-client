import React from 'react';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import OurServices from '../components/OurServices';
import Brands from '../components/Brands';
import TrackingParcel from '../components/TrackingParcel';
import Reviews from '../components/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res=>res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <Brands></Brands>
            <TrackingParcel></TrackingParcel>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;