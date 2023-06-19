import React from "react";
import { Text } from "./components/Text";
import { Button } from "./components/Button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <Text variant="title">Enjoy Cooking</Text>
      <Text variant="subtitle">Acha mais de 1200 receitas de comidas</Text>
      <Text>Acha mais de 1200 receitas de comidas</Text>

      <Button>Sign In</Button>
    </div>
  );
}

export default App;
