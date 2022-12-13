import { CardLi } from "../../components/CardProduct"
import { Header } from "../../components/Header"
import { MainPage } from "../../components/Main"
import { Ulstyle } from "./style"

export const HomePage = () => {
    return (
        <>
        <Header/>
        <MainPage>
            <Ulstyle>
                <CardLi/>
                <CardLi/>
                <CardLi/>
                <CardLi/>
            </Ulstyle>
        </MainPage>
        </>
    )
}