import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyParcels = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data : parcels = []} = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default MyParcels;