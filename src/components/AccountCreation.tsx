import styled from "@emotion/styled";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Account } from "../model/Account";

function AccountCreation({createAccount}: {createAccount: (account: Account) => void}) {
const { register, handleSubmit, formState: { errors } } = useForm<Account>();
const onSubmit = (data: Account) => {
    console.log(data);
    createAccount(data)
}

  return (  
    <form onSubmit={handleSubmit(onSubmit)}>
        <CreateAccountForm sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                    <PaddedTextField fullWidth id="standard-basic" label="Account Name" variant="standard" {...register("accountName")}/>
                    <PaddedTextField fullWidth id="standard-basic" label="Account Number" variant="standard" {...register("accountNumber")}/>
                    <FormControl fullWidth variant="standard">
                        <InputLabel id="demo-simple-select-standard-label">Account Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        {...register("accountType")}
                        label="Account Type"
                        >
                            <MenuItem value={"SAVING"}>SAVING</MenuItem>
                            <MenuItem value={"CHECKING"}>CHECKING</MenuItem>
                        </Select>
                    </FormControl>
                    <PaddedTextField fullWidth id="standard-basic" label="Account Currency" variant="standard" {...register("currency")}/>
                </div>
            <Button type="submit">Create</Button>
        </CreateAccountForm> 
    </form>
             
         
  );
}

export default AccountCreation;

const CreateAccountForm = styled(Box)`
    padding: 1rem;
    max-width: 30rem;
`

const PaddedTextField = styled(TextField)`
    padding-bottom: 1rem;
`
