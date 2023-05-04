import { ReactElement, ReactNode } from "react"
import Footer from "./footer"
import Headers from "./header"
import './styles.scss';

interface Props {children: ReactNode}

const Layout: React.FC<Props> = ({children}) => {
  return <div className="main">
          <Headers/>
              {children}
          <Footer/>
        </div>
}

export default Layout