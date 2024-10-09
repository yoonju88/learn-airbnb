'use server'
import {readFile, writeFile} from 'fs/promises'
import { revalidatePath } from 'next/cache'
import {redirect} from 'next/navigation'

//User 타입 정의
type User= {
   id: string;
   firstName: string
   lastName: string
}
// create new user 
export const createUser = async(prevState: any, formData:FormData) => {
    'use server'
    console.log('prevState')
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const newUser: User={firstName, lastName, id:Date.now().toString() }

    try {
        await saveUser(newUser)
        revalidatePath('/actions')
        return 'User created successfully...'
    } catch (error) {
        return 'Failed create user'
    }
    // redirect('/')
}
// Recieve formData form client then extrait firstName and lastName
// Create newUser, id is generated based on the current time using Date.now().toStiring()
// call saveUser to save newUser data on system.


// async function go with promise, it is generic and provide the user type. 
export const fetchUsers = async():Promise<User[]> => {
    const result = await readFile('users.json', {encoding:'utf8'})
    const users = result ? JSON.parse(result) : [] ;
    return users
}
// fetchUsers는 users.json 파일에서 사용자 목록을 읽어오는 함수입니다. 비동기적으로 작동하며, User[] 배열을 반환합니다.
// by readFile read users.json to UTF-8.  if the file exist parcing to JSON. 

const saveUser = async(user:User) => {
    const users = await fetchUsers ()
    users.push(user)
    await writeFile('users.json',JSON.stringify(users))
}
// saveUser 함수는 새로운 사용자를 기존 사용자 목록에 추가하고, 업데이트된 목록을 users.json 파일에 저장합니다.
// fetchUsers 함수를 통해 기존의 사용자 데이터를 읽어오고, 이 배열에 새로 받은 user를 추가합니다.
// writeFile 함수를 사용해 업데이트된 사용자 목록을 다시 users.json 파일에 저장합니다.

export const deleteUser = async (formData : FormData) => {
    const id = formData.get('id') as string
    const users = await fetchUsers ()
    const updatedUsers = users.filter((user)=> user.id !==id)
    await writeFile('users.json',JSON.stringify(updatedUsers))
    revalidatePath('/actions')
}
export const removeUser = async (id : string, formData : FormData) => {
    const name = formData.get('name') as string
     
    const users = await fetchUsers ()
    const updatedUsers = users.filter((user)=> user.id !==id)
    await writeFile('users.json',JSON.stringify(updatedUsers))
    revalidatePath('/actions')
}
