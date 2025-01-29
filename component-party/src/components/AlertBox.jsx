const AlertBox = ({status, children}) => {
    
    
    
    return ( 
        <>
        <div className={`alert-box alert-${status}`}>
        <span className="alert-message">{children}</span>
    </div>
        </>
     );
}
 
export default AlertBox;