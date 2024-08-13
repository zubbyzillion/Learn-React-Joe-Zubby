import { Outlet } from "react-router-dom"
import Cart from "../features/cart/Cart"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"

function AppLayout() {
    return (
        <div>
            <Header />

            <main>
                <Outlet />
            </main>

            <CartOverview />
        </div>
    )
}

export default AppLayout
