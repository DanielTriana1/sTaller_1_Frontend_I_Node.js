import {useState} from 'react';
const Employees = () =>{

    const [employees, setEmployees] = useState([
    {
        id: 1,
        fullname: "Juan Roman Riquelme",
        designation: "Director",
        gender: "male",
        teamName: "CABJ"

    },
    {
        id: 2,
        fullname: "Carlos Alberto Tevez",
        designation: "Gerente",
        gender: "male",
        teamName: "CABj"
    },
    {
        id: 3,
        fullname: "Dorlan Pabon",
        designation: "Servicios Generales",
        gender: "male",
        teamName: "CABJ"

    },
    {
        id: 4,
        fullname: "Luis Advincula",
        designation: "Coordinador",
        gender: "male",
        teamName: "CABJ"

    },
    {
        id: 5,
        fullname: "Julian Alvarez",
        designation: "Coordinador",
        gender: "male",
        teamName: "CARP"

    },
    {
        id: 6,
        fullname: "Teofilo Gutierrez",
        designation: "Gerente",
        gender: "male",
        teamName: "CARP"

    },
    {
        id: 7,
        fullname: "Miguel Borja",
        designation: "Servicios Generales",
        gender: "male",
        teamName: "CARP"

    },
    {
        id: 8,
        fullname: "Carles Puyol",
        designation: "Seguridad",
        gender: "male",
        teamName: "FCB"

    },
    {
        id: 9,
        fullname: "Andres Iniesta",
        designation: "Asistente Presidencia",
        gender: "male",
        teamName: "FCB"

    },
    {
        id: 10,
        fullname: "Lionel Messi",
        designation: "Vice-Presidente",
        gender: "male",
        teamName: "FCB"

    },
    {
        id: 11,
        fullname: "Gerard Pique",
        designation: "Presidente",
        gender: "male",
        teamName: "FCB"

    }])

    return(
        <main>                    
        <table class="table table-primary text-center ">

                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Equipo</th>  
                    </tr>

       
        {
            employees.map((employee) => (
           

                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.fullname}</td>
                        <td>{employee.designation}</td>
                        <td>{employee.teamName  }</td>
                        
                    </tr>


            ))
        }
            </table>
    </main>
    )
}
export default Employees;