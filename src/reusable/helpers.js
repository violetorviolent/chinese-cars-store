import { useLayoutEffect, useState } from "react";

const helpers = {
    useWindowWidth: () => {
        const [windowWidth, setWindowWidth] = useState(0);
      
        const handleSize = () => {
          setWindowWidth( window.innerWidth);
        };
      
        useLayoutEffect(() => {
          handleSize();
      
          window.addEventListener("resize", handleSize);
      
          return () => window.removeEventListener("resize", handleSize);
        }, [window.innerWidth]);
      
        return windowWidth;
      },

      usePomodoroSize: () =>{
        const width = helpers.useWindowWidth();
        let size = 0;
        if (width >= 1500){
            size = 150
        }else if ((width < 1500) && (width >= 1350)){
            size = 120
        }else if ((width < 1350) && (width > 750)){
            size = 100
        }else {
            size =60
        }
           return size
      },
      
      useSlidesToShow: (length) => {
        return (helpers.useWindowWidth() < 750)? 3 : length;
    },

     useAxios: (configObj) => {
      const {
          axiosInstance,
          method,
          url,
          requestConfig = {}
      } = configObj;
  
      const [response, setResponse] = useState([]);
      const [error, setError] = useState('');
      const [loading, setLoading] = useState(true);
      const [reload, setReload] = useState(0);
  
      const refetch = () => setReload(prev => prev + 1);
  
      useLayoutEffect(() => {
        
          const controller = new AbortController();
  
          const fetchData = async () => {
              try {
                  const res = await axiosInstance[method.toLowerCase()](url, {
                      ...requestConfig,
                      signal: controller.signal
                  });
                  console.log(res);
                  setResponse(res.data);
              } catch (err) {
                  console.log(err.message);
                  setError(err.message);
              } finally {
                  setLoading(false);
              }
          }
  
          // call the function
          fetchData();
  
          // useEffect cleanup function
          return () => controller.abort();
  
          // eslint-disable-next-line
      }, [reload]);
  
      return [response, error, loading, refetch];
  }
}

export default helpers;