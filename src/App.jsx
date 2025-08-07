import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import { Outlet } from "react-router-dom";
import { use, useContext, useEffect } from "react";
import { GetAccount } from "./services/api.service";
import { AuthContext } from "./component/context/auth.context";
import { Spin } from "antd";

const App = () => {

  const { setUser, setIsAppLoading, isAppLoading } = useContext(AuthContext);

  const fetchUser = async () => {
    setIsAppLoading(true);
    const res = await GetAccount();
    if (res.data) {
      setUser(res.data.user);
    }
    setIsAppLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {
        isAppLoading ? (
          <div className="fixed inset-0 flex items-center justify-center z-50" >
            <Spin size="large" />
          </div>
        ) : (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        )}
    </>
  )
}

export default App
