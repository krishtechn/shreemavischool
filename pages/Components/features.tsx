import React from 'react'
import Puzzle from 'icons/solid-mono/Puzzle';


const features = () => {

  let features1 = [
    {
      id: 1,
      title: "Secondary education",
      desc: "lower secondary education, concluded with exams for a Certificate – Secondary Educaton Examination, Grade-10;",
    },
    {
      id: 2,
      title: "Certificate – Secondary Education Examination, Grade-10",
      desc: "Lower secondary education is for students aged 13 to 15. At the end of lower secondary education, students take exams for a Certificate",
    },
    {
      id: 3,
      title: "Diploma: Certificate",
      desc: "Secondary Education Examination, Grade-10, issued by the NEB. Please note: this diploma had a different name before; see Diplomas before 2017",
    }
  ]

  return (
    <>
    <div className="row gx-lg-0 gy-10 align-items-center">
      <div className="col-lg-7 position-relative">
        <div
          className="position-absolute"
          style={{
            zIndex: 0,
            top: '50%',
            left: '50%',
            width: '140%',
            height: 'auto',
            transform: 'translate(-50%,-50%)'
          }}
        >
          <img className="w-100" src="/img/photos/blurry.png" alt="" />
        </div>

        <figure className="position-relative" style={{ zIndex: 2 }}>
          <img src="/img/photos/mi1.png" srcSet="/img/photos/mi1@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-4 ms-auto">
        {
          features1.map((items, index) => {
            return <div className="d-flex flex-row mb-6">
              <div>
                <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                  <Puzzle className="solid-duo text-grape-fuchsia" />
                </div>
              </div>

              <div>
                <h4 className="mb-1" style={{fontFamily:"sans-serif"}}>{items.title}</h4>
                <p className="mb-0" >{items.desc}</p>
              </div>
            </div>
          })
        }





      </div>
    </div>
    </>
  )
}


export default features