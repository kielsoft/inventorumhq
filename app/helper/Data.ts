export const dispatch = (action: {type: string, payload: ()=>{}}) => {

}

const userDataHelper = (usersData:any[]):any[] => {
    const designations = ['Manager', 'Sales', 'Engineer'];
    const statuses = [true, true, true, false];

    //add missing data drom the test api endpoint
    usersData.map(data => {
        data.email = String(data.first_name).toLowerCase().replace(/[^a-z0-9]+/, '').trim() + `_${data.id}@inventorum.com`;
        data.phone = "031" + (Math.floor(Math.random() * (6234567890 - 1234567890) ) + 1234567890);
        data.designation = designations[Math.floor(Math.random() * designations.length)];
        data.status = statuses[Math.floor(Math.random() * statuses.length)];
        return data;
    })

    //sort ascendingly
    usersData =  usersData.sort((a, b) => {
        const c = a.first_name.toLowerCase();
        const d = b.first_name.toLowerCase();
      
        return (c < d) ? -1 : (c > d) ? 1 : 0;
    });

    return usersData;
}