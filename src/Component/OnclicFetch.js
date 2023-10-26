import {useState} from 'react';



const OnclickFetch=()=>{
    const [data, setData] = useState(null)

    const fetchData = () => {
        // Simulated data fetching. Replace this with actual API call.
        setTimeout(() => {
          setData({ title: 'Fetched Data Title', content: 'Fetched Data Content' });
        }, 1000);
      };
    return(
        <div>
            <button onClick={fetchData}>get data</button>
           {data && (
           <table>
                <tbody>
                <tr>
                    <td>{data.title}</td>
                    <td>{data.content}</td>
                </tr>
                </tbody>
            </table>
    )}
        
        
        </div>
    )
}
export default OnclickFetch;