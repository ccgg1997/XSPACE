import { useNavigate } from "react-router-dom"

import { useAuth } from "../../context/AuthContext"
import "./stylesLogout.css"
import { Button } from "react-bootstrap"

export default function Logout() {
    const auth = useAuth()
    const navigate = useNavigate()

    const onHandleButtonLogout = async () => {
        await auth.logout()
            .then((res) => {
                console.log(res)
                navigate("/")
            })
            .catch((error) => console.error(error))
    }
    return (
        <div className="button-logout">
            <Button size="md" variant="danger" className="me-2 mb-3" onClick={onHandleButtonLogout}> Logout </Button>
        </div>
    )
}