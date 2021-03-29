import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: props => (props.maxWidth ? `${props.maxWidth}px` : '100%'),
    borderRadius: props => props.borderRadius,
    width: props => `${props.width}px`,
    height: props => `${props.height}px`,
    maxHeight: props => `${props.maxHeight}px`
  }
})

const Image = props => {
  const classes = useStyles(props)

  return <img {...props} className={classes.root} />
}

export default Image
