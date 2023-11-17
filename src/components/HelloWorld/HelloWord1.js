export default function HellWorld1({label_value,label_name,label_type,children}){
    return (
        <>
            <label>{label_name}</label>
            <input type={label_type} name={label_name} placeholder={label_value}/>
            {children}
        </>
    )   
}
