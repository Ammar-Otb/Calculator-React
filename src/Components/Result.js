const Result = ({res}) => {
    return (
      <>
        <input type="text" className="form-control m-2" readOnly={true} value={res}/>
      </>
    );
}
 
export default Result;