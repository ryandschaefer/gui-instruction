import axios from "axios";

const apiEndPoint = "https://api.johnlawrimore.com/directory/accounts";
const apiConfig = {
    headers: {
        Authorization: 'jlawrimore'
    }
};

export const getAccounts = () => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const getAccountById = (id) => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}/${id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const updateAccount = (id, account) => new Promise((resolve, reject) => {
    axios.put(`${apiEndPoint}/${id}`, account, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const deleteAccount = (id) => new Promise((resolve, reject) => {
    axios.delete(`${apiEndPoint}/${id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});