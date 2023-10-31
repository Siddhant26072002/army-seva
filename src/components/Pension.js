import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup, FormLabel } from 'react-bootstrap';
// import { colorPropType } from '@coreui/react/dist/components/Types';


export default function Pension() {
    const [display,setDisplay]=React.useState(false);
    const [pension,setPension]=React.useState();

    const [formData, setFormData] = React.useState(
        {
            dob: "", 
            retirement_type:"",
            years: Number,
            last_10mon: Number,
            last_mon: Number
        }
    )

   
    function handleSubmit(e){
        e.preventDefault();
        if(formData.years<10){
            alert('Years of service should be greater than 10 years');
        }
        else{
            console.log(pension);
            setDisplay(true);
            setPension(formData.last_10mon/10 > formData.last_mon ?formData.last_10mon/20 : formData.last_mon/2);
            
        }
    }

    function handleChange(event) {
        const {name, value, type} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
      }
      console.log(formData);

    
     

  return (

    

        <div className='pension' >
        
            <h1 style={{marginTop: '25px'}}>Pensioner's Portal</h1>
          <Form className='form'>
          
          <Form.Group >
              <Form.Label> Date of Retirement </Form.Label>
              <Form.Control type="text" 
                            placeholder="dd-mm-yyyy"
                            name="dob"
                            onChange={handleChange}
                            value={formData.dob}
                            />
            </Form.Group>
    

            <Form.Group >
            <Form.Label> Type of Retirement </Form.Label>
            <Form.Select onChange={handleChange}
             value={formData.retirement_type}
             name="retirement_type"

             >
                <option >Superannuation</option>
                <option >Voluntary</option>
            </Form.Select>
            </Form.Group >
            
            <Form.Group >
            <Form.Label>Total Qualifying Service in years</Form.Label>
              <Form.Control type="number" 
                            placeholder=""
                            name="years"
                            onChange={handleChange}
                            value={formData.years}
                            />
            </Form.Group>

            <Form.Group>
            <Form.Label>Sum of Last 10 months Emoluments
(Basic Pay + NPA  ) (in Rs.)</Form.Label>
              <Form.Control type="number" 
                            placeholder=""
                            name="last_10mon"
                            onChange={handleChange}
                            value={formData.last_10mon}
                            />
            </Form.Group>

            <Form.Group >
            <Form.Label>Sum of Last month Emoluments
(Basic Pay + NPA  ) (in Rs.)</Form.Label>
              <Form.Control type="number" 
                            placeholder=""
                            name="last_mon"
                            onChange={handleChange}
                            value={formData.last_mon}
                            />
            </Form.Group>
          
            <Button variant="primary" className="calc-pension" onClick={handleSubmit}  >
               Calculate Pension
            </Button>
          </Form>
        <div >
            
          {display &&  <h2 class='display-pension'>Pension provided: Rs.{pension} </h2> }
        
          </div>
          
        </div>
         
         
      );
     


}



{/* <div id="google_translate_element"></div> */}



