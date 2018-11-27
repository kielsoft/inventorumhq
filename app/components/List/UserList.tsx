import React from "react";
import "./UserList_style.scss";

export interface IUserListItemData {
    id: number,
    first_name: string,
    last_name: string,
    designation: string,
    email: string,
    phone: string,
    avatar: string,
    status: boolean
}

interface Props {
    usesrData: IUserListItemData[]
}

const UserList = (props: Props) => {
    return (
        <table className="user-data-table responsive-table">
            <tbody>
                {
                    props.usesrData.map((userData: IUserListItemData, index) => {

                        return <tr key={`tr${index}`} className="user-data-row">
                            <td>
                                <div className="cell-content-wrapper">
                                    <div className={`inline-block avatar-wrapper ${userData.status? 'status-active' : ''}`}>
                                        <img src={userData.avatar} alt={`${userData.first_name} ${userData.last_name}`} className="circle avatar" />
                                    </div>
                                    <div className="user-name">{`${userData.first_name} ${userData.last_name}`}</div>
                                </div>
                            </td>
                            <td>
                                <div className="cell-content-wrapper">
                                    {userData.designation}
                                </div>
                            </td>
                            <td>
                                <div className="cell-content-wrapper">
                                    {userData.email}
                                </div>
                            </td>
                            <td>
                                <div className="cell-content-wrapper">
                                    {userData.phone}
                                </div>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    );
}

export default UserList;