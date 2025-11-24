import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecure();
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    console.log(sessionId)

    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>{
                 console.log(res.data)
            })
        }
    },[sessionId,axiosSecure])
    return (
        <div>
            payment successful
        </div>
    );
};

export default PaymentSuccess;