export const loginUser = async (email, password) => {
  const response = await fetch("http://localhost:8000/auth/login/", {
    method: "POST",
    body: JSON.stringify({
      username: email,
      password
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (!response.ok) {
    throw new Error('Error creando usuario')
  }
}