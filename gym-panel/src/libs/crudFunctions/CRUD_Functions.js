import axios from 'axios'
export const clients_url = `https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients`
export const class_url = `https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes`


//get all data from api
export const GET = (URL, setAllData) => {
    axios.get(URL).then((res) => {
        setAllData(res.data);
    }
    )
}

export const DELETE = (URL, ID, Recount, setReCount) => {
    axios.delete(URL + `/${ID}`).then(() => {
        setReCount(Recount + 1);
    }
    )
}

export const POST = (URL, data, Recount, setReCount,) => {
    axios.post(URL,
        data
        , Recount, setReCount).then(function (response) {
            setReCount(Recount + 1)
        }).catch(function (error) {
            console.log(error);
        });
}

export const PUT = (URL, ID, data, Recount, setReCount,) => {
    axios.put(URL + '/' + ID,
        data
        , Recount, setReCount).then(function (response) {
            setReCount(Recount + 1)
        }).catch(function (error) {
            console.log(error);
        });
}


/*Clients POST / PUT */
