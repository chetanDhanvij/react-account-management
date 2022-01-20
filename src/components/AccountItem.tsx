import styled from '@emotion/styled';
import { ListItem, ListItemButton, Button, Paper, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Account } from '../model/Account';


function AccountItem({account, editAccount}: {account:Account, editAccount: (account: Account) => void}) {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<Account>();
    const onSubmit = (data: Account) => {
        console.log(data);
        editAccount(data)
    }

    useEffect(() => {
        setValue("accountName", account.accountName);
        setValue("accountNumber", account.accountNumber);
        setValue("accountType", account.accountType);
        setValue("currency", account.currency);
        setValue("id", account.id);
    }, [account])

  return (  
    <form onSubmit={handleSubmit(onSubmit)}>
        <ListItem>
            <TextField fullWidth id="standard-basic" label="Account Name" variant="standard" {...register("accountName")}/>
            <TextField fullWidth id="standard-basic" label="Account Number" variant="standard" disabled {...register("accountNumber")}/>
            <TextField fullWidth id="standard-basic" label="Account Type" variant="standard" disabled {...register("accountType")}/>
            <TextField fullWidth id="standard-basic" label="Account Currency" variant="standard" disabled {...register("currency")}/>
            <ListItemButton>
                <Button type="submit" >UPDATE</Button>
            </ListItemButton>
        </ListItem>
    </form>

          
  );
}

export default AccountItem;


const Page = styled(Paper)`
    margin: 2rem;
`