import { useEffect, useState } from "react";

function Countdown(props) {
    const [partyTime, setPartyTime] = useState(false)
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() =>{
      var dated = props.month + "/" + props.day +"/" + props.year + " " + props.clock;
      console.log(dated);
        // const target = new Date("12/31/2022 23:59:59");
        const target = new Date("{props.month}/{props.day}/{props.year} {props.clock}");
        const interval = setInterval(() =>{ 
        const now = new Date();
        const difference = target.getTime() - now.getTime();

        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);

        const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);

        const m = Math.floor( 
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setMinutes(m);

        const s = Math.floor(
            (difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if(d <= 0 && h <= 0 && m <= 0 && s <= 0){
                setPartyTime(true);
            }

        }, 1000)
        
        return () => clearInterval(interval)
    },[])

    return ( 
        <div> 
          {partyTime ? (
            <div className="max-w-md mx-auto ">
              <div className="h-20">
                <div className="w-full px-4 items-center justify-center text-skin-base text-center">
                  <h4 className="font-sans text-skin-base text-2xl py-2">
                  ACARA TELAH SELESAI 
                  </h4>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto ">
              <div className="h-20 flex bg-skin-fill items-center justify-center">
                <div className="w-16 m-1 items-center glassmorphism rounded-tl-xl rounded-br-xl justify-center text-center">
                  <h4 className="font-sans text-skin-base text-2xl py-1">
                  {days} 
                  </h4>
                  <p className="text-skin-base text-xs py-1">
                    hari
                  </p>
                </div>
                <div className="w-16 m-1 items-center glassmorphism rounded-tl-xl rounded-br-xl justify-center text-center">
                  <h4 className="font-sans text-skin-base text-2xl py-1">
                  {hours} 
                  </h4>
                  <p className="text-skin-base text-xs py-1">
                    jam
                  </p>
                </div>
                <div className="w-16 m-1 items-center glassmorphism rounded-tl-xl rounded-br-xl justify-center text-center">
                  <h4 className="font-sans text-skin-base text-2xl py-1">
                  {minutes} 
                  </h4>
                  <p className="text-skin-base text-xs py-1">
                    menit
                  </p>
                </div>
                <div className="w-16 m-1 items-center glassmorphism rounded-tl-xl rounded-br-xl justify-center text-center">
                  <h4 className="font-sans text-skin-base text-2xl py-1">
                  {seconds} 
                  </h4>
                  <p className="text-skin-base text-xs py-1">
                    detik
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };

export default Countdown;