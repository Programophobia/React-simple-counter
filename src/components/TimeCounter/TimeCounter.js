
    const TimeCounter = props => {

        const time = ms => { 
          let sec = Math.floor((ms / 1000) % 60);
          let min = Math.floor((ms / (1000 * 60)) % 60);
          let hour = Math.floor((ms / (1000 * 60 * 60)) % 24)
          let msec = Math.floor((ms % 1000) / 100);
          return (`${hour} : ${min} : ${sec} : ${msec}`);
        }
      
        return (
          <div>
            {time(props.miliseconds)}
          </div>
        );
      }
    
    export default TimeCounter;


    

