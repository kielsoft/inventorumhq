import { IUserState, IUserData } from '../Users';

export default class Users {
    getInitialState (dispatch?:any){
        return {
            filteredList: [],
            lastFetchedData: {
                page: 0,
                per_page: 100,
                total: 0,
                total_pages: 0,
                data: []
            },
            fetch: (pageNumber: number, perPage: number, wipePrevious: boolean) => {},
            getFilteredList: (list: IUserData[], filterText:string): IUserData[] => {
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
                
            },
            allUsers: [
                {
                    "id": 1,
                    "first_name": "George",
                    "last_name": "Bluth",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
                    "email": "george_1@inventorum.com",
                    "phone": "0314823793046",
                    "designation": "Engineer",
                    "status": true
                },
                {
                    "id": 2,
                    "first_name": "Janet",
                    "last_name": "Weaver",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
                    "email": "janet_2@inventorum.com",
                    "phone": "0315483284933",
                    "designation": "Sales",
                    "status": true
                },
                {
                    "id": 3,
                    "first_name": "Emma",
                    "last_name": "Wong",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
                    "email": "emma_3@inventorum.com",
                    "phone": "0313639860442",
                    "designation": "Engineer",
                    "status": false
                },
                {
                    "id": 4,
                    "first_name": "Eve",
                    "last_name": "Holt",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
                    "email": "eve_4@inventorum.com",
                    "phone": "0314423733327",
                    "designation": "Engineer",
                    "status": false
                },
                {
                    "id": 5,
                    "first_name": "Charles",
                    "last_name": "Morris",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg",
                    "email": "charles_5@inventorum.com",
                    "phone": "0313994836156",
                    "designation": "Manager",
                    "status": true
                },
                {
                    "id": 6,
                    "first_name": "Tracey",
                    "last_name": "Ramos",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg",
                    "email": "tracey_6@inventorum.com",
                    "phone": "0313723308469",
                    "designation": "Manager",
                    "status": true
                },
                {
                    "id": 7,
                    "first_name": "Michael",
                    "last_name": "Lawson",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
                    "email": "michael_7@inventorum.com",
                    "phone": "0311237779147",
                    "designation": "Engineer",
                    "status": true
                },
                {
                    "id": 8,
                    "first_name": "Lindsay",
                    "last_name": "Ferguson",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg",
                    "email": "lindsay_8@inventorum.com",
                    "phone": "0315023008059",
                    "designation": "Engineer",
                    "status": true
                },
                {
                    "id": 9,
                    "first_name": "Tobias",
                    "last_name": "Funke",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg",
                    "email": "tobias_9@inventorum.com",
                    "phone": "0312529895880",
                    "designation": "Manager",
                    "status": true
                },
                {
                    "id": 10,
                    "first_name": "Byron",
                    "last_name": "Fields",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
                    "email": "byron_10@inventorum.com",
                    "phone": "0313686566012",
                    "designation": "Manager",
                    "status": true
                },
                {
                    "id": 11,
                    "first_name": "George",
                    "last_name": "Edwards",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg",
                    "email": "george_11@inventorum.com",
                    "phone": "0315451456396",
                    "designation": "Manager",
                    "status": true
                },
                {
                    "id": 12,
                    "first_name": "Rachel",
                    "last_name": "Howell",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg",
                    "email": "rachel_12@inventorum.com",
                    "phone": "0313648443771",
                    "designation": "Manager",
                    "status": false
                }
            ]
        }
    }
}


