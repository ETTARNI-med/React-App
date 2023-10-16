import { useState } from "react";
import "../assets/style/PasswordColor.css";

export default function CheckPassword() {
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    const contentValue = e.target.value;
    setPassword(contentValue);

    // if (contentValue.length === 8) {
    //   setPassword('Your code is okey ')
    //   setColor("colorOrange");
    // } else if (contentValue.length > 8) {
    //   setPassword('Your code is strong ')
    //   setColor("colorGreen");
    // } else {
    //   setPassword('Your code is poooo')
    //   setColor("colorRed");    // }
    const newPasswordStrength =
      contentValue.length <= 4
        ? "Your code is sooo weaaak"
        : contentValue.length > 8
        ? "Your code is strong"
        : "Your code is okey ";

    const newColor =
      contentValue.length <= 4
        ? "colorRed"
        : contentValue.length > 8
        ? "colorGreen"
        : "colorOrange";

    setPassword(newPasswordStrength);
    setColor(newColor);

    if (contentValue === "") {
      // If the input is empty, clear the password and color
      setPassword("");
      setColor("");
      return; // Exit the function early to avoid unnecessary updates
    }
  };

  // contentValue === "" ? setPassword("") && setColor("");

  return (
    <>
      <h2>Checking if the password is strong </h2>
      <h3>Enter The Password</h3>
      <input onChange={handleChange} type="password" />
      <p>
        Your Password strength is :<span className={color}>{password}</span>
      </p>
    </>
  );
}
