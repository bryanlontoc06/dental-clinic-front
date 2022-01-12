import React, {useState} from 'react'
export const AppContext = React.createContext();

const AppProvider = (props) => {
    const [state, setState] = useState({
        modalShow: false,
        appointments: [],
        approvedAppointments: [],
        title: '',
        action: '',
        btnColor: '',
        loading: false,
        data: '',
        appointmentsUser: '',
        approvedAppointmentsUser: ''
    });

    const initState = {
        state
    }

    const func = {
        setState
    }


    return (
        <AppContext.Provider value={{ ...initState, ...func}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider
