import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export function Home(props) {
  const lowerStyling = {
    position: "absolute",
    bottom: 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: "100%",
    height: "100px",
    padding: "0 20px 20px 0"
  }

  const logoStyling = {
    transform: "scale(0.75)"
  }

  const socialStyling = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    listStyle: "none",
    color: "white",
    fontWeight: "300"
  }
  return (
    <div style={lowerStyling} id="lower">
      <img style={logoStyling} src="/logo-outline-cyan.svg" alt="" />
      <div id="social">
        <ul style={socialStyling}>
          <li><FontAwesomeIcon icon={brands('twitter')} /> <FontAwesomeIcon icon={brands('codepen')} /> <FontAwesomeIcon icon={brands('instagram')} /></li>
          <li>{ props.name }</li>
        </ul>
        
      </div>
    </div>
  )
}