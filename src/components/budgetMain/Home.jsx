import  {useEffect, useState} from 'react'
import DashboardCard from "../totalDashboard/DashboardCard.jsx";
import "./Home.css"
import TransactionList from "../transactionList/TransactionList.jsx";
import SearchBar from "./SearchBar.jsx";
import TransFormModal from "./TransFormModal.jsx";
import EditBudgetButton from "./EditBudgetButton.jsx";
import DashboardBudget from "./DashboardBudget.jsx";
import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";
import BudgetModal from "../accountBudgetModal/BudgetModal.jsx";
import AccountsModal from "../accountBudgetModal/AccountsModal.jsx";
import LoadingSpinner from "../misc/LoadingSpinner.jsx";
import userService from "../../services/userService.js";
const Home = ()=>{
    const navigate = useNavigate();
    const [totalBalance, setTotalBalance] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const[showTransForm, setShowTransForm] = useState(false);
    const [currBudget, setCurrBudget] = useState();
    const[showBudget, setShowBudget] = useState(false);
    const[showAccountModal, setShowAccountModal] = useState(false);
    const [categories, setCategories] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [transactionsNumber, setTransactionsNumber] = useState(0);
    const [showBudgetModal, setShowBudgetModal] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const accountsResponse = await userService.getAllAccounts();
                setAccounts(accountsResponse.data);
            } catch (error) {
                console.error('Error fetching accounts:', error);
                if (error.response && error.response.status===400){
                    console.log("No accounts found");
                }
                // Handle account-specific error
            }

            try {
                const transactionsResponse = await userService.getTransactionsPage(1);
                setTransactions(transactionsResponse.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
                // Handle transaction-specific error
            }

            try {
                const budgetResponse = await userService.getLatestBudget();
                setCurrBudget(budgetResponse.data);
                setCategories(budgetResponse.data.categories);
            } catch (error) {
                console.error('Error fetching budget:', error);
                // Handle budget-specific error
            }

            try {
                const transactionSizeResponse = await userService.getTransactionSize();
                setTransactionsNumber(transactionSizeResponse.data);
            } catch (error) {
                console.error('Error fetching transaction size:', error);
                // Handle transaction size-specific error
            }
        };

        fetchData().then(()=>setIsLoading(false));
    }, []);


    useEffect(() => {
        let total = 0;
        if (accounts) {
            total = accounts.reduce((sum, account) => sum + account.balance, 0);
        }
        setTotalBalance(total);
        if (accounts && accounts.length === 0) {
            setShowAccountModal(true);
        }
        if (!currBudget) {
            setShowBudgetModal(true);
        }
    }, [accounts, currBudget]);

    if (isLoading) {
        return (
                <LoadingSpinner />
        );
    }

    return (
            <div id="page-body">
                <EditBudgetButton></EditBudgetButton>
                <SearchBar></SearchBar>
                <TransFormModal showTransForm={showTransForm} accounts={accounts} setShowTransForm={setShowTransForm}
                                categories={categories}></TransFormModal>
                <AccountsModal setShowNewAccountModal={setShowAccountModal} showNewAccountModal={showAccountModal} setShowBudgetModal={showBudgetModal} showBudgetModal={showBudgetModal}></AccountsModal>
                <DashboardCard AccountsTotalBalance={totalBalance} budgetBalance={currBudget}></DashboardCard>
                <DashboardBudget showBudget={showBudget} transactionList={transactions}
                                 categories={categories}></DashboardBudget>
                <div className="trans-button">
                    <button className="add-trans-button" onClick={() => setShowTransForm(true)}> Add Transaction
                    </button>
                </div>
                <TransactionList transactions={transactions} transactionNumber={transactionsNumber}></TransactionList>
            </div>
        )
    }

export default Home