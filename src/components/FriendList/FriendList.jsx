import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import { FriendWrapper } from "../FriendList/Styled";

export const FriendList = ({ friends }) => {
  return (
    <FriendWrapper className="friend-list">
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </FriendWrapper>
  )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};
