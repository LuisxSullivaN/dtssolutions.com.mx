import { makeStyles, withTheme } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    color: props =>
      props.color === "primary"
        ? props.theme.palette.primary.main
        : props.color === "secondary"
        ? props.theme.palette.secondary.main
        : props.theme.palette.text.primary,
  },
})

const TextColor = props => {
  const classes = useStyles(props)

  return <span className={classes.root}>{props.children}</span>
}

export default withTheme(TextColor)
