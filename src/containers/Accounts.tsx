import styled from '@emotion/styled';
import { Button, Card, CardActions, CardContent, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Account } from '../model/Account';
import AccountCreation from '../components/AccountCreation';
import AccountItem from '../components/AccountItem';

const BASE_URL = "http://localhost:8080";

function AccountList() {
	const [accounts, setAccounts] = useState<Account[]>([]);

    //Api call to get accounts
    const loadAccounts = async () => {
        const { data }  = await axios.get<Account[]>(BASE_URL + "/accounts");
        setAccounts(data);  
    };

    //Load accounts on component render
    useEffect(()=> {
        loadAccounts();
    },[]);
    
    

    //Api call to create account
    const createAccount = async (account: Account) => {
        try {
            const { data } = await axios.post<Account[]>(BASE_URL + "/accounts", account)
            loadAccounts();  
        } catch(err) {
            alert(err);
        }
    };

    //Api call to edit account name
    const editAccount = async (account: Account) => {
        try {
            const { data } = await axios.patch<Account[]>(BASE_URL + "/accounts/" + account.id, {accountName: account.accountName})
            loadAccounts();  
        } catch(err) {
            alert(err);
        }
    };

    
  return (
    <Grid container spacing={1}>
        <Grid item xs={4}>
            <Page className="App">
                <Typography variant="h4" >
                    Create Account
                </Typography>

                <AccountCreation createAccount={(data) => {createAccount(data)}}/>
            </Page>  
        </Grid>
        <Grid item xs={8}>
            <Page className="App">
                <Typography variant="h4" >
                    All Account
                </Typography>

                <List>
                    {accounts && accounts.map((account) =>  
                        <AccountItem account={account} editAccount={(data) => {editAccount(data)}}/>
                    )}
                </List>
            </Page>
        </Grid>
  </Grid>
  );
}

export default AccountList;


const Page = styled(Paper)`
    margin: 2rem;
    padding-top: 1rem;
`