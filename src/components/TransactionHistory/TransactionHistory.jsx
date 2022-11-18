import PropTypes from "prop-types";
import { Table, HeaderWrapper, Header } from "../TransactionHistory/Styled";

export const TransactionHistory = ({ items }) => {
    return (
        <Table className="transaction-history">
            <thead>
                <HeaderWrapper>
                    <Header>Type</Header>
                    <Header>Amount</Header>
                    <Header>Currency</Header>
                </HeaderWrapper>
            </thead>
            {items.map((item) => {
                return (<tbody key={item.id}>
                    <tr>
                        <Header>{item.type}</Header>
                        <Header>{item.amount}</Header>
                        <Header>{item.currency}</Header>
                    </tr>
                </tbody>);})}
        </Table>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
};
        
