import React from "react";
import UserList from './UserList';
import MessageBox from '../MessageBox'

interface Props {
    items:any[]
    type: 'TextList' | 'UserList'
    title?: string | string[]
}

const List = (props:Props) =>{
    return (
        props.items.length ? 
            (props.type == 'UserList' ? 
            <UserList usesrData={props.items} /> : 
            <ul className="collection">{props.items.map((item, index) => (<div key={item.id || `textListItem${index}`}>{item}</div>))}</ul>) :
                (<MessageBox type="DEFAULT">No record found</MessageBox>)
    );
} 

export default List;