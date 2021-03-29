import { useForm } from 'react-hook-form'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Form = () => {
  const url = 'https://0y3h0h7gjk.execute-api.us-east-1.amazonaws.com/latest'
  const { register, handleSubmit } = useForm()

  const onSubmit = async data => {
    console.log(data)
    let email = {
      name: data.name,
      company: data.company,
      phone: data.phone,
      desc: data.comments
    }
    try {
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      let request = {
        method: 'POST',
        headers,
        body: JSON.stringify(email),
        redirect: 'follow'
      }
      let response = await fetch(`${url}/sendEmail`, request)
      let json = await response.json()
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        boxShadow={16}
        padding={3}
        component={Paper}
        borderRadius={16}
        elevation={0}
        maxWidth={500}
      >
        <TextField
          name="name"
          inputRef={register}
          required
          label="Nombre"
          fullWidth
        />
        <TextField
          name="company"
          inputRef={register}
          label="Compañía"
          fullWidth
          margin="normal"
        />
        <TextField
          name="phone"
          inputRef={register}
          required
          label="Número telefónico"
          fullWidth
          margin="normal"
        />
        <TextField
          name="comments"
          inputRef={register}
          required
          label="Comentarios"
          fullWidth
          multiline
          placeholder="¿En qué te podemos ayudar?"
          margin="normal"
          rows={4}
        />
      </Box>

      <Box marginTop={3}>
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
      </Box>
    </form>
  )
}

export default Form
