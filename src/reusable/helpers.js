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