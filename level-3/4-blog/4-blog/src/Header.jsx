import Navbar from './Navbar'

export default function Header() {
    return(
        <main className='header'>
            <img className='header--img' src='https://cdn.pixabay.com/photo/2018/01/11/21/27/desk-3076954_1280.jpg' />
            <Navbar />
            <h1 className='header--title'>Clean Blog</h1>
            <h3 className='header--subtitle'>A Blog Theme by Start Bootstrap</h3>
        </main>
    )
}