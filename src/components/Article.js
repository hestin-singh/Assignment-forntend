import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    minHeight: 500,
    width: 500,
  },
  format:{
    display:'inline'
  },


 
  control: {
    padding: theme.spacing.unit * 2,
  },
  [theme.breakpoints.down("md")]:{
    paper:{
      minHeight:350,
      width:300,
      padding:theme.spacing.unit*4
    }
  }
});

class Article extends React.Component {
    
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    const datas = this.props.article;
    
    console.log(datas);
    return (
      <Grid container className={classes.root} spacing={24}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {[0 ].map(value => (
              <Grid key={value} item>
               {datas.map((data)=>
                    (   
                       <Paper key={data.article.id} className={classes.paper} >
                      <Typography  align="center" component="h2" variant="headline"  gutterBottom  >{data.article.title}</Typography>
                  <div px={25}> <img  width={300} height={200} src={data.article.image_url}/>
                  </div>
                  {data.categories.map(value=>(
                  <Chip key={value.id} color="primary" label={value.name}/>
                )
                )}
                  <Divider variant="middle" />
                <div>  
                <span className={classes.format} dangerouslySetInnerHTML={{__html :`${data.article.text.substring(0,150)}`}}
                 /><a href={data.article.url}>...click to know more</a></div>
                      
               
               
                <div> <IconButton aria-label="Add to favorites">
                  {data.article.likes_count.length>0? data.article.likes_count: ""}<FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton></div>
                </Paper>
                    ) )
                    }
                   
              </Grid>
            ))}
          </Grid>
        </Grid> 
      </Grid>
    );
  }
}


export default withStyles(styles)(Article);

/**
 * 
 */