import { Helmet } from "react-helmet"

function HelmetComp({title}) {
  return <Helmet><title>{title}</title></Helmet>
}

export default HelmetComp
