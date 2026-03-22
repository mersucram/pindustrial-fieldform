import React from 'react'
import PropTypes from 'prop-types'

const GeneralInfoForm = props => {
  return (
    <div>
      <div className="flex mb-4"> 
        <div className='w-full h-12'>
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="customerName">
            Customer
          </label>    
          <input
            value={props.customerName}
            id="customerName"
            className="w-full px-2.5 py-1.5 text-sm text-white border border-gray-300 rounded-md
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    shadow-sm transition duration-150 ease-in-out"
            type="text"
            placeholder="Customer Name"
            // onChange handler would typically be passed as a prop, e.g., props.handleInputChange
          />          
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 h-12 mx-0.5">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="jobNo">
              Job No.
          </label>    
          <input
            value={props.jobNo}
            id="jobNo"
            className="w-full px-2.5 py-1.5 text-sm text-white border border-gray-300 rounded-md
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    shadow-sm transition duration-150 ease-in-out"
            type="text"
            placeholder="Job No."
            // onChange handler would typically be passed as a prop, e.g., props.handleInputChange
          />      
        </div>
        <div className="w-1/2 h-12 mx-0.5">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="phase">
              Phase
          </label>    
          <input
            value={props.phase}
            id="phase"
            className="w-full px-2.5 py-1.5 text-sm text-white border border-gray-300 rounded-md
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    shadow-sm transition duration-150 ease-in-out"
            type="text"
            placeholder="Phase"
            // onChange handler would typically be passed as a prop, e.g., props.handleInputChange
          />        
        </div>
      </div> 
      <div className="flex mb-4">
        <div className="w-1/2 h-12 mx-0.5">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="date">
              Date
          </label>
          <input
            value={props.date}
            id="date"
            className="w-full px-2.5 py-1.5 text-sm text-white border border-gray-300 rounded-md
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    shadow-sm transition duration-150 ease-in-out"
            type="date"
            placeholder="Date"
          />              
        </div>
        <div className="w-1/2 h-12 mx-0.5">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="dayOfWeek">
              Day of Week
          </label>
          <input
            value={props.dayOfWeek}
            id="dayOfWeek"
            className="w-full px-2.5 py-1.5 text-sm text-white border border-gray-300 rounded-md
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    shadow-sm transition duration-150 ease-in-out"
            type="text"
            placeholder="Day of Week"
          />
        </div>
      </div>
      <div className="flex mb-4"> 
        <div className='w-1/2 h-12 mx-0.5'>
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="onSiteTime">
            On Site Time  
          </label>
          <input
            value={props.onSiteTime}
            id="onSiteTime"
            className="w-full px-2.5 py-1.5 text-sm text-white border border-gray-300 rounded-md
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    shadow-sm transition duration-150 ease-in-out"
            type="text"
            placeholder="On Site Time"
          />
        </div>
        <div className='w-1/2 h-12 mx-0.5'>
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="offSiteTime">
            Off Site Time
          </label>
          <input
            value={props.offSiteTime}
            id="offSiteTime"
            className="w-full px-2.5 py-1.5 text-sm text-white border border-gray-300 rounded-md
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    shadow-sm transition duration-150 ease-in-out"
            type="text"
            placeholder="Off Site Time"
          />
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-full h-12">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="driveTime">
            Drive Time (To/From Job Hours)
          </label>
          <div className="flex mb-4">
            <div className="w-1/4 h-12 mr-2">
              <input
                value={props.offSiteTime}
                id="driveTimeTo"
                className="w-full px-2.5 py-1.5 text-sm text-white border border-gray-300 rounded-md
                        focus:outline-none focus:ring-blue-500 focus:border-blue-500
                        shadow-sm transition duration-150 ease-in-out"
                type="number"
                placeholder="To Job"
              />            
            </div>
            <div className="w-1/4 h-12 mr-2">
              <input
                value={props.offSiteTime}
                id="driveTimeFrom"
                className="w-full px-2.5 py-1.5 text-sm text-white border border-gray-300 rounded-md
                        focus:outline-none focus:ring-blue-500 focus:border-blue-500
                        shadow-sm transition duration-150 ease-in-out"
                type="number"
                placeholder="From Job"
              />                 
            </div>
            <div className="w-1/4 h-12 mr-2">
              <input
                value={props.offSiteTime}
                id="driveTimeFrom"
                className="w-full px-2.5 py-1.5 text-sm text-white border border-gray-300 rounded-md
                        focus:outline-none focus:ring-blue-500 focus:border-blue-500
                        shadow-sm transition duration-150 ease-in-out"
                type="number"
                placeholder="From Job"
              />              
            </div>
            <div className="w-1/4 h-12 mr-2">
              <input
                value={props.offSiteTime}
                id="driveTimeTo"
                className="w-full px-2.5 py-1.5 text-sm text-white border border-gray-300 rounded-md
                        focus:outline-none focus:ring-blue-500 focus:border-blue-500
                        shadow-sm transition duration-150 ease-in-out"
                type="number"
                placeholder="To Job"
              />              
            </div>
          </div>          
        </div>
      </div>      
    </div>
  )
}

GeneralInfoForm.propTypes = {
  customerName: PropTypes.string,
  jobNo: PropTypes.string,
  phase: PropTypes.string,
  date: PropTypes.string,
  dayOfWeek: PropTypes.string,
  onSiteTime: PropTypes.string,
  offSiteTime: PropTypes.string,
  driveTimeTo: PropTypes.string,
  driveTimeFrom: PropTypes.string,
  truckNo: PropTypes.string,
  odometerStart: PropTypes.string,
  odometerEnd: PropTypes.string,
  totalMiles: PropTypes.string,
}

export default GeneralInfoForm  