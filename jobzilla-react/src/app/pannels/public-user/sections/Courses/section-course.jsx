import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function SectionCourses() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6); // Adjustable items per page

  // Fetch Courses
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/get-courses`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCourses(data.courses);
        } else {
          setError("Failed to fetch courses.");
        }
      })
      .catch(() => setError("Server error. Please try again later."));
  }, []);

  // Calculate Date Difference
  function getDateDifference(startDate) {
    const now = new Date();
    const start = new Date(startDate);

    if (isNaN(start)) return { diffDays: 0, diffMonths: 0 };

    const diffTime = now - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30)); // Approximate months

    return { diffDays, diffMonths };
  }

  // Pagination Logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="row">
        {error ? (
          <p className="text-danger">{error}</p>
        ) : currentCourses.length > 0 ? (
          currentCourses.map((course) => {
            const { diffDays, diffMonths } = getDateDifference(course.createdAt);
            return (
              <div className="col-lg-4 col-md-4 m-b30" key={course._id}>
                <div className="twm-jobs-grid-style1 shadow-md" >
            
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${course.courseimage}`}
                      alt={course.coursetitle}
                      style={{ objectFit: "cover", width: "100%", height: "135px", borderRadius:'4px' }}
                    />
              
                
                  <div className="twm-mid-content">
                  <h3 className="twm-job-title" style={{fontSize:'20px',color:'#333',lineHeight:'26px',fontWeight:'700',textTransform:'capitalize'}}>
  {/* <i className="fa fa-graduation-cap" style={{ marginRight: '10px',fontSize:'15px' }}></i> */}
  {course.coursetitle}
</h3>
<div class="claim" style={{marginTop:'12px',height:'24px',fontSize:'12px',width:'max-content',padding:'4px 24px 4px 12px',background:'linear-gradient(90deg,#fff7c4 48.2%,rgba(255,247,200,0) 100%),linear-gradient(90deg,#fff8c4 60.53%,rgba(255,248,196,0) 100%)'}}>
                            <span>course with guaranteed job</span>
                    </div>

                    <div class="perks" style={{fontSize:'12px',lineHeight:'18px',fontWeight:'400',color:'#484848'}}>
            <div class="duration d-flex" style={{marginTop:'12px'}}>
                <i className="fa fa-clock" style={{fontSize:'16px' ,marginRight:'9px'}}></i>
                {course.courseduration}
            </div>
            <div class="stipend-offered d-flex" style={{marginTop:'12px'}}>
                <i className="fa fa-rupee-sign"  style={{fontSize:'16px' ,marginRight:'9px'}}></i>
                {new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(course.courseprice)} (15%) off
            </div>
            <div class="job-opportunity d-flex" style={{marginTop:'12px'}}>
                <i className="fa fa-briefcase"style={{fontSize:'16px' ,marginRight:'9px'}} ></i>
                {course.coursedescription ? course.coursedescription : "Duration not specified"}
            </div>
        </div>
        <div class="specialization-card-footer">
        <span class="application-closing-container">
            <div class="application-closing-text">
                Application closes
            </div>
            <div class="closing-date">
                23rd Feb
            </div>
        </span>
        <div class="know-more">
            Know More
            <i class="fa fa-arrow-right"></i>
        </div>
    </div>
    


{/*                     
<p className="twm-job-address">
  <i className="fa fa-clock" style={{ marginRight: '10px' }}></i>
  {course.courseduration}
</p>

<p className="twm-job-address">
  <i className="fa fa-book" style={{ marginRight: '10px' }}></i>
  {course.coursedescription ? course.coursedescription : "Duration not specified"}
</p>
<p className="twm-job-address">
  <i className="fa fa-chair" style={{ marginRight: '10px' }}></i>
  {course.courseseat ? course.courseseat : "Duration not specified"} Seat
</p>
<p className="twm-job-address">
  <i className="fa fa-dollar-sign" style={{ marginRight: '10px' }}></i>
  {course.placementprice ? course.placementprice : "Duration not specified"}
</p> */}

                  </div>
                  {/* <div className="twm-right-content">
                  <div className="twm-jobs-amount" style={{width:'80%',margin:'0'}}>
  ₹{new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(course.courseprice)}<span style={{marginLeft:'4%'}}>(15%) off</span>
</div>

                  </div> */}
{/* <h3 style={{paddingTop:'10px',  fontWeight:'bold'}}>Learn About This Course</h3>
                      <ul className="description-list-2">
                      <li style={{fontWeight:'normal', color:'rgb(0, 0, 0)'}}><i className="feather-check" />Resume Paepeaedion/CV Evaluation</li>
                      <li style={{fontWeight:'normal' ,color:'rgb(0, 0, 0)'}}><i className="feather-check" />Weekly Mock Interview (sunday)</li>
                      <li style={{fontWeight:'normal' ,color:'rgb(0, 0, 0)'}}><i className="feather-check" /> Aptitude (Assesment/versett) Pacparation (MNC)</li>
                      <li style={{fontWeight:'normal' ,color:'rgb(0, 0, 0)'}}><i className="feather-check" />English Communication Guidence for interviews. </li>
                      <li style={{fontWeight:'normal' ,color:'rgb(0, 0, 0)'}}><i className="feather-check" />Live Lecture Upto 20</li>
                      <li style={{fontWeight:'normal' ,color:'rgb(0, 0, 0)'}}><i className="feather-check" />Interview Lineup Day Ist</li>
                      <li style={{fontWeight:'normal' ,color:'rgb(0, 0, 0)'}}><i className="feather-check" />personalized Counselling </li>
                      <li style={{fontWeight:'normal' ,color:'rgb(0, 0, 0)'}}><i className="feather-check" /> Get placement in a MNC </li>

                
                </ul> */}
                  {/* <div style={{width:'100%', backgroundColor:'#008BDC', height:'40px', marginTop:'10px', display:'flex', justifyContent:'center', alignItems:'center',borderRadius:'8px'}}>
<h4 ><NavLink to={`http://localhost:3000/contact-us`} style={{color:'white',fontFamily:'Rubik, sans-serif', fontWeight:'550px', fontSize:'16px', margin:'0' }} >Buy Now</NavLink></h4>
                    </div> */}
              
                </div>
                
              </div>
            );
          })
        ) : (
          <p>No courses available.</p>
        )}
      </div>
      {/* Pagination */}

    </>
  );
}

export default SectionCourses;
