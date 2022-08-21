export function Hold() {
  const containerStyling = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    bottom: "20px",
    right: "20px",
    width: "100%",
    height: "100%"
  }
  const countdownStyling = {
    position: "relative",
    color: "white",
    padding: "10px",
    fontFamily: "Inter",
    fontSize: "200px",
    lineHeight: "180px",
    textAlign: "right",
    maxWidth: "64ch",
    textTransform: "uppercase"
  };

  const countdownSmallStyling = {
    position: "relative",
    color: "white",
    padding: "10px",
    fontFamily: "Inter",
    fontSize: "160px",
    fontWeight: "100",
    lineHeight: "180px",
    textAlign: "right",
    maxWidth: "64ch",
    textTransform: "uppercase"
  };

  return (
    <div style={containerStyling}>
      <div id="countdown" style={countdownStyling}>Please hold</div>; 
      <div id="countdown" style={countdownSmallStyling}>Your call is important to us</div>; 
    </div>
  )
}