import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import { render, screen} from '@testing-library/react'
import { Account } from '../model/Account'
import AccountCreation from './AccountCreation'


describe("Account Creation", () => {
    test('should show account creation form', () => {
        const account: Account = {
            id: "test",
            accountName: "Chetan D",
            accountNumber: "12345678900",
            accountType: "SAVING",
            currency: "NOK"
        }
        const createAccount = jest.fn()
        render(<AccountCreation createAccount={createAccount}/>)

        expect(screen.getByLabelText("Account Name")).toBeInTheDocument()
        expect(screen.getByLabelText("Account Number")).toBeInTheDocument()
        expect(screen.getByLabelText("Account Type")).toBeInTheDocument()
        expect(screen.getByLabelText("Account Currency")).toBeInTheDocument()
        // expect(screen.getByDisplayValue(account.accountNumber)).toBeInTheDocument()
        // expect(screen.getByDisplayValue(account.accountType)).toBeInTheDocument()
        // expect(screen.getByDisplayValue(account.currency)).toBeInTheDocument()
      
        expect(screen.getByText("Create")).toBeInTheDocument()
      })
  })
