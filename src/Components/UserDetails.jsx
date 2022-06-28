
import React, { useEffect, useState } from 'react'
import styles from './UserDetails.module.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Loader from './Loader';

const UserDetails = () => {
    //functional level states
    const [user, setUser] = useState('');
    let navigate = useNavigate();

    //fetching data from an api
    useEffect(() => {

        fetchData()

    }, [])

    //fetch data function
    const fetchData = async () => {
        try {
            const data = await axios.get(`${localStorage.getItem('url')}`)
            setUser(data.data);

        } catch (error) {
            navigate('/')
        }


    }
    if (!user) return <div className={styles.loader}><Loader/></div>
    return (
        <div className={styles.container}>
            <div className={styles.div}>
                <img className={styles.avatar} src={user.avatar_url} alt="avatar" />
                <h1>{user.name ? user.name : 'no name'}</h1>
            </div>
            <div>
                <h3>Public Repositories: {user.public_repos}</h3>
                <h3>Followers: {user.followers}</h3>
                <h3>Following: {user.following}</h3>
            </div>
            <a href={`${user.html_url}`} target='_blank' rel="noreferrer"><button className={styles.button}>Click to go to Github Profile</button></a>
        </div>
    )
}

export default UserDetails