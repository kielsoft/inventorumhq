import fetch from 'isomorphic-unfetch'
import { IContextState, IDispatch } from "../types";

export const FETCHED_USERS_FRESH = 'FETCHED_USERS_FRESH'
export const FETCHED_USERS_APPEND = 'FETCHED_USERS_APPEND'
export const SEARCH_USERS = 'SEARCH_USERS'

export interface IUserData {
    id: number,
    first_name: string,
    last_name: string,
    designation: string,
    email: string,
    phone: string,
    avatar: string,
    status: boolean
}

export interface IFetchedUsersData {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: IUserData[]
}

export interface IUserState {
    allUsers: [],
    lastFetchedData: IFetchedUsersData,
    fetch: (pageNumber?: number, perPage?: number, wipePrevious?: boolean) => any,
    getFilteredList: (list: IUserData[], filterText:string) => IUserData[]
}


export default class Users implements IContextState {
    static rootName = 'usersState'
    private getAllUsers(pageNumber = 1, perPage = 100, wipePrevious = true) {
        return async (dispatch: (actionData: IDispatch) => void) => {
            const usersData = await fetch(`https://reqres.in/api/users?page=${pageNumber}&per_page=${perPage}`)
                .then(res => res.json()).catch(e => String(e).toString());

            if (usersData && typeof usersData.data == 'object') {
                usersData.data = Users.usersDataHelper(usersData.data);
                if (wipePrevious) {
                    dispatch({ rootStateName: Users.rootName, payload: {lastFetchedData: usersData} })
                    dispatch({ rootStateName: Users.rootName, payload: {allUsers: usersData.data} })
                } else {

                }
            }
        }
    }

    static usersDataHelper(usersData: any[]): IUserData[] {
        const designations = ['Manager', 'Sales', 'Engineer'];
        const statuses = [true, true, true, false];

        //add missing data drom the test api endpoint
         usersData.map(data => {
            data.email = String(data.first_name).toLowerCase().replace(/[^a-z0-9]+/, '').trim() + `_${data.id}@inventorum.com`;
            data.phone = "031" + (Math.floor(Math.random() * (6234567890 - 1234567890)) + 1234567890);
            data.designation = designations[Math.floor(Math.random() * designations.length)];
            data.status = statuses[Math.floor(Math.random() * statuses.length)];
            return data;
        })

        //sort ascendingly
        // usersData =  usersData.sort((a, b) => {
        //     const c = a.first_name.toLowerCase();
        //     const d = b.first_name.toLowerCase();

        //     return (c < d) ? -1 : (c > d) ? 1 : 0;
        // });

        //console.log(JSON.stringify(usersData));

        return usersData;
    }

    private getFilteredList(list: IUserData[], filterText:string): IUserData[] {
        if (filterText) {
            const filteredList = []
            list.map((userData: IUserData) => {
                if (String(`${userData.first_name} ${userData.last_name}`).search(new RegExp(filterText, "i")) >= 0) {
                    filteredList.push(userData)
                }
            })
            return filteredList;
        }

        return list;
        
    }

    getInitialState(dispatch: (actionData: IDispatch) => void) {
        return {
            allUsers: [],
            filteredList: [],
            lastFetchedData: {
                page: 0,
                per_page: 100,
                total: 0,
                total_pages: 0,
                data: []
            },
            fetch: (pageNumber: number, perPage: number, wipePrevious: boolean) => this.getAllUsers(pageNumber, perPage, wipePrevious)(dispatch),
            getFilteredList: (list: IUserData[], filterText:string) => this.getFilteredList(list, filterText),
        }
    }
}