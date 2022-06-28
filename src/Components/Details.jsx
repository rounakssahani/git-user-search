import React, { useCallback } from 'react'
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../app/apiCall';
import styles from './Details.module.css';
import { columns, customStyles } from "../columns";
import { useNavigate, useParams, } from 'react-router-dom';



//Details Component
const Details = () => {
    //functional level states
    const [perPage, setPerPage] = useState(10);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    //states from redux store
    const { totalrows, users, error } = useSelector(state => state.app);
    const dispatch = useDispatch();
    let { name } = useParams()

    //fetching data from an api
    useEffect(() => {
        if (!name) return;
        fetchData(1, perPage, dispatch, name)
    }, [perPage, name])


    const handlePageChange = page => {
        fetchData(page, perPage, dispatch, name);
    }

    const handlePerRowsChange = async (newPerPage, page) => {
        setPerPage(newPerPage);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${search}`)

    }



    return (
        <div className="app">
            <div className={styles.viewsearchhead}>Search Github Users</div>
            <div className="search-div">
                {/*Input Search field */}
                <form onSubmit={handleSubmit} >
                    <input type='text' onChange={e => setSearch(e.target.value)} name='search' placeholder='Search Users...' />
                    <input type='submit' hidden />
                </form>
            </div>

            {/*If api request limit exceeds from 10 */}
            {error && <div className={styles.errordiv}>
                Only 10 requests per minute allowed
            </div>}

            {/*Showing users in a datatable if any */}
            {users?.length ? <DataTable
                columns={columns}
                data={users}
                pagination
                theme="solarized"
                customStyles={customStyles}
                paginationServer
                paginationTotalRows={totalrows}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handlePerRowsChange}
            /> : ''}
        </div>)
}

export default Details