export interface IUserCase {
    perform(data: any): Promise<any>
}