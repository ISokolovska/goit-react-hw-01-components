import PropTypes from "prop-types";
import { Table, HeaderWrapper, Header, CellWrapper, Cell } from "../TransactionHistory/Styled";

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
                    <CellWrapper>
                        <Cell>{item.type}</Cell>
                        <Cell>{item.amount}</Cell>
                        <Cell>{item.currency}</Cell>
                    </CellWrapper>
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
        
