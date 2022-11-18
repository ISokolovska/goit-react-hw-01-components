import PropTypes from "prop-types";
import { Description, Avatar, Name, Tag, Location, Stats, StatsWrapper, StatsLabel, StatsQuantity } from "./Styled";


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (<div className="profile">
        <Description className="description">
            <Avatar
                src={avatar}
                alt="User avatar"
                className="avatar"
            />
            <Name className="name">{username}</Name>
            <Tag className="tag">{tag}</Tag>
            <Location className="location">{location}</Location>
        </Description>

        <Stats className="stats">
            <StatsWrapper>
                <StatsLabel className="label">Followers</StatsLabel>
                <StatsQuantity className="quantity">{stats.followers}</StatsQuantity>
            </StatsWrapper>
            <StatsWrapper>
                <StatsLabel className="label">Views</StatsLabel>
                <StatsQuantity className="quantity">{stats.views}</StatsQuantity>
            </StatsWrapper>
            <StatsWrapper>
                <StatsLabel className="label">Likes</StatsLabel>
                <StatsQuantity className="quantity">{stats.likes}</StatsQuantity>
            </StatsWrapper>
        </Stats>
    </div>);
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

 