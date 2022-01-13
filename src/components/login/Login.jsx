import { useState } from 'react'
import './Login.css'
import aloy from '../../assets/aloy.jpg'
import { users } from '../Dummydata'

function Login() {

    const [pass, setPass] = useState('')

    const [user, setUser] = useState('')

    const check = () => {

        // One way we can do it using the find() method

        let foundUser = users.find(x => pass === x.password && user === x.username)
        foundUser ?  alert('Succesful') :   alert('Sorry, Try again !!!')
    }

    //Another way we can do it using for loop 
    
     //   let foundUser = false
    //     for (let i = 0; i < users.length; i++) {

    //        if(pass === users[i].password && user === users[i].username){
    //             foundUser = true
    //        }
    //     }
    //     if(foundUser){
    //         alert('Succesful ')
    //     } else {
    //         alert('Sorry, Try again !!!')
    //     }
    // }


    return (
        <div className='login'>
            <div className="login__wrapper">
                <div className="user__info">
                    <img src={aloy} alt="" className='user__img' />
                    <p className='user'> Aloy David</p>
                </div>

                <div className="user__input">
                    <div className="username__input">
                        <input type="text" placeholder='Username' className='input' onChange={e => setUser(e.target.value)} />
                    </div>
                    <div className="password__input">
                        <input type="password" placeholder='Password' className='input' onChange={e => setPass(e.target.value)} />
                    </div>

                    <button className="btn__btn" onClick={check}> Login</button>
                    <p className='forget__password'><a href="./password">Forgotten Password?</a></p>

                </div>

                <p className='forget__password'><a href="./account">Create new account</a></p>
            </div>
        </div>
    )
}

export default Login
