import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import AccountItem from './AccountItem'
import { Account } from '../model/Account'


describe("Account Item", () => {
    test('should show account details', () => {
        const account: Account = {
            id: "test",
            accountName: "Chetan D",
            accountNumber: "12345678900",
            accountType: "SAVING",
            currency: "NOK"
        }
        const editAccount = jest.fn()
        render(<AccountItem account={account} editAccount={editAccount}/>)

        expect(screen.getByDisplayValue(account.accountName)).toBeInTheDocument()
        expect(screen.getByDisplayValue(account.accountNumber)).toBeInTheDocument()
        expect(screen.getByDisplayValue(account.accountType)).toBeInTheDocument()
        expect(screen.getByDisplayValue(account.currency)).toBeInTheDocument()
      
        expect(screen.getByText("UPDATE")).toBeInTheDocument()
      })

  })
