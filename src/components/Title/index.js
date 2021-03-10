import Typography from "@material-ui/core/Typography"
import { makeStyles, withTheme } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    fontSize: props => `${props.fontSize || 30}px`,
    fontWeight: 400,
  },
})

const Title = props => {
  const classes = useStyles(props)

  return (
    <Typography {...props} className={classes.root}>
      {props.children}
    </Typography>
  )
}

export default withTheme(Title)
