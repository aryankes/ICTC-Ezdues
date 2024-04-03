import styles from './Dashboar.css';
import set_image from './Vector.png'
const name="Aryan Kesharwani";
const program="Btech 2nd Year";
const department="Computer Science and Engineering";
const Semester="Semester No. 4";
const Roll_Value="2201CS19"
const Phone_no=123456789;
const email="abcd@gmail.com"
const n=4;
function Dashboard() {
    return (
      <>
        <div className='head'>
          <h1>Dashboard</h1>
          <a href='https://www.example.com'><img src={set_image}></img></a>
        </div>
        
        <div className="profile">
          <h2>
            {name}
          </h2>
          <div className='content'>
              <div className='left'>
                <p>{program}</p>
                <p>{department}</p>
                <p>{Semester}</p>
              </div>
              <div className='left'>
                <p>Roll No.  {Roll_Value}</p>
                <p>Phone No.  +91 {Phone_no}</p>
                <p>Email:  {email}</p>
              </div>
              <div className='left' id='image'>

              </div>
          </div>
        </div>
        <div className='quickbox'>
        <div className='Quick_h'>
          <h3>Quick Analysis</h3>
        </div>
        </div>
       
        <div className='department_content'>
          
          <div className='s_no' id='container'>
          <h4>S. No.</h4>
            
            <div className='cell'></div>
            <div className='cell' ></div>
            <div className='cell'></div>
            <div className='cell'></div>
          </div>
          <div className='department'>
          <h4>Department</h4>
            <div className='cell'></div>
            <div className='cell' ></div>
            <div className='cell'></div>
            <div className='cell'></div>
          </div>
          <div className='no_due'>
          <h4>No. of dues</h4>
            <div className='cell'></div>
            <div className='cell' ></div>
            <div className='cell'></div>
            <div className='cell'></div>
          </div>
          <div className='certificate'>
          <h4>Initiate No-Dues Certificate</h4>
            <div className='cell'></div>
            <div className='cell' ></div>
            <div className='cell'></div>
            <div className='cell'></div>
            
          </div>
        </div>

        <div className='button_box'>
          <span>.....View Detailed Due Record</span>
          <a href="https://www.example.com"><button>more</button></a>
          
        </div>
      </>
    );
  }
  
  export default Dashboard;
  