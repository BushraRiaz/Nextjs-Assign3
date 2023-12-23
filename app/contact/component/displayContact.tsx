import { contactTypes } from "@/types/components";

export default function DisplayContact(props: { contactData: contactTypes[] }) {
  return (
    <div>

      <div>
        <table>
          <tr>
            <th>First Name</th><span> </span>
              <th>Last Name</th> <span> </span>
              <th>UserName</th>
              <th>CNIC</th> 
              <th>Country</th>
            <th>City</th> 
            <th>Company Name</th>
            <th>Email</th> 
            <th>Phone</th> <span> </span>
            <th>Message</th>
          </tr>
          {props.contactData.map((item, index) => {
            return (
              <tr  key={index}>
                <td>{item.name}</td> <span> </span>
                <td>{item.lname}</td> <span> </span>
                <td>{item.UserName}</td>
                <td>{item.Cnic}</td> 
                <td>{item.Country}</td>
                <td>{item.City}</td>
                <td>{item.CompanyName}</td>
                <td>{item.email}</td> <span> </span>
                <td>{item.phone}</td> <span> </span>
                <td>{item.message}</td>
              </tr>
            )
          })}

        </table>
      </div>

    </div>
  )
}