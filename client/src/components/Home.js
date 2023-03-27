import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'



function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/signin')
        }
    }, [])

    return (
        <div className="card">
            <div className="mainHead">Paresh Store</div>
            <div>
                <span className="comingName"> {localStorage.getItem('EMAIL')} </span>
                
                <button className="logoutbtn"
                    onClick={() => {
                        localStorage.clear()
                        navigate('/signin')
                    }}
                > LOGOUT </button>
            </div>



        </div>
    )
}

export default Home