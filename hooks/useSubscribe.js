
const useSubscribe = () => {
    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        try{
            const email = e.target.email.value

            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
              });
        
              const data = await response.json();
              console.log(data);

        }catch(error){
            console.log(error)
        }

        e.target.email.value = ""
    }

    return handleSubmit

};

export default useSubscribe;