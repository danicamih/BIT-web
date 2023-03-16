import UserCard from "./UserCard";
// import UserExtra from "./UserExtra";

import { randomUsers } from "./local-json/RandomUsersShort";
import formatDate from "../helpers/dateFormatter";

const UserList = () => {
    return (
        <div className="card-container">
            {randomUsers.map((item, index) => {
                return <UserCard key={index} name={item.name.first} email={item.email} date={formatDate(item.dob.date)} picture={item.picture.thumbnail} />
                // return <UserExtra key={index} name={item.name.first} email={item.email} date={formatDate(item.dob.date)} picture={item.picture.medium} />
            })}
        </div>
    );
};

export default UserList;