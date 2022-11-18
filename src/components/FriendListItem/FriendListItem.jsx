import PropTypes from "prop-types";
import { FriendItem, Avatar, Status } from "../FriendListItem/Styled";

export const FriendListItem = ({ friend: { avatar, name, isOnline="true"} }) => {
    return (
        <FriendItem className="item">
            <Status className="status" style={{ backgroundColor: isOnline ? 'green' : 'red' }}>{isOnline}</Status>
            <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </FriendItem>);
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    }).isRequired
};
