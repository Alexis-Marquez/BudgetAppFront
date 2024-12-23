import axios from "axios";

let currUserId;
let API_URL;
const instance = axios.create({
    baseURL: "http://localhost:8080/api/",
});
const setUserId = userId => {
    currUserId = userId;
    API_URL = currUserId+"/";
}
const getLatestBudget = async () => {
    return await instance.get(API_URL+"latestBudget");
};
const getCurrentUserInfo= async () => {
    return await instance.get(currUserId)
}

const getAllAccounts = async () => {
    setUserId(1);
    return await instance.get(API_URL+"accounts");
};

const getTransactionsPage = async (page) => {
    return await instance.get(API_URL+"transactions/" + page);
};

const getCategories = async ()=>{
    return await instance.get(API_URL+"categories");
}

const getTransactionSize = async () => {
    return await instance.get(API_URL+"transactions/size");
};

const createAccount = async (account) => {
    return await instance.post(API_URL+"new-account", account);
}
const UserService = {
    getLatestBudget,
    getAllAccounts,
    getTransactionsPage,
    getTransactionSize,
    getCurrentUserInfo,
    createAccount,
    getCategories
}

export default UserService;