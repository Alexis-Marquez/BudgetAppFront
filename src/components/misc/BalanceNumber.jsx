import "react";
import PropTypes from "prop-types";

const BalanceNumber = ({ amount = 0 }) => {
    if (isNaN(amount)) return <div className="amount-error" aria-label="Invalid amount">Invalid amount</div>;
    const ariaLabel = `Balance amount is ${amount < 0 ? "negative" : "positive"} ${Math.abs(amount)}`;
    if(amount < 0) {
        return (
            <div className="amount-negative" aria-label={ariaLabel}>-${Math.abs(amount)}</div>
        )
    } else {
        return (
            <div className="amount-positive" aria-label={ariaLabel}>+${amount}</div>
        )}
}

BalanceNumber.propTypes = {
    amount: PropTypes.number.isRequired,
};
export default BalanceNumber