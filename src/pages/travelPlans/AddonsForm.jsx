import React, { useState } from 'react';
import addIcon from '../../assets/addOns.svg'
import './AddonsForm.css'
import {
  Button,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';
import { FaPlus } from 'react-icons/fa'; // Font Awesome Plus Icon

const AddonsForm = () => {
  const [addons, setAddons] = useState({
    plateGlass: false,
    moneyInTransit: false,
    publicLiability: false,
    burglary: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAddons({ ...addons, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Addons:', addons);
  };

  return (
    <Card className='addOnFormContainer'>
      <CardBody>
        <CardTitle tag="h4" className=" title-text mb-3">
          Included Addons
          {/* <FaPlus style={{ float: 'right', cursor: 'pointer' }} /> */}
          <img src={addIcon} alt="image" style={{ float: 'right', cursor: 'pointer' }} />
        </CardTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup check className="mb-2">
            <Label check>
              <Input
                type="checkbox"
                name="plateGlass"
                checked={addons.plateGlass}
                onChange={handleCheckboxChange}
              />
              Plate Glass
            </Label>
          </FormGroup>
          <FormGroup check className="mb-2">
            <Label check>
              <Input
                type="checkbox"
                name="moneyInTransit"
                checked={addons.moneyInTransit}
                onChange={handleCheckboxChange}
              />
              Money In Transit
            </Label>
          </FormGroup>
          <FormGroup check className="mb-2">
            <Label check>
              <Input
                type="checkbox"
                name="publicLiability"
                checked={addons.publicLiability}
                onChange={handleCheckboxChange}
              />
              Public Liability
            </Label>
          </FormGroup>
          <FormGroup check className="mb-3">
            <Label check>
              <Input
                type="checkbox"
                name="burglary"
                checked={addons.burglary}
                onChange={handleCheckboxChange}
              />
              Burglary
            </Label>
          </FormGroup>
          <Button color="primary" type="submit" block>
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default AddonsForm;
