export interface Account {
    id: string;
    accountNumber: string;
    accountType: "SAVING" | "CHECKING";
    accountName: string;
    currency: string;
}