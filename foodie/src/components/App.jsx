import React,{useState} from "react";
import Header from "./Header";
import Restdetails from "./Restdetails";


function App(){
  const restId=6;
  return(
    <div class="app-body">
      <Header />
      <div className="rest-images">
          <img alt="top-img1"  className="img-left"  src="https://b.zmtcdn.com/data/pictures/chains/4/18610904/edf001589fe6c74444cd3d748043db47_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" />
          <img alt="top-img2" className="img-middle-top zoom"  src="https://b.zmtcdn.com/data/pictures/chains/4/18610904/3f5d6993eb4671a545f8135ea635e318.jpg?fit=around|300:273&crop=300:273;*,*" />
          <img alt="top-img3" className="img-middle-down zoom" src="https://b.zmtcdn.com/data/pictures/chains/4/18610904/ee6a6e668efce019ca1def4525507944.jpeg?fit=around|300:273&crop=300:273;*,*" />
          <img alt="top-img4" className="img-right-top zoom" src="https://b.zmtcdn.com/data/pictures/6/20826/1974e810ff8449e9c0ee82630036b560.jpg?fit=around|300:273&crop=300:273;*,*" />
          <img alt="top-img5" className="img-right-down zoom" src="https://b.zmtcdn.com/data/pictures/chains/3/19264953/1c6409dcd5379e6c536d312eadbcd41d.jpeg?fit=around|300:273&crop=300:273;*,*" />
      </div>
      <div style={{position:"relative"}}>
        <Restdetails restId={restId}/>
      </div>

    </div>
  );
}
export default App;
