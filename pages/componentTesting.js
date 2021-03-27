/** 
 * 
 * 
*/
import Navbar from '@components/Layouts/Navbar'

import redirect from 'nextjs-redirect'
export default function Home() {
    const Redirect = redirect('/404')
    if(process.env.NODE_ENV === 'production'){return <Redirect></Redirect>};


    return <Navbar/>;
}