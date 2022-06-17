export class ErrorUtils {
    message: string;

    constructor(message: string){
        this.message = message;
    }
    /**
     * Log Error to the console in a nice format
     */
    private logError(caller:string, error: any): void {
        console.error(caller, error);
    }

    /**
     * Display Error to the UI
     */
    private displayError(caller:string, error: any): void {
        // TODO
        console.error('TODO', caller, error);
    }
}