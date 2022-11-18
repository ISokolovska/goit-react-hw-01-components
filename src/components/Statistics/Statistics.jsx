import PropTypes from "prop-types";
import { getRandomHexColor } from "./color";
import { StatList, ItemStats, LabelStats, StatisticsWrapper } from "./Styled";

export const Statistics = ({ title = false, stats }) => {
  return (<StatisticsWrapper className="statistics">
    {{ title } ? <h2 className="title">{title}</h2> : ""}
    <StatList className="stat-list">
      {stats.map(data => {
        let bgColor = getRandomHexColor();
        return (<ItemStats className="item" key={data.id} style={{backgroundColor: bgColor}}>
          <LabelStats className="label">{data.label}</LabelStats>
          <span className="percentage">{data.percentage}%</span>
        </ItemStats>);
      })}
    </StatList>
  </StatisticsWrapper>);
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};

