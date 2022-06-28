import { Link } from "react-router-dom";

export const columns = [
    {
        name: 'id',
        selector: row => row.id,
     
    },
    {
        name: 'image',
        cell: row => <img src={row.avatar_url} style={{ borderRadius: '50%' }} height={50} width={50} alt={row.name}></img>,
        selector: row => row.coverimage,
       
    },
    {
        name: 'Action',
        cell: (row) => <Link onClick={() => {
            localStorage.setItem('url',row.url)
        }} to={`/user`}>Click to see details</Link>,


    },

];

export const customStyles = {
    rows: {
        style: {
            minHeight: '60px',
          
        },
    },
    headCells: {
        style: {
            fontSize: '15px',
            fontWeight: 'bold',
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};