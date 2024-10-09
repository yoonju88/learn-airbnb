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
    const [message, formAction] = useFormState(createUser, null)
    //useFormState 훅을 호출하여 createUser와 관련된 폼 상태와 동작을 관리
    // 사용자가 폼을 제출할 때 formAction을 호출하고, 그 결과에 따라 message에 메시지를 표시
    // message는 서버로부터의 응답이거나 유효성 검사 메시지일 수 있고, formAction은 폼의 제출 로직을 담당
  return (
    <form className={formStyle} action={formAction}>  
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
        {message && <p>{message}</p>}  
        <SubmitButton />
    </form>
  )
}

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';


export default Form
