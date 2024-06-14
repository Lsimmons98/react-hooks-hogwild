import React from "react";

const Hog = ({hog, setSelectedHog, selectedHog}) => {
  const handleClick = (e) => {
    e.preventDefault()
    setSelectedHog(selectedHog===hog ? '' : hog)
  }

if(hog!==selectedHog){
	return (
		<div id={hog.name} className='pigTile' onClick={handleClick}>
      <h3>{hog.name}</h3>
      <img src={hog.image}/>
		</div>
	)} else {
    return(
      <div id={hog.name} className='pigTile' onClick={handleClick}>
      <h3>{hog.name}</h3>
      <div>
        <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
        <p>Specialty: {hog.specialty}</p>
        <p>Weight: {hog.weight}</p>
      </div>
      <img src={hog.image}/>
		</div>
    )
  }
};

export default Hog;
