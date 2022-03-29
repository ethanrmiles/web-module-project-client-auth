import React, {useState} from "react";

const initialFormValues = {name: '', email: ''}

export default function AddFriend (props) {
    const [values, setValues] = useState(initialFormValues)
    const { postFriend } = props

    const onChange = evt => {
        const {id, value} = evt.target
        setValues({...values, [id]:value})
    }

    const onSubmit = evt => {
        evt.preventDefault()
        postFriend(values)
        console.log('submit Pressed!')
    }

    return (
        <form id='addFriend' onSubmit={onSubmit}>
            <h2>Add a new Friend</h2>
            <input 
            maxLength={50}
            onChange={onChange}
            value={values.name}
            placeholder="Enter Friend Name"
            id='name'
            />
              <input 
            maxLength={50}
            onChange={onChange}
            value={values.email}
            placeholder="Enter Friend Email"
            id='email'
            />
            <button id='submitFriend'>Submit</button>
        </form>
    )
}