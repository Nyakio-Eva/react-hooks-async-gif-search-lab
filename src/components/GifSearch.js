import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function GifSearch({onSubmit, searchTerm, setSearchTerm}){

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit(searchTerm);

    }

    const handleChange =(event) =>{
       setSearchTerm(event.target.value);
    }

    return(
        <div className='container'>
    
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter a search term</Form.Label>
                    <Form.Control type="text" placeholder="enter term here" onChange={handleChange} value={searchTerm} required/>
                </Form.Group>
                <button className="btn btn-success mt-3" type="submit">
                    Find Gifs
                </button>
            </Form>
          
        </div>
    )
}

export default GifSearch;