const profile = {
    title: 'Engineer',
    department: 'Engineering'
  };
  
  function isEngineer(profile) {
    const {title, department} = profile
    return title === 'Engineer' && department === 'Engineering';
    
  }


  console.log(isEngineer(profile));