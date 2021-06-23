/**
    * @description      : 
    * @author           : yaelm
    * @group            : 
    * @created          : 20/06/2021 - 20:29:05
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/06/2021
    * - Author          : yaelm
    * - Modification    : 
**/
import React, { useState, useEffect } from 'react'
import { makeStyles, MenuItem, TextField, FormControl, InputLabel, Select, Button } from '@material-ui/core';
import * as actions from '../action/calculation'
import { connect } from 'react-redux'
//style
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100px',
            // paddingTop: '50px',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100px',
        // paddingTop: '50px',
    },
    btn: {
        margin: theme.spacing(1),
    }
}));

const initialFieldValues = {
    firstNumber: '',
    secondNumber: '',
    stringOperation: '',
    result: 'result'
}



const CalculationsForms = ({ ...props }) => {
    const [values, setValues] = useState(initialFieldValues);

    const handleChange = event => {
        const { name, value } = event.target
        const fieldValue = { [name]: value }
        setValues({
            ...values,
            ...fieldValue
        });
    };

    const resetForm = () => {
        setValues({ ...initialFieldValues })
        props.setCurrentId(0);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(values)
        if (props.currentId === 0)
            props.createCalculation(values, () => { console.log("insert successfully!!") })

        else
            props.updateCalculation(props.currentId, values, () => { console.log("update successfully!!") })
    }

    const classes = useStyles();

    useEffect(() => {
        console.log(values)
        if (props.currentId !== 0)
            setValues({
                ...props.calculationsList.find(x => x.id === props.currentId)
            })
    }, [props.currentId])

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                name="firstNumber"
                id="outlined-number"
                label="Number"
                type="number"
                onChange={handleChange}
                variant="outlined"
                value={values.firstNumber}
            />
            <FormControl variant="outlined" className={classes.formControl} >
                <InputLabel id="demo-simple-select-outlined-label">operator</InputLabel>
                <Select
                    name="stringOperation"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={values.stringOperation}
                    onChange={handleChange}
                    label="Operator"
                >
                    <MenuItem value="">
                        <em>select operator</em>
                    </MenuItem>
                    <MenuItem value='+'>+</MenuItem>
                    <MenuItem value='-'>-</MenuItem>
                    <MenuItem value='*'>*</MenuItem>
                    <MenuItem value='/'>/</MenuItem>
                </Select>
            </FormControl>
            <TextField
                name="secondNumber"
                id="outlined-number"
                label="Number"
                type="number"
                onChange={handleChange}
                variant="outlined"
                value={values.secondNumber}
            />
            <label>=</label>
            <TextField
                disabled
                id="outlined-disabled"
                variant="outlined"
                value={values.result}
            />
            <div>
                <Button
                    variant="contained"
                    type="submit"
                    className={classes.btn}>
                    Calculate</Button>
                <Button
                    variant="contained"
                    className={classes.btn}
                    onClick={resetForm}>
                    Reset</Button>
            </div>
        </form>);
}

const mapStateToProps = state => ({
    calculationsList: state.calculation.list
})

const mapActionToProps = {
    createCalculation: actions.create,
    updateCalculation: actions.update

}

export default connect(mapStateToProps, mapActionToProps)(CalculationsForms);