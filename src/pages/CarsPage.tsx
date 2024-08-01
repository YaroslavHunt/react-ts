import React, {useEffect, useState} from 'react';
import {authService, carService} from "../services/api.service";
import {AxiosError} from "axios";
import {CarPaginatedModel} from "../models/CarPaginatedModel";
import CarsComponent from "../components/CarsComponent";
import {useNavigate, useSearchParams} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";

const CarsPage = () => {

    let navigate = useNavigate();
    let [query] = useSearchParams();

    const [carPaginatedObject, setCarPaginatedObject] = useState<CarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    })
    useEffect(() => {

        const getCarsData = async () => {
            try {
                let response = await carService.getCars(query.get('page')||'1');

                setCarPaginatedObject(response);

            } catch (e) {
                const axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    try {
                        await authService.refresh();
                    } catch (e) {
                        return navigate('/');
                    }
                }
            }
        }

        getCarsData();

    }, [query]);
    return (
        <div>
            <CarsComponent cars={carPaginatedObject.items}/>
            <PaginationComponent next={carPaginatedObject.next} prev={carPaginatedObject.prev}/>
        </div>
    );
};

export default CarsPage;