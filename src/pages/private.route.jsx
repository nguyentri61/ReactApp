import { useContext } from "react";
import { AuthContext } from "../component/context/auth.context";
import { Link, Navigate } from "react-router-dom";
import { Button, Result } from "antd";

const PrivateRoute = (props) => {

    const { user } = useContext(AuthContext);

    if (user && user.id) {
        return (
            <> {props.children} </>
        );
    }

    return (
        // <Navigate to="/login" replace />
        <>
            <Result
                status="403"
                title="Unauthorized Access"
                subTitle="You need to login to access this page."
                extra={
                    <Button type="primary">
                        <Link to="/login" >
                            Back to Login
                        </Link>
                    </Button>}
            />
        </>
    )
}

export default PrivateRoute;
