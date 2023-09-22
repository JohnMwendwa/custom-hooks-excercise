import { useEffect, useState } from "react";

export default function useKeyEvent(keys) {
  const [pressedKey, setPressedKey] = useState();

  useEffect(() => {
    function keyPressedHandler(event) {
      const pressedKey = event.key;

      if (![...keys].includes(pressedKey)) {
        alert("Invalid key!");
        return;
      }
      setPressedKey(pressedKey);
    }

    window.addEventListener("keydown", keyPressedHandler);

    return () => window.removeEventListener("keydown", keyPressedHandler);
  }, []);

  return pressedKey;
}
