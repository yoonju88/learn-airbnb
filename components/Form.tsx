'use client'

import {createUser} from '@/utils/actions'
import { useFormState, useFormStatus } from 'react-dom';


const SubmitButton = () => {
    const {pending} = useFormStatus()
    return (
        <button 
            type="submit" 
            className={btnStyle}
            disabled= {pending}
        >
            {pending? 'Submitting...' : 'submit'}
        </button>
    )
}

function Form() {

  return (
    <form className={formStyle} action={createUser}>    
        <h2 className="text-2sl capitalize mb-4">Create user</h2>
        <input 
            type="text" 
            name='firstName' 
            defaultValue='peter' 
            required 
            className={inputStyle}
        />
        <input 
            type="text" 
            name='lastName' 
            defaultValue='smith' 
            required 
            className={inputStyle}
        />
        <SubmitButton />
    </form>
  )
}

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';


export default Form
