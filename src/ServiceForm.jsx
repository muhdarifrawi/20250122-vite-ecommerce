import React, {useState, useEffect} from "react";
import axios from "axios";

function ServiceForm() {

    const [serviceForm, setServiceForm] = useState([]);
    const [submitService, setSubmitService] = useState([]);
    
    console.log(this.props);

    useEffect(() => {
        const fetchServiceForm = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_DB_URL + "/services/add");
                setServiceForm(response.data);
                console.log("service >>>", response.data.serviceType)
                console.log("serviceForm >>> ", serviceForm)
            } catch (error) {
                console.log("[Error]Service form fetch error :", error);
            }
        }

        fetchServiceForm();
    }, []);

    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSubmitService(values => ({...values, [name]: value}))
        console.log(submitService);
    } 

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(submitService);
        await axios.post(import.meta.env.VITE_DB_URL + "/services/add", submitService)
        .then((response)=>{
            console.log(response);
        });

    }

    return (
        <>
            <div className="container">
                <h1>Service Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="row g-3 align-items-center my-3">
                        <div className="col-auto">
                            <label htmlFor="serviceNameInput" className="col-form-label">Service Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="serviceNameInput" name="serviceNameInput" 
                            className="form-control" aria-describedby="serviceNameHelp" 
                            value={submitService.serviceNameInput || ""}
                            onChange={handleFormChange}
                            required/>
                        </div>
                        <div className="col-auto">
                            <span id="serviceNameHelp" className="form-text">
                                Insert service name
                            </span>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center my-3">
                        <h1>Cost</h1>
                        <div className="col-auto">
                            <label htmlFor="serviceCostInput" className="col-form-label">Service Cost</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="serviceCostInput" name="serviceCostInput" 
                            className="form-control" aria-describedby="serviceCostHelp" 
                            value={submitService.serviceCostInput || ""}
                            onChange={handleFormChange}
                            required/>
                        </div>
                        <div className="col-auto">
                            <span id="serviceCostHelp" className="form-text">
                                Insert service cost
                            </span>
                        </div>
                    </div>
                    <select className="form-select my-3" 
                    aria-label="select service type" 
                    name="serviceTypeId" onChange={handleFormChange} required>
                        <option defaultValue>Select service type</option>
                        {   !serviceForm["serviceType"] ? "" :
                            serviceForm["serviceType"].map((obj) => {
                                
                                return (
                                    <option id={obj.service_type_id} 
                                    value={obj.service_type_id}
                                    key={obj.service_type_id}>
                                        {obj.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <select className="form-select my-3" aria-label="select staff"
                    name="staffId" onChange={handleFormChange} required>
                        <option defaultValue>Select staff</option>
                        {   !serviceForm["staff"] ? "" :
                            serviceForm["staff"].map((obj) => {
                                
                                return (
                                    <option id={obj.staff_id} 
                                    value={obj.staff_id}
                                    key={obj.staff_id}>
                                        {obj.name}, {obj.title}
                                    </option>
                                )
                            })
                            
                        }
                    </select>

                    <button type="submit" className="btn btn-primary mb-5">Submit</button>
                </form>
            </div>

        </>
    )
}

export default ServiceForm;
