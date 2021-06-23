/**
    * @description      : 
    * @author           : yaelm
    * @group            : 
    * @created          : 20/06/2021 - 21:08:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/06/2021
    * - Author          : yaelm
    * - Modification    : 
**/
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from '../action/calculation'
import { Grid, Paper, makeStyles, List, ListItem, ListItemText, ButtonGroup, Button } from '@material-ui/core'
import CalculationForm from './calculationForm'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(6),
        }
    },
    paper: {

        padding: '40px 0px 40px 0px',
    }
}));

const Calculations = ({ ...props }) => {
    const classes = useStyles();

    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllCalculations()
    }, [])

    const onDelete = id => {
        props.deleteCalculations(id, () => console.log("delete"))
    }

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <Grid >
                    <CalculationForm {...({ currentId, setCurrentId })} />
                </Grid>
            </Paper>
            <Paper elevation={3} className={classes.paper}>
                <Grid>
                    <h3>calculation history</h3>
                    <List component="nav" aria-label="secondary mailbox folders">
                        {
                            props.calculationsList.map((rec, index) => {
                                console.log()
                                return (<ListItem key={index} >
                                    <ListItemText primary={rec.firstNumber + rec.stringOperation + rec.secondNumber + '=' + rec.result} />
                                    <ButtonGroup variant="text"  >
                                        <Button><EditIcon color="primary"
                                            onClick={() => { setCurrentId(rec.id) }} />
                                        </Button>
                                        <Button onClick={() => onDelete(rec.id)}><DeleteIcon color="secondary" /></Button>
                                    </ButtonGroup>
                                </ListItem>)
                            })
                        }

                    </List>
                </Grid>
            </Paper>
        </div>
    );

}

const mapStateToProps = state => ({
    calculationsList: state.calculation.list
})

const mapActionToProps = {
    fetchAllCalculations: actions.fetchAll,
    deleteCalculations: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(Calculations);