export class DateUtils {

    /**
     * Get current time stamp like 2022-06-17 06:18:18 as string
     */
    static getDateNowString (): string {
        return new Date().toISOString().replace('T', ' ').split('.')[0]
    }
}