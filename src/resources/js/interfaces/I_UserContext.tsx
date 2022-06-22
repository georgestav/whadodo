export interface I_UserOptions {
   content?: {
       userName?: string,
       hash?: string,
       id?: number,
       email?: string,
       email_verified_at?: string,
       terms_accepted?: string,
       "two_factor_secret"?: string,
       "two_factor_recovery_codes"?: string,
       "created_at"?: string,
       "updated_at"?: string
   }
}
export interface I_UserContext {
    options?: I_UserOptions,
    addOptions: (content: any) => void,
    removeOptions: () => void
}
